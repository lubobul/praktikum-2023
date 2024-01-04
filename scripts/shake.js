function shakeElementsBySelector(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        var shakeAnimation = element.animate([
            { transform: 'translateX(20px)' },
            { transform: 'translateX(-20px)' },
            { transform: 'translateY(20px)' },
            { transform: 'translateY(-20px)' },
        ], {
            duration: 100,
            iterations: Infinity
        });
        setTimeout(() => shakeAnimation.cancel(), 1000);
    });
}

function shakeBody() {
    console.log("Shake that body!");
    shakeElementsBySelector("body");
}

function fallApart() {
    console.log("Oh Nooo!!!");

    var elements = document.querySelectorAll("div");

    elements.forEach(function (element) {
        // Generate a random angle
        var angle = Math.random() * 2 * Math.PI;

        // Calculate the new position
        var x = Math.cos(angle) * 100;
        var y = Math.sin(angle) * 100;

        // Apply the transform to the element
        element.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

        // Add a transition to animate the transform
        element.style.transition = 'transform 2s';
    });

    let timeOut = setTimeout(() => {
        fallApart();
        clearTimeout(timeOut);
    }, 2000)
}