const form = document.getElementById("alienForm");

function validatePlanetName() {
  const input = document.getElementById("planet-name");
  const error = document.getElementById("planet-error");
  const success = document.getElementById("planet-success");
  const value = input.value;

  const hasVowel = /[aeiouAEIOU]/.test(value);
  const hasDigit = /\d/.test(value);

  if (value.length === 0) {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  if (!hasVowel || !hasDigit) {
    error.textContent =
      "Planet name must contain at least one vowel and one digit";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateAntennaCount() {
  const input = document.getElementById("antenna-count");
  const error = document.getElementById("antenna-error");
  const success = document.getElementById("antenna-success");
  const value = parseInt(input.value);

  if (input.value === "") {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  if (isNaN(value) || value % 2 !== 0) {
    error.textContent = "Antenna count must be an even number";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateAlienID() {
  const input = document.getElementById("alien-id");
  const error = document.getElementById("id-error");
  const success = document.getElementById("id-success");
  const value = input.value;

  const pattern = /^[A-Z]{3}-[A-Z]{2}_\d{4}@[A-Z]{3}$/;

  if (value.length === 0) {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  if (!pattern.test(value)) {
    error.textContent = "Invalid format. Example: ZOR-XY_9999@UFO";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateFavoritePhrase() {
  const input = document.getElementById("favorite-phrase");
  const error = document.getElementById("phrase-error");
  const success = document.getElementById("phrase-success");
  const value = input.value;

  if (value.length === 0) {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  const hasEmoji =
    /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(
      value
    );
  const hasPunctuation = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(value);

  if (!hasEmoji && !hasPunctuation) {
    error.textContent = "Must contain at least one emoji or punctuation mark";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateLandingDate() {
  const input = document.getElementById("landing-date");
  const error = document.getElementById("date-error");
  const success = document.getElementById("date-success");
  const value = input.value;

  if (value === "") {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  const selectedDate = new Date(value);
  const now = new Date();

  if (selectedDate < now) {
    error.textContent = "Landing date cannot be in the past";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateSpecies() {
  const input = document.getElementById("species");
  const error = document.getElementById("species-error");
  const success = document.getElementById("species-success");
  const value = input.value;

  if (value.length === 0) {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  const pattern = /^[A-Z][a-zA-Z]{4,19}$/;

  if (!pattern.test(value)) {
    error.textContent = "Must start with capital letter and be 5-20 characters";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateGalaxy() {
  const input = document.getElementById("galaxy");
  const error = document.getElementById("galaxy-error");
  const success = document.getElementById("galaxy-success");

  if (input.value === "") {
    error.textContent = "Please select a galaxy";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateShipSerial() {
  const input = document.getElementById("ship-serial");
  const error = document.getElementById("ship-error");
  const success = document.getElementById("ship-success");
  const value = input.value;

  if (value.length === 0) {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  const pattern = /^SS-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

  if (!pattern.test(value)) {
    error.textContent = "Invalid format. Example: SS-A1B2-C3D4";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateTelepathy() {
  const input = document.getElementById("telepathy-level");
  const error = document.getElementById("telepathy-error");
  const success = document.getElementById("telepathy-success");
  const value = parseInt(input.value);

  if (input.value === "") {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  if (isNaN(value) || value < 1 || value > 100 || value % 5 !== 0) {
    error.textContent = "Must be between 1-100 and a multiple of 5";
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

function validateVisitReason() {
  const input = document.getElementById("visit-reason");
  const error = document.getElementById("reason-error");
  const success = document.getElementById("reason-success");
  const value = input.value;

  if (value.length === 0) {
    error.textContent = "";
    error.classList.remove("show");
    success.classList.remove("show");
    return false;
  }

  if (value.length < 20 || value.length > 500) {
    error.textContent = `Current: ${value.length} characters. Must be 20-500 characters`;
    error.classList.add("show");
    success.classList.remove("show");
    return false;
  }

  error.classList.remove("show");
  success.classList.add("show");
  return true;
}

document
  .getElementById("planet-name")
  .addEventListener("input", validatePlanetName);
document
  .getElementById("antenna-count")
  .addEventListener("input", validateAntennaCount);
document.getElementById("alien-id").addEventListener("input", validateAlienID);
document
  .getElementById("favorite-phrase")
  .addEventListener("input", validateFavoritePhrase);
document
  .getElementById("landing-date")
  .addEventListener("change", validateLandingDate);
document.getElementById("species").addEventListener("input", validateSpecies);
document.getElementById("galaxy").addEventListener("change", validateGalaxy);
document
  .getElementById("ship-serial")
  .addEventListener("input", validateShipSerial);
document
  .getElementById("telepathy-level")
  .addEventListener("input", validateTelepathy);
document
  .getElementById("visit-reason")
  .addEventListener("input", validateVisitReason);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const validations = [
    validatePlanetName(),
    validateAntennaCount(),
    validateAlienID(),
    validateFavoritePhrase(),
    validateLandingDate(),
    validateSpecies(),
    validateGalaxy(),
    validateShipSerial(),
    validateTelepathy(),
    validateVisitReason(),
  ];

  if (validations.every((v) => v === true)) {
    document.getElementById("success-msg").classList.add("show");
    form.reset();

    document
      .querySelectorAll(".success")
      .forEach((s) => s.classList.remove("show"));


    document
      .getElementById("success-msg")
      .scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      document.getElementById("success-msg").classList.remove("show");
    }, 5000);
  } else {
    
    validatePlanetName();
    validateAntennaCount();
    validateAlienID();
    validateFavoritePhrase();
    validateLandingDate();
    validateSpecies();
    validateGalaxy();
    validateShipSerial();
    validateTelepathy();
    validateVisitReason();

    const firstError = document.querySelector(".error.show");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});
