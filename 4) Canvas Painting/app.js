// ******************* Variables *****************************
const canvas = document.querySelector('#canvas');
const colorPicker = document.querySelector('#color-picker');


var colorSelected;
var mouseIsClicked = false;

if (colorSelected == null) {
    colorSelected = 'black';
}

// ******************* Color Picker *****************************
colorPicker.addEventListener('click',function(e){
    if (e.target.classList.contains('color-picker-block')) {
        colorSelected = e.target.style.backgroundColor;
    }
});

// ******************* Canvas Drawing *****************************

canvas.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('block-canvas')) {

        if (colorSelected != null && mouseIsClicked == true) {
            e.target.style.backgroundColor = colorSelected;

        }
    }
});

canvas.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('block-canvas')) {

        mouseIsClicked = true;

        if (colorSelected != null && mouseIsClicked == true) {
            e.target.style.backgroundColor = colorSelected;
        }
    }
});


canvas.addEventListener('mouseup', function(e) {
  if (e.target.classList.contains('block-canvas')) {
    mouseIsClicked = false;
  }
});

canvas.addEventListener('mouseleave', function (e) {
        mouseIsClicked = false;
});

canvas.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('block-canvas')) {
        event.preventDefault();
    }
});