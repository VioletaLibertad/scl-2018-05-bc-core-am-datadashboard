// DOM
// Cohorts List on cohorts.json
/*
const cohortContainer = document.getElementById('cohort-container'); // Donde le doy estilo
const cohortStyle = document.getElementById('cohortStyle');

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


// User Names on users.json
const containerUsers = document.getElementById('containerUsers'); // Donde pego mis datos
const studentsContainer = document.getElementById('students-container'); // Donde le doy estilo

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