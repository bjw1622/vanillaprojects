const currencyEl_one = document.querySelector('#currency-one');
const currencyEl_two = document.querySelector('#currency-two');
const rateEl = document.querySelector('#rate');
const oneInput = document.querySelector('#amount-one');
const twoInput = document.querySelector('#amount-two');
const swap = document.querySelector('#swap');
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch("https://open.exchangerate-api.com/v6/latest")
      .then(res => res.json())
      .then(data => {
        const rate = data.rates[currency_two] / data.rates[currency_one];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        twoInput.value = (oneInput.value * (rate)).toFixed(2);
      });
}
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
oneInput.addEventListener('keydown',calculate);
twoInput.addEventListener('keydown',calculate);
swap.addEventListener('click',()=>{
  const currency_one = currencyEl_two.value;
  const currency_two = currencyEl_one.value;
  currencyEl_one.value = currency_one;
  currencyEl_two.value = currency_two;
    fetch("https://open.exchangerate-api.com/v6/latest")
      .then(res => res.json())
      .then(data => {
        const rate = data.rates[currency_two] / data.rates[currency_one];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        twoInput.value = (oneInput.value * (rate)).toFixed(2);
      });
});
calculate();