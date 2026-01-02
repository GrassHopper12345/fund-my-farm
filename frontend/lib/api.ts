const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

interface ApiResponse<T> {
  data?: T;
  message?: string;
  errors?: Array<{ msg: string; param: string }>;
}

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  // Handle 401 (Unauthorized) gracefully - don't throw, return empty response
  if (response.status === 401) {
    return { message: "Not authenticated" } as ApiResponse<T>;
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  if (response.status === 204) {
    return {} as ApiResponse<T>;
  }

  const jsonData = await response.json();
  
  // Handle responses that are already in ApiResponse format (has data or message)
  if (jsonData.data !== undefined || (jsonData.message && !jsonData.user && !jsonData.id)) {
    return jsonData as ApiResponse<T>;
  }
  
  // Handle login response: {user: ..., message: ...}
  if (jsonData.user) {
    return { data: jsonData.user, message: jsonData.message } as ApiResponse<T>;
  }
  
  // Handle direct data responses (like signup returning user object directly)
  return { data: jsonData } as ApiResponse<T>;
}

// Auth API
export const authApi = {
  login: async (email: string, password: string) => {
    return fetchApi<{ user: any; message: string }>("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  signup: async (name: string, email: string, password: string) => {
    return fetchApi<{ id: number; name: string; email: string }>("/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  },

  logout: async () => {
    return fetchApi("/users/logout", {
      method: "POST",
    });
  },

  getMe: async () => {
    return fetchApi<any>("/users/me");
  },

  getMyCampaigns: async () => {
    return fetchApi<any[]>("/users/me/campaigns");
  },

  getMyInvestments: async () => {
    return fetchApi<any[]>("/users/me/investments");
  },
};

// Farms/Campaigns API
export const campaignsApi = {
  getAll: async () => {
    return fetchApi<any[]>("/farms");
  },

  getById: async (id: string | number) => {
    return fetchApi<any>(`/farms/${id}`);
  },

  create: async (farmData: { farm_name: string; description?: string }) => {
    return fetchApi<any>("/farms", {
      method: "POST",
      body: JSON.stringify(farmData),
    });
  },
};

// Products API
export const productsApi = {
  getAll: async () => {
    return fetchApi<any[]>("/products");
  },

  getById: async (id: string | number) => {
    return fetchApi<any>(`/products/${id}`);
  },
};
