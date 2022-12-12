const finishTrainButton = document.querySelector('.complete-train-button');
console.log(finishTrainButton)

const finishTrain = () => {
    window.location.href = 'trains.html';
}


finishTrainButton.onclick = finishTrain;