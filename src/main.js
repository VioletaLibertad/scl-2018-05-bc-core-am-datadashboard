// DOM
window.onload = () => {
  const limaBtn = document.getElementById('lima-users'); // Btn que activa todo
  const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // Datos de usuarios
  const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; // Datos de progreso de usuarios
  const cohortsJson = '../data/cohorts.json'; // Datos de cohorts
  let users = [];
  let progress = [];
  let courses = [];

  limaBtn.addEventListener('click', () => {
    getGlobalVariables();
  });

  function getGlobalVariables() {
    Promise.all([
      fetch(usersJson),
      fetch(progressJson),
      fetch(cohortsJson)
    ]).then((responses) => {
      return Promise.all(
        responses.map(
          (response) => {
            return response.json();
          }
        )
      );
    }).then((response) => {
      //console.log(response);
      users.push(response[0]);
      progress.push(response[1]);
      response[2].forEach(data => {
        courses.push(data.coursesIndex);
        //console.log(courses);
      });
      return users, progress, courses;
    }).catch((error) => {
      console.log('Hay un error: ' + error);
    });
  }

}

