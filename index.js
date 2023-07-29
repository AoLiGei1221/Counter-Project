// the variable we use to count the number
// set intial value is 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// loop over
btns.forEach(function (btn) {
  //set listener
  btn.addEventListener("click", function(e) {
    // get the class of items I click
    const styles = e.currentTarget.classList;
    // by using if statements to decide increase of decrease
    if(styles.contains('decrease')) {
      count = count - 1;
    }
    else if(styles.contains('increase')) {
      count = count + 1;
    }
    else if(styles.contains('reset')) {
      count = 0;
    }

    if(count > 0) {
      value.style.color = "#008000";
    }
    if(count < 0) {
      value.style.color = "#ff1100";
    }
    if(count === 0) {
      value.style.color = "#222"
    }
    value .textContent = count;
  });
});
