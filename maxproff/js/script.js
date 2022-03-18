const inputRange =  function() {
  const inputRange = document.getElementById('input-range');
  const rangeValueEl = document.querySelector('.range__value');

  inputRange.addEventListener('input', function() {
      const rangeValue = this.value;
      rangeValueEl.innerHTML = rangeValue;
  });
};
inputRange();

const iMask = function() {
  let phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{7} (000) 000-00-00'
  });
};
iMask()
