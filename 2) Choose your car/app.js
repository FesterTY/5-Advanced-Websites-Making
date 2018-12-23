/* ************************ GLOBAL VARIABLES/OBJECTS ****************************** */

const gridWrapper = document.querySelector('#grid-wrapper');
const wrapper = gridWrapper.parentNode;

const clearCarsButton = document.querySelector('#clear-car-button');

// Current cars in the loop
var drivingCars = [];

const countCarSection = document.querySelector('#car-count-section');

/* ************************ FUNCTIONS ****************************** */

// Remove all the previous list of cars
function removePreviousList() {
    countCarSection.querySelectorAll('.driving-car-list').forEach(function(carList) {
        countCarSection.removeChild(carList);
    });
}

/* ************************* EVENTS LISTENER ****************************** */


// If they click anywhere inside the gridWrapper
gridWrapper.addEventListener('click',function(e){

    //If they click the drive button
    if(e.target.classList.contains('choose-car')){

        var img = e.target.parentNode.children[0];
        newCar = document.createElement('img');

        newCar.src = img.src;
        newCar.alt = img.alt;
        newCar.classList.add('driving-car');

        wrapper.appendChild(newCar);

        countCarSection.style.opacity = 1;

        clearCarsButton.style.opacity = 1;
        clearCarsButton.style.visibility = "visible";

        //Remove the previous list
        removePreviousList();

        drivingCars = document.querySelectorAll('.driving-car');

        //Add the already empty list of cars, list of cars.
        drivingCars.forEach(function(car){

            var drivingCar = document.createElement('p');
            drivingCar.innerText = car.alt;

            drivingCar.classList.add('driving-car-list');
            countCarSection.appendChild(drivingCar);
            drivingCar.style.opacity = 0.5;
            setTimeout(()=>{
                drivingCar.style.opacity = 1;
            }, 200);

            console.log('Added ' + car.alt);
            console.log(drivingCars);
        });
    }

});

//If they click the "remove" button to clear out the cars
clearCarsButton.addEventListener('click',function(e){

    var drivingCars = document.querySelectorAll('.driving-car');

    drivingCars.forEach(function(car){
        wrapper.removeChild(car);
        console.log(car.alt + " has been removed!");
    });

    removePreviousList();

    countCarSection.style.opacity = 0;
    clearCarsButton.style.opacity = 0;
    //After the opacity animation is finished; turn off the visibility.
    setTimeout(function(){
        clearCarsButton.style.visibility = "hidden";
    }, 500);

});