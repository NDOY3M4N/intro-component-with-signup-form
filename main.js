const form = document.querySelector('.form__container');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Let's first check if there is no empty fields
  for (let i = 0; i <= 3; i++) {
    const input = e.target[i];
    const errorIcon = e.target[i].nextElementSibling;
    const errorText = e.target[i].nextElementSibling.nextElementSibling;
    
    if(e.target[i].value === "") {
      errorText.style.display = 'block';
      errorIcon.style.display = 'block';
      input.style.borderColor = 'hsl(0, 100%, 74%)';

      setTimeout(() => {
        errorText.style.display = 'none';
        errorIcon.style.display = 'none';
        input.style.borderColor = 'hsl(246, 25%, 77%)';
      }, 3000);
    }
  }

  // Let's do the email validation here
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const inputEmail = form.mail_user;

  const errorIcon = form.mail_user.nextElementSibling;
  const errorText = form.mail_user.nextElementSibling.nextElementSibling;

  if(!inputEmail.value.match(mailformat)) {
    errorText.style.display = 'block';
    errorIcon.style.display = 'block';
    inputEmail.style.borderColor = 'hsl(0, 100%, 74%)';

    setTimeout(() => {
      errorText.style.display = 'none';
      errorIcon.style.display = 'none';
      inputEmail.style.borderColor = 'hsl(246, 25%, 77%)';
    }, 3000);
  }
});
