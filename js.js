const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim() {
    let tl = gsap.timeline();

    tl.from("#nav", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: Expo.easeInOut,

    })

    tl.to(".hidenboxelem", {
        y: 0,
        // opacity:0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2,
    })

    tl.from("#herofooter", {
        y: 0,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
        scale: 1
    })
}


firstPageAnim()

var timeout

function circleChaptaKaro() {
    // define default scale value

    var xscale = 1
    var yscale = 1

    // pichali value
    var xprev = 0
    var yprev = 0

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout)

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)
        xprev = dets.clientX
        yprev = dets.clientY

        srclmouse(xscale, yscale)

        timeout = setTimeout(function () {
            document.querySelector("#srcl").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100)

    })

}
circleChaptaKaro()

function srclmouse(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#srcl").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
srclmouse()




document.querySelectorAll("#second .elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            display: "inline-block",
        });
    });
    elem.addEventListener("mousemove", function (dets) {
        // var diffY = dets.clientY - elem.getBoundingClientRect(50).top;
        // var diffX = dets.clientX - elem.getBoundingClientRect(50).top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            left:dets.clientX-180,
            rotate: gsap.utils.clamp(-20, 20, diffrot),
        });
    });
});


