import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fund My Farm
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with farms and support sustainable agriculture through direct investments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button size="lg" variant="primary">
                Browse Campaigns
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Start a Campaign
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="secondary">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Browse Farms</h3>
            <p className="text-gray-600">
              Discover local farms and agricultural projects looking for investment and support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Invest Directly</h3>
            <p className="text-gray-600">
              Support farms directly and track your investments through our transparent platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainable Impact</h3>
            <p className="text-gray-600">
              Make a real difference in local agriculture and sustainable food production.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our community of investors supporting sustainable agriculture
        </p>
        <Link href="/signup">
          <Button size="lg" variant="primary">
            Sign Up Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
