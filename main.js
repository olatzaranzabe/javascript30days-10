'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //Check if they had the shift key down
    //and check that they are checking it
    let inBetween = false;
    console.log(e)
    console.log(this)
    console.log(this.checked)
    console.log(e.shiftKey)
    if (e.shiftKey && this.checked) {
        console.log('holi')
        // go ahead and do what we please
        //loop into every checkbox to catch the first that is checked
        checkboxes.forEach(checkbox => {
            //with the doble option we can do it from the bottom to the top and from the top to the bottom
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('starting to check them inbetween');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));