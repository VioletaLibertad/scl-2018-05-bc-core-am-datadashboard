// DOM
window.onload = () => {
  // Cohorts List on cohorts.json
  const cohortsList = document.getElementById('cohorts-list'); // Boton que activa
  const cohortsJson = '../data/cohorts.json'; // Donde tengo mi info
  let cohortName = document.getElementById('cohortName'); // Donde pego mis datos: Name
  const cohortContainer = document.getElementById('cohort-container'); // Donde le doy estilo
  const cohortStyle = document.getElementById('cohortStyle');

  cohortsList.addEventListener('click', () => {
    fetch(cohortsJson)
      .then(response => response.json())
      .then(dataC => {
        console.log(dataC);
        renderCohorts(dataC);
      });

    function renderCohorts(dataC) {
      cohortStyle.style.display = 'block';
      dataC.forEach(element => {
        let cohortsBox = document.createElement('div');
        cohortsBox.classList.add('card-body');
        let cohortTitle = document.createElement('button');
        cohortTitle.classList.add('card-title');
        cohortName = document.createTextNode(element.id);
        cohortContainer.appendChild(cohortsBox);
        cohortsBox.appendChild(cohortTitle);
        cohortTitle.appendChild(cohortName);
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
        let users = document.createTextNode(`Usuario: ${element.name}`);
        let usersId = document.createTextNode(element.id);
        containerUsers.appendChild(usersBox);
        usersBox.appendChild(users);
        usersBox.appendChild(usersId);
        console.log(users, usersId);
      });
    }
  });


  /*Encontrar forma de que usersID quede guardado como un gran string, para luego hacerle split, y que quede como array. Estando como array, se puede comparar y hacer match con el array de progress.js. Despues, se podria iterar con las funciones del data.js y devolverlos despues de procesados al index con dom. right?

  // Courses on progress.Json
  const limaCourses = document.getElementById('lima-courses');
  const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
  const coursesList = document.getElementById('coursesList');

  limaCourses.addEventListener('click', () => {
    fetch(progressJson)
      .then(response => response.json())
      .then(dataP => {
        console.log(dataP);
        renderCourses(dataP);
      });
    
    function renderCourses(dataP) {
      let progress = Object.entries(dataP);
      for (let i = 0; i < progress.length; i++) {

      }
    }
  });
};


/*
dataP.forEach(element => {
  let i = 0;
  for (let i in element.coursesIndex) {
    console.log('Curso: ' + i);
    let value = element.coursesIndex[i];
    let coursesName = value.title;
    console.log('Titulo: ' + coursesName);
    coursesList.innerHTML += (`<p>Cohort: ${element.id}</p> <p>Curso: ${i}</p><p>Titulo: ${coursesName}`);
  }
}); */