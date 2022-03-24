const inputs = document.querySelectorAll('input');
const inputSquare = document.querySelector('#input-range');
const radioType = document.querySelectorAll('[name ="radio-type"]');
const radioBuilding = document.querySelectorAll('[name ="radio-building"]');
const radioRooms = document.querySelectorAll('[name ="radio-rooms"]');


const basePrice = 2450;
const totalPriceEl = document.querySelector('#price-value');

inputSquare.addEventListener('input', function () {
    inputSquare.value
});

function calculate () {
    
    let totalPrice = basePrice * parseInt(inputSquare.value);

    radioType.forEach(item => {
        if (item.checked) {
            totalPrice *= parseFloat(item.value)
        };
    });
    radioBuilding.forEach(item => {
        if (item.checked) {
            totalPrice *= parseFloat(item.value)
        };
    });
    radioRooms.forEach(item => {
        if (item.checked) {
            totalPrice *= parseFloat(item.value)
        };
    });



    const formatter = new Intl.NumberFormat('ru');    
    totalPriceEl.innerText = formatter.format(Math.round(totalPrice));

};

calculate();

for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate();
    });
};