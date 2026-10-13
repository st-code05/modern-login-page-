let user = { 
  username: "student", 
  password: "js2026" 
};

let loginForm = document.querySelector("#loginForm"); 
let username = document.querySelector("#username"); 
let password = document.querySelector("#password"); 
let message = document.querySelector("#message"); 
let welcome = document.querySelector("#welcome"); 
let welcomeText = document.querySelector("#welcomeText"); 
let logout = document.querySelector("#logout");

function checkValue(value) { 
  return value !== undefined && value !== null && value.trim() !== ""; 
}

function login(name, pass) { 
  if (!checkValue(name) || !checkValue(pass)) { 
    return { 
      success: false, 
      text: "Bitte fülle alle Felder aus." 
    }; 
  }

  if (name !== user.username || pass !== user.password) {
    return {
      success: false,
      text: "Benutzername oder Passwort ist falsch."
    };
  }

  return {
    success: true,
    text: "Du hast dich erfolgreich angemeldet."
  };
}

loginForm.addEventListener("submit", function(event) { 
  event.preventDefault();
  let result = login(username.value, password.value);

  message.textContent = result.text;

  if (result.success) {
    loginForm.hidden = true;
    welcome.hidden = false;
    welcomeText.textContent = "Willkommen, " + username.value + "!";
  }
});

logout.addEventListener("click", function() { 
  loginForm.reset(); 
  loginForm.hidden = false; 
  welcome.hidden = true; 
  message.textContent = ""; 
});