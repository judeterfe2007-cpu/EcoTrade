function openRegister() {
  document.getElementById("registerModal").style.display = "flex";
}

function closeRegister() {
  document.getElementById("registerModal").style.display = "none";
}

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function registerUser() {

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const phone = document.getElementById("registerPhone").value;
  const password = document.getElementById("registerPassword").value;
  const location = document.getElementById("registerLocation").value;

  if (!name || !email || !phone || !password || !location) {
    alert("Please complete all fields.");
    return;
  }

  // Temporary demo account.
  // Firebase authentication will replace this later.

  const user = {
    name: name,
    email: email,
    phone: phone,
    location: location,
    trialStart: new Date().toISOString()
  };

  localStorage.setItem("w2vUser", JSON.stringify(user));

  closeRegister();

  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("trialMessage").textContent =
    "Welcome " + name + "! Your 3-day free trial has started.";

  document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
  });

  alert(
    "Account created successfully! Your 3-day free trial has started."
  );
}

function loginUser() {

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  const savedUser = localStorage.getItem("w2vUser");

  if (!savedUser) {
    alert("No demo account found. Please register first.");
    return;
  }

  const user = JSON.parse(savedUser);

  if (email !== user.email) {
    alert("Email not found.");
    return;
  }

  closeLogin();

  document.getElementById("dashboard").classList.remove("hidden");

  alert("Welcome back, " + user.name + "!");
}

function openMarketplace() {
  alert(
    "Marketplace is coming next! We are building it step by step."
  );
}
