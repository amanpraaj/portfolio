var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function() {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

window.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener("mousedown", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

cursorScale.forEach(link => {
    link.addEventListener("mousemove", function () {
        cursor.classList.add("glow");
        if(link.classList.contains("small")) {
            cursor.classList.remove("glow");
            cursor.classList.add("glow-small");
        }
    });
    link.addEventListener("mouseleave", function () {
        cursor.classList.remove("glow");
        cursor.classList.remove("glow-small");
    });
});