const btnUsers = document.getElementById('buttonUsers');
const container = document.getElementById('root');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const estado = document.getElementById('role');
const btnCohorts = document.getElementById('buttonCohorts');
const grupo = document.getElementById('cursos');
const cohortsJSON = '../data/cohorts.json';
const contUnits = document.getElementById('contUnidades');
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnProgress = document.getElementById('buttonProgress');
const contProgress = document.getElementById('contProgreso');
const users = [];
const usersName = [];
const progress = [];
const cohorts = [];

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  })

const renderUsers = data => {
  btnUsers.addEventListener('click', () => {
    const render = data.forEach(element => {
      // element.name === arreglo[i].name
      usersName.push(element.name);
      return container.innerHTML += (`<p>${element.name}</p>`) + (`<p>${element.role}<p>`)

    })
  })
}

console.log(usersName);

fetch(cohortsJSON)
  .then(response => response.json())
  .then(datos => {
    console.log(datos);
    renderCohorts(datos);
  })


function renderCohorts(datos) {
  btnCohorts.addEventListener('click', () => {
    const render = datos.forEach(element => {
      // console.log(element.coursesIndex)

      let i = 0;
      for (let i in element.coursesIndex) {
        console.log("Curso:  " + i);
        let valor = element.coursesIndex[i];
        console.log(valor);
        let nombreCursos = valor.title;
        console.log("Titulo: "+ nombreCursos);
        contUnits.innerHTML += (`<p>Cohort: ${element.id}</p> <p>Curso: ${i}</p> <p>Titulo: ${nombreCursos}</p>`);

      }
      //return grupo.innerHTML += (`<p>${element.id}</p> <p>${element.start}</p> <p>${element.coursesIndex}</p>`);
    })
  })
}

fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderProgress(data);
  }) 


/*
btnProgress.addEventListener('click', () => {
  fetch(progressJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderProgress(data);
    })
    function renderProgress(data) {
      let aidis = Object.entries(data);
      console.log(aidis);
      let intros = Object.entries(aidis.intro);
      console.log(intros);
*/

      /* let i = 0;
      for (let i in element.intro) {
        console.log("intro:  " + i);
        let valor = element.intro[i];
        console.log(valor);
        let j = 0;
        for (let j in valor.units) {
          console.log("Unit: " + i);
          let unit = valor[j];
          console.log(unit);

            //contUnits.innerHTML += (`<p>Cohort: ${element.id}</p> <p>Curso: ${i}</p> <p>Titulo: ${nombreCursos}</p>`);

          
        }
    //return grupo.innerHTML += (`<p>${element.id}</p> <p>${element.start}</p> <p>${element.coursesIndex}</p>`);
      }
    };
}
*/

/*
// User Names on users.json
const limaUsers = document.getElementById('lima-users'); // Boton que activa
const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // Donde tengo mi info
const containerUsers = document.getElementById('containerUsers'); // Donde pego mis datos
const studentsContainer = document.getElementById('students-container'); // Donde le doy estilo

btnProgress.addEventListener('click', () => {
  fetch(progressJSON)
    .then(response => response.json())
    .then(dataU => {
      console.log(dataU);
      renderProgress(dataU);
    });

  function renderProgress(dataU) {
    contProgress.style.display = 'block';
    dataU.forEach(element => {
      let usersBox = document.createElement('div');
      let users = document.createTextNode(`Usuario: ${element.name}`);
      let usersId = document.createTextNode(`ID: ${element.id}`);
      containerUsers.appendChild(usersBox);
      usersBox.appendChild(users);
      usersBox.appendChild(usersId);
      console.log(users, usersId);
    });
  }
}); */
