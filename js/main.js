// input selectors
const input = document.querySelectorAll('input')
// add event listeners to all input selectors
Array.from(input).forEach(e => e.addEventListener('change', calBatch) )

// run calBatch on page load
window.onload = calBatch

// Batch calculation function
function calBatch() {

// variables
const 
  // inputs
  inRecipeFlourMass = Number( document.getElementById('inputRecipeFlourMass').value ),
  inQtyInRecipe =     Number( document.getElementById('inputQtyInRecipe').value ),
  inTotalQty =        Number( document.getElementById('inputTotalQty').value ),
  
  inWater =           Number( document.getElementById('inputWater').value /100 ),
  inSalt =            Number( document.getElementById('inputSalt').value /100 ),
  inYeast =           Number( document.getElementById('inputYeast').value /100 ),
  inSugar =           Number( document.getElementById('inputSugar').value /100 ),
  inOliveOil =        Number( document.getElementById('inputOliveOil').value /100 ),

  // outputs & calculations
  flourEach =       Number( (inRecipeFlourMass / inQtyInRecipe) .toFixed(2) ),
  flourBatch =      Number( (flourEach * inTotalQty)            .toFixed(2) ),
  waterEach =       Number( (inWater * flourEach)               .toFixed(2) ),
  waterBatch =      Number( (waterEach * inTotalQty)            .toFixed(2) ),
  saltEach =        Number( (inSalt * flourEach)                .toFixed(2) ),
  saltBatch =       Number( (saltEach * inTotalQty)             .toFixed(2) ),
  yeastEach =       Number( (inYeast * flourEach )              .toFixed(2) ),
  yeastBatch =      Number( (yeastEach * inTotalQty)            .toFixed(2) ),
  sugarEach =       Number( (inSugar * flourEach)               .toFixed(2) ),
  sugarBatch =      Number( (sugarEach * inTotalQty)            .toFixed(2) ),
  oliveOilEach =    Number( (inOliveOil * flourEach)            .toFixed(2) ),
  oliveOilBatch =   Number( (oliveOilEach * inTotalQty)         .toFixed(2) ),

  totalMassEach =   (flourEach + waterEach + saltEach + yeastEach + sugarEach + oliveOilEach)       .toFixed(2),
  totalMassBatch =  (flourBatch + waterBatch + saltBatch + yeastBatch + sugarBatch + oliveOilBatch) .toFixed(2)

  // output selectors
  document.getElementById('flourEach').innerText =     `${flourEach} g` 
  document.getElementById('flourBatch').innerText =    `${flourBatch} g`
  document.getElementById('flourEach').innerText =     `${flourEach} g`
  document.getElementById('flourBatch').innerText =    `${flourBatch} g`
  document.getElementById('waterEach').innerText =     `${waterEach} g`
  document.getElementById('waterBatch').innerText =    `${waterBatch} g`
  document.getElementById('saltEach').innerText =      `${saltEach} g`
  document.getElementById('saltBatch').innerText =     `${saltBatch} g`
  document.getElementById('yeastEach').innerText =     `${yeastEach} g`
  document.getElementById('yeastBatch').innerText =    `${yeastBatch} g`
  document.getElementById('sugarEach').innerText =     `${sugarEach} g`
  document.getElementById('sugarBatch').innerText =    `${sugarBatch} g`
  document.getElementById('oliveOilEach').innerText =  `${oliveOilEach} g`
  document.getElementById('oliveOilBatch').innerText = `${oliveOilBatch} g`
  document.getElementById('totalMassEach').innerText = `${totalMassEach} g`
  document.getElementById('totalMassBatch').innerText = `${totalMassBatch} g`
}