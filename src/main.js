// DOM
window.onload = () => {
  // User Names on users.json
  const limaUsers = document.getElementById('lima-users');
  const containerUsers = document.getElementById('containerUsers');
  const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

  limaUsers.addEventListener('click', () => {
    fetch(usersJson)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        renderUsers(data);
      });
    function renderUsers(data) {
      data.forEach(element => {
        let usersBox = document.createElement('div');
        let users = document.createTextNode(element.name);
        containerUsers.appendChild(usersBox);
        usersBox.appendChild(users);
      });
    }
  });



};