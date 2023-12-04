const loginFormHandler = async (Event) => {
    Event.preventDefault();
    $('#loginMessage').remove();
    const email = $('#loginEmail').val().trim();
    const password = $('#loginPassword').val().trim(); 
}

if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        const data = await response.json();
  
        $('#loginForm').prepend($('<div>', {
          class: "alert alert-danger",
          id: "loginMessage",
          html: `<span>${data.message}</span>`
        }));
  
      }
    }
  ;
  $('#loginForm').on('submit', loginFormHandler);