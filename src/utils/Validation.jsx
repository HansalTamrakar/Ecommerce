export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    console.log("Correct Email");
    return true;
  }
  console.log("You have entered an invalid email address!");
  console.log("False");
  return false;
}

export function ValidateName(name) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  if (regName.test(name)) {
    console.log("Valid name given.");
  } else {
    console.log("InValid name given.");
  }
}

export function ValidatePassword(password) {
  var regName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;

  if (regName.test(password)) {
    console.log("valid Password given.");
  } else {
    console.log("InValid password given.");
  }
}
