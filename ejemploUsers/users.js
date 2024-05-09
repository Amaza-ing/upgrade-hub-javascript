console.log("Users!");

const userList = document.querySelector(".user-list");

function addUserItem(user) {
  const li = document.createElement("li");

  li.innerHTML = `
  <div class="user-card">
    <img src="${user.picture.large}" alt="" class="user-img">
    <div>
      <p><span>${user.name.first} ${user.name.last}</span> - <span>${user.dob.age}</span></p>
      <p>${user.phone}</p>
    </div>
  </div>
  `;

  userList.appendChild(li);
}


async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    // console.log(user);
    addUserItem(user);
  } catch(error) {
    console.log(error);
  }
}

function getUsers() {
  for(let i = 0; i < 20; i++) {
    getUser();
  }
}

getUsers();
