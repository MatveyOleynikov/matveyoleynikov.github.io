const url = 'http://localhost:4000/api/exercises/';
let pos = 0;

const makeTimer = () => {
    const timer = document.querySelector(".timer-exercise");
    // console.log(timer);
    // console.log(timer.textContent)
    let time = parseInt(timer.textContent) * 1000;
    time = time -  1000;
    timer.textContent = time /1000;
    
    return time;
}


const fillExercise = (exercise) => {

    const timer = document.querySelector(".timer-exercise");
    timer.textContent = exercise.time;

    const name = document.querySelector(".name-exercise");
    name.textContent = exercise.name;

    const description = document.querySelector(".description-exercise");
    description.textContent = exercise.description;

    const img = document.querySelector(".image-exercise>img");
    img.src = exercise.url;

}

const findAllExerciseByTrainId = async () => {

    localStorage.train_id = 3;
    
   const train_id =  parseInt(localStorage.train_id);

   if (isNaN(train_id)){
     console.log('Error');
     window.location.href = 'train.html';
   }

   console.log(train_id)
    const response= await fetch(url + train_id);
    const exercises = await response.json();
    
    if (response.status != 200){
        window.location.href('error.html');
    }
    return exercises;

}

const switchExercise = (exercises) =>{
    
    const time = makeTimer();

    if (time <= 0){
        pos++;

        if (pos == exercises.length){
            window.location.href = 'trains.html';
        }
        
        fillExercise(exercises[pos]);
    }

}

const makeTrain = async () => {

    const exercises = await findAllExerciseByTrainId();
    fillExercise(exercises[0]);
    setInterval(() =>switchExercise(exercises), 1000);
}

makeTrain();


