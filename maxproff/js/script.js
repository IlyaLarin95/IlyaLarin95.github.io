const inputRange =  function() {
  const inputRange = document.getElementById('input-range');
  const rangeValueEl = document.querySelector('.range__value');

  inputRange.addEventListener('input', function() {
      const rangeValue = this.value;
      rangeValueEl.innerHTML = rangeValue;
  });
};
inputRange();


let phoneMaskForm = IMask(
  document.getElementById('phone-mask-form'), {
    mask: '+{7} (000) 000-00-00'
});

let phoneMaskModal = IMask(
  document.getElementById('phone-mask-modal'), {
    mask: '+{7} (000) 000-00-00'
});
