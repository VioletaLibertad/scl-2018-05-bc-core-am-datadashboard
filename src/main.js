// DOM
window.onload = () => {
  // Cohorts List on cohorts.json
  const cohortsList = document.getElementById('cohorts-list'); // Boton que activa
  const cohortsJson = '../data/cohorts.json'; // Donde tengo mi info
  let cohortName = document.getElementById('cohortName'); // Donde pego mis datos
  let cohortInfo = document.getElementById('cohort-info'); // Donde pego mis datos
  const cohortContainer = document.getElementById('cohort-container'); // Donde le doy estilo

  cohortsList.addEventListener('click', () => {
    fetch(cohortsJson)
      .then(response => response.json())
      .then(dataC => {
        console.log(dataC);
        renderCohorts(dataC);
      });

    function renderCohorts(dataC) {
      dataC.forEach(element => {
        let cohortsBox = document.createElement('div');
        cohortInfo = document.createTextNode(element.id);
        containerUsers.appendChild(cohortsBox);
        cohortsBox.appendChild(cohorts);
      });
    }
  });


  // User Names on users.json
  const limaUsers = document.getElementById('lima-users'); // Boton que activa
  const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // Donde tengo mi info
  const containerUsers = document.getElementById('containerUsers'); // Donde pego mis datos
  const studentsContainer = document.getElementById('students-container'); // Donde le doy estilo

  limaUsers.addEventListener('click', () => {
    fetch(usersJson)
      .then(response => response.json())
      .then(dataU => {
        console.log(dataU);
        renderUsers(dataU);
      });

    function renderUsers(dataU) {
      studentsContainer.style.display = 'block';
      dataU.forEach(element => {
        let usersBox = document.createElement('div');
        let users = document.createTextNode(element.name);
        containerUsers.appendChild(usersBox);
        usersBox.appendChild(users);
      });
    }
  });



};