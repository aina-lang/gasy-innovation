import React from "react";

function Register() {
  switch (type) {
    case "email":
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setEmailValide(true);
      } else {
        setEmailValide(false);
      }
      break;
    case "password":
        if (value.length < 8) {
            console.log("Le mot de passe doit contenir au moins 8 caractères.");
          }
          if (!/[A-Z]/.test(value)) {
            console.log(
              "Le mot de passe doit contenir au moins une lettre majuscule."
            );
          }
          if (!/\d/.test(value)) {
            console.log("Le mot de passe doit contenir au moins un chiffre.");
          }
          if (/(?=.*[A-Z])(?=.*\d).{8,}/.test(value)) {
            configureProggressBar("secure");
          } else if (/(?=.*[A-Z])(?=.*\d).{6,}/.test(value)) {
            configureProggressBar("good");
          } else if (/(?=.*[A-Z])(?=.*\d).{4,}/.test(value)) {
            configureProggressBar("good");
          } else if (/\d+/.test(value) || /[A-Z]+/.test(value)) {
            configureProggressBar("good");
          } else {
            configureProggressBar("very_weak");
          }
  
      break;
    default:
      break;
  }
  return <div>Register</div>;
}

export default Register;
