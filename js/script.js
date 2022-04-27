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
 function updateSliderValue(valueFromSlider1) {
  document.getElementById("slider-value-pizza").innerHTML = valueFromSlider1
}

/**
 * This function updates the toppings slider value.
 */
 function updateSliderValue(valueFromSlider2) {
  document.getElementById("slider-value-toppings").innerHTML = valueFromSlider2
}
