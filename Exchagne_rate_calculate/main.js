const $inputCountry = document.querySelector('#input_country');
const $outputCountry = document.querySelector('#output_country');
const $inputCharge = document.querySelector('#input_charge');
const $outputCharge = document.querySelector('#output_charge');
const $charge = document.querySelector('#charge')
const $btn = document.querySelector('#btn');


function calculate(event){
  if(inputCountry === "한국" && outputCountry === "미국"){
    $charge.textContent = "1 대한민국 원 => 0.00085 미국 달러";
    $outputCharge.value = `${(parseInt(event.target.value) * 0.00085).toFixed(2)}달러`;
  }
  if(inputCountry === "한국" && outputCountry === "일본"){
    $charge.textContent = "1 대한민국 원 => 0.094 일본 엔";
    $outputCharge.value = `${(parseInt(event.target.value) * 0.094).toFixed(2)}달러`;
  }
  
  if(inputCountry === "미국" && outputCountry === "한국"){
    $charge.textContent = "1 미국 달러 => 1.173.42 대한민국 원";
    $outputCharge.value = `${(parseInt(event.target.value) * 1173.42).toFixed(2)}달러`;
  
  if(inputCountry === "미국" && outputCountry === "일본"){
    $charge.textContent = "1 달러 => 109.92 일본 엔";
    $outputCharge.value = `${(parseInt(event.target.value) * 100.92).toFixed(2)}달러`;
  }

  if(inputCountry === "일본" && outputCountry === "한국"){
    $charge.textContent = "1 일본 엔 => 10.67 대한민국 원";
    $outputCharge.value = `${(parseInt(event.target.value) * 10.67).toFixed(2)}달러`;
  }
  if(inputCountry === "일본" && outputCountry === "미국"){
    $charge.textContent = "1 일본 엔 => 0.0091 미국 달러";
    $outputCharge.value = `${(parseInt(event.target.value) * 0.0091).toFixed(2)}달러`;
  }
}
}
$inputCountry.addEventListener('change',(event)=>{
  inputCountry = event.target.value;
  return inputCountry;
})
$outputCountry.addEventListener('change',(event)=>{
  outputCountry = event.target.value;
  return outputCountry;
})

//입력 할때마다
$inputCharge.addEventListener('input',(event)=>{
  calculate(event);
});


$btn.addEventListener('click',(event)=>{
  const temp = $inputCountry.value;
  $inputCountry.value = $outputCountry.value;
  inputCountry = $inputCountry.value;

  $outputCountry.value = temp;
  outputCountry.value = $outputCountry.value;
  calculate(event);
  console.log(inputCountry);
  console.log(outputCountry)
})
