function checkLogin() {
  const user = document.getElementById('userid').value;
  const pass = document.getElementById('passkey').value;
  const error = document.getElementById('error');

  if (user === 'Unexpectedly us' && pass === '30062004') {
    window.location.href = 'page1.html'; // Replace with your first content page
  } else {
    error.textContent = 'Oops! That doesn’t seem right.';
  }
}
