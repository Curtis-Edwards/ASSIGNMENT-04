/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ASSIGNMENT-04/sw.js", {
    scope: "/ASSIGNMENT-04/",
  })
}

/**
 * This function updates the pizza size slider value.
 */
 function updateSliderValue(valueFromPizzaSlider) {
  document.getElementById("slider-value-pizza").innerHTML = valueFromPizzaSlider
}

/**
 * This function updates the toppings slider value.
 */
 function updateSliderValue(valueFromToppingsSlider) {
  document.getElementById("slider-value-toppings").innerHTML = valueFromToppingsSlider
}
