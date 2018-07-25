window.computeUsersStats = (users, progress, courses) => {
  /* Recorriendo los usuarios y pareando con su progress. Añadiendo además valores en cero a los objetos vacíos para evitar Undefined*/ 
  for (let i = 0; i < users.length; i++) {
    let userId = users[i].id;
    let userProgress = progress[userId];
    if (JSON.stringify(userProgress) === '{}') {
      users[i].stats = {
        percent: 0,
        exercises: { percent: 0, },
        reads: { percent: 0, },
        quizzes: {
          percent: 0,
          scoreAvg: 0,
        }
      };
    } else {
      /* Iniciando contador y asignando valores en cero a las variables que necesitamos para construir Stats */
      let percentGral = 0;
      let lectures = 0;
      let lecturesCompleted = 0;
      let lecturesPercent = 0;
      let quizzes = 0;
      let quizzesCompleted = 0;
      let quizzesPercent = 0;
      let exercises = 0;
      let exercisesCompleted = 0;
      let exercisesPercent = 0;
      let scoreSum = 0;
      let scoreAvg = 0;

      /* Recorremos userProgress, que es la lista de cada usuario junto a su info de progreso. Acá obtendremos la información necesaria para aumentar el contador de las variables */
      for (let i in userProgress) {
        let element = userProgress[i];
        if (courses.indexOf(i) < 0) {
          continue;
        }
        // Se comienza iteración para obtener los valores de todas las variables iniciadas en cero
        // Comenzamos por obtener percentGral y asignar valor cero a las partes incompletas
        percentGral += element.percent / Object.keys(userProgress).length;
        for (let unit of Object.values(element.units)) { 
          for (let part of Object.values(unit.parts)) {
            if (part.length === 0) {
              quizzes = 0;
              exercises = 0;
              lectures = 0;
              quizzesPercent = 0;
              exercisesPercent = 0;
              lecturesPercent = 0;
            }
            // Obtener porcentaje de lecturas, para después obtener el total completado en porcentaje
            if (part.type === 'read') {
              lectures++;
            }
            if (part.type === 'read' && part.completed === 1) {
              lecturesCompleted++;
            }
            lecturesPercent = Math.round((lecturesCompleted * 100) / lectures);
            // Obtener porcentaje de quizzes, para después obtener el total completado en porcentaje        
            if (part.type === 'quiz') { 
              quizzes++;
            }
            if (part.type === 'quiz' && part.completed === 1) {
              quizzesCompleted++;
              // saca la suma general para luego sacar el promedio
              scoreSum += part.score;
            }
            quizzesPercent = Math.round((quizzesCompleted * 100 * 10 / quizzes)) / 10;
            // Obtener porcentaje de prácticas, para después obtener el total completado en porcentaje          
            if (part.type === 'practice') {
              exercises++;
            }
            if (part.type === 'practice' && part.completed === 1) {
              exercisesCompleted++;
            }
            exercisesPercent = Math.round((exercisesCompleted * 100 * 10) / (exercises || 1)) / 10;
          }
        }
      }
      // Sacando promedio y agregando el objeto Stats a cada usuario
      scoreAvg = scoreSum / quizzes;

      users[i].stats = {
        percent: percentGral,
        reads: {
          percent: lecturesPercent,
          total: lectures,
          completed: lecturesCompleted
        },
        exercises: {
          percent: exercisesPercent,
          total: exercises,
          completed: exercisesCompleted
        },
        quizzes: {
          percent: quizzesPercent,
          total: quizzes,
          completed: quizzesCompleted,
          scoreAvg: scoreAvg,
          scoreSum: scoreSum
        }
      };
    }
  }
  // Deberíamos retornar los resultados!
  return console.log(users);
};

window.sortUsers = (users, orderBy, orderDirection) => {

};


window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {


};
