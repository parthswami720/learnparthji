const state = {
  profile: { name: "", bio: "", URL: "" },
  links: [],
};

function editProfile() {
  let name = document.querySelector(".name");
  let avatar = document.querySelector(".avatar");
  let nameInput = document.querySelector("#name-input");
  let imgInput = document.querySelector("#avatar-input");

  if (!nameInput || !imgInput) return;

  // Update UI
  name.innerHTML = nameInput.value;
  avatar.style.backgroundImage = `url('${imgInput.value}')`;

  // Update state
  state.profile.name = nameInput.value;
  state.profile.URL = imgInput.value;

  // ✅ Save to localStorage
  localStorage.setItem("profile", JSON.stringify(state.profile));
}

// ✅ Load saved profile when page opens
function loadProfile() {
  const saved = localStorage.getItem("profile");
  if (saved) {
    const data = JSON.parse(saved);

    let name = document.querySelector(".name");
    let avatar = document.querySelector(".avatar");

    name.innerHTML = data.name;
    avatar.style.backgroundImage = `url('${data.URL}')`;

    // form inputs bhi fill karna ho to:
    document.querySelector("#name-input").value = data.name;
    document.querySelector("#avatar-input").value = data.URL;

    state.profile = data; // restore in state
  }
}

document.querySelector("#add-link").addEventListener("click", editProfile);

// ✅ jab page reload ho to data restore karo
window.addEventListener("DOMContentLoaded", loadProfile);
