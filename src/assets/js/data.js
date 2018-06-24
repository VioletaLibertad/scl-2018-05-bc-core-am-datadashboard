window.onload = () => {
  const limaBtn = document.getElementById('lima-users'); // Btn que activa todo
  const usersJson = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'; // Datos de usuarios
  const progressJson = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'; // Datos de progreso de usuarios
  const cohortsJson = '../data/cohorts.json'; // Datos de cohorts
  const limaCourses = document.getElementById('lima-courses');
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
      console.log(response);
      users.push(response[0]);
      progress.push(response[1]);
      response[2].forEach(data => {
        courses.push(data.coursesIndex);
        // console.log(courses);
      });
      return users, progress, courses;
    }).catch((error) => {
      console.log('Hay un error: ' + error);
    });
  }

<<<<<<< HEAD:src/assets/js/data.js
  limaCourses.addEventListener('click', () => {
    computeUsersStats();
  });

  window.computeUsersStats = (users, progress, courses) => {
    for (let i = 0; i < users.length; i++) {
      let userID = users[i].id;
      let progressUsers = progress[userID];
      console.log(progressUsers);
    }
    /*
    class Stats {
      constructor(percent, exercises, reads, quizzes) {
        this.percent = percent, 
        this.exercises = exercises, 
        this.read = reads, 
        this.quizzes = quizzes, 
      }
    }
    */
  };
};

window.sortUsers = (users, orderBy, orderDirection) => {

};


window.filterUsers = (users, search) => {

};
=======
}

>>>>>>> 9bf6bb98ae88d68b197ffde30cab6028c572b740:src/main.js
