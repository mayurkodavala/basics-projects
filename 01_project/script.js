const buttons = document.querySelectorAll('.button'); // select ALL .button elements
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);

        // set background color using the clicked element’s id
        body.style.backgroundColor = e.target.id;
    });
});