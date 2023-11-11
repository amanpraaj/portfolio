var cursor = document.querySelector('.cursor');
var cursorScale = document.querySelectorAll('.cursor-scale');
var cursorAnchor = document.querySelectorAll('a, .gg,button,input,textarea');
var mouseX = 0;
var mouseY = 0;

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

for (var i = 0; i < cursorScale.length; i++) {
    cursorScale[i].addEventListener("mousemove", function() {
        cursor.classList.add("glow");
        cursor.classList.remove("glow-small");
    });

    cursorScale[i].addEventListener("mouseleave", function() {
        cursor.classList.remove("glow");
    });
}

for (var j = 0; j < cursorAnchor.length; j++) {
    cursorAnchor[j].addEventListener("mousemove", function() {
        cursor.classList.add("glow-small");
        cursor.classList.remove("glow");
    });

    cursorAnchor[j].addEventListener("mouseleave", function() {
        cursor.classList.remove("glow-small");
    });
}
