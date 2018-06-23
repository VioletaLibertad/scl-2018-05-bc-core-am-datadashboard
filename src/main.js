// DOM
window.onload = () => {
  // Cohorts List on cohorts.json
  const cohortsList = document.getElementById('cohorts-list'); // Boton que activa
  const cohortsJson = '../data/cohorts.json'; // Donde tengo mi info
  let cohortName = document.getElementById('cohort-name'); // Donde pego mis datos
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
        cohortContainer.style.display = 'block';
        let cohortsBox = document.createElement('div');
        let cohorts = document.createTextNode(element.id);
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
  
  // const btnUsers = document.getElementById('lima-users');
  // const container = document.getElementById('users-list');
  // const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  /* const btnCohorts = document.getElementById('cohorts-list');
  const grupo = document.getElementById('cohort-name');
  const cohortsJSON = '../data/cohorts.json';*/
/*
  fetch(usersJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderUsers(data);
    });

  const renderUsers = data => {
    btnUsers.addEventListener('click', () => {
      const render = data.forEach(element => {
        return container.innerHTML += (`<p>${element.name}</p>`) + (`<p>${element.role}</p>`) ;
      });
    });
  }; */

  /* fetch(cohortsJSON)
    .then(response => response.json())
    .then(datos => {
      console.log(datos);
      renderCohorts(datos);
    });

  const renderCohorts = datos => {
    btnCohorts.addEventListener('click', () => {
      const render = datos.forEach(element => {
        return grupo.innerHTML += 'Cohort:' + (`<p>${element.id}</p>`) + 'Fecha de inicio:' + (`<p>${element.start}</p>`) + 'Users:' + (`<p>${element.usersCount}</p>`);
      });
    });
  }; */
};
