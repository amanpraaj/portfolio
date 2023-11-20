var cursor = document.querySelector('.cursor');
var cursorScale = document.querySelectorAll('.cursor-scale');
var cursorAnchor = document.querySelectorAll('a, .gg,input,textarea');
var btnn = document.querySelectorAll('button');
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
        cursor.classList.add("img-cursor");
        cursor.classList.remove("cursor-b");
    });

    cursorScale[i].addEventListener("mouseleave", function() {
        cursor.classList.remove("img-cursor");
    });
}

for (var j = 0; j < cursorAnchor.length; j++) {
    cursorAnchor[j].addEventListener("mousemove", function() {
        cursor.classList.add("cursor-b");
        cursor.classList.remove("img-cursor");
    });

    cursorAnchor[j].addEventListener("mouseleave", function() {
        cursor.classList.remove("cursor-b");
    });
}
for (var k = 0; k < btnn.length; k++) {
    btnn[k].addEventListener("mousemove", function() {
        cursor.classList.add("btn-cursor");
        cursor.classList.remove("img-cursor");
    });

    btnn[k].addEventListener("mouseleave", function() {
        cursor.classList.remove("btn-cursor");
    });
}

