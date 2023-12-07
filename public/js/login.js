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

const registerFormHandler = async (event) => {
  event.preventDefault();
  $('#registerMessage').remove();
  const firstName = $('#registerFirstName').val().trim();
  const lastName = $('#registerLastName').val().trim();
  const email = $('#registerEmail').val().trim();
  const password = $('#registerPassword').val().trim();
  const confirmPassword = $('#registerConfirmPassword').val().trim();
}
if (password !== confirmPassword) {
  $('#registrationForm').prepend($('<div>', {
    class: "alert alert-danger",
    id: "registrationMessage",
    html: "<span>The passwords do not match. Please make sure password is typed correclty.</span>"
  }));
  return;
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', registerFormHandler);

