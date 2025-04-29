const nameErrorBefore = document.getElementById('name-error-before');
const nameErrorAfter = document.getElementById('name-error-after');

const phoneErrorBefore = document.getElementById('phone-error-before');
const phoneErrorAfter = document.getElementById('phone-error-after');

const emailErrorBefore = document.getElementById('email-error-before');
const emailErrorAfter = document.getElementById('email-error-after');

const messageErrorBefore = document.getElementById('message-error-before');
const messageErrorAfter = document.getElementById('message-error-after');

const submitErrorBefore = document.getElementById('submit-error-before');
const submitErrorAfter = document.getElementById('submit-error-after');



function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.length == 0) {
      nameErrorBefore.style.display = "inline-block";
      nameErrorAfter.style.display = "none"; 
      return false;
  }

  if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)) {
      nameErrorBefore.style.display = "inline-block"; 
      nameErrorAfter.style.display = "none"; 
      return false;
  }
  nameErrorBefore.style.display = "none"; 
  nameErrorAfter.style.display = "inline-block";
  return true;
}

function validatePhone(){
  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0){
    nameErrorBefore.style.display = "inline-block";
    nameErrorAfter.style.display = "none";
    return false;
  }

  if(phone.length != 11){
    phoneErrorBefore.style.display = "inline-block";
    phoneErrorAfter.style.display = "none";
    return false;
  }

  if(!phone.match(/^[0-9]{11}$/)){
    phoneErrorBefore.style.display = "inline-block";
    phoneErrorAfter.style.display = "none";
    return false;
  }
  phoneErrorAfter.style.display = "inline-block";
  phoneErrorBefore.style.display = "none";
  return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailErrorBefore.style.display = "inline-block";
    emailErrorAfter.style.display = "none";
    return false;
  }

  if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    emailErrorBefore.style.display = "inline-block";
    emailErrorAfter.style.display = "none";
    return false;
  }
  emailErrorBefore.style.display = "none";
  emailErrorAfter.style.display = "inline-block";
  return true;
}

function validateMessage(){
  var message = document.getElementById('contact-message').value.trim();

  if(message.length == 0){
    messageErrorBefore.style.display = "inline-block";
    messageErrorAfter.style.display = "none";
    return false;
  }
  if(message.length < 10){
    messageErrorBefore.style.display = "inline-block";
    messageErrorAfter.style.display = "none";
    return false;
  }
  messageErrorBefore.style.display = "none";
  messageErrorAfter.style.display = "inline-block";
  return true;
}

function formValidation(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitErrorBefore.style.display = "inline-block";
    submitErrorAfter.style.display = "none";
    
    setTimeout(function() {
      submitErrorBefore.style.display = "none"; 
    }, 3000);

    return false;
  }
  submitErrorBefore.style.display = "none";
  submitErrorAfter.style.display = "inline-block";

  return true;
}