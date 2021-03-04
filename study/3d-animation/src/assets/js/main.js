const container = $(".container");
const sneaker = $(".sneaker");
const img = $(".sneaker__img img");
const title = $(".sneaker__title");
const description = $(".sneaker__des");
const sizes = $(".sneaker__sizes");
const btn = $(".sneaker__pur");
const btn_animation = $(".btn-animation");
const btn_dark_mode = $(".btn-dark-mode");
const input_animation = $("#cb2");
const input_dark_mode = $("#themeCb");

btn_animation.mousemove((e) => {
    e.stopImmediatePropagation();
});

btn_dark_mode.mousemove((e) => {
    e.stopImmediatePropagation();
});

input_animation.change((e) => {
    if (input_animation.is(":checked")) {
        mouseMoveContainer();
    } else {
        container.off("mousemove");
    }
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        input_dark_mode.attr("checked", "checked");
    }
}

input_dark_mode.change((e) => {
    if (input_dark_mode.is(":checked")) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
});

function mouseMoveContainer() {
    container.on("mousemove", (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 10;
        let y = (window.innerHeight / 2 - (e.pageY - 500)) / 10;
        sneaker.css({
            transform: `rotateX(${y}deg) rotateY(${x}deg)`,
            transition: "none",
        });
        title.css({
            transform: "translateZ(130px)",
        });
        img.css({
            transform: "translateZ(160px) rotate(30deg)",
        });
        description.css({
            transform: "translateZ(100px)",
        });
        sizes.css({
            transform: "translateZ(70px)",
        });
        btn.css({
            transform: "translateZ(40px)",
        });
    });

    container.on("mouseleave", (e) => {
        sneaker.css({
            transform: "rotateX(0) rotateY(0)",
            transition: "all 1s ease",
        });
        title.css({
            transform: "translateZ(0)",
        });
        img.css({
            transform: "translateZ(0) rotate(0)",
        });
        description.css({
            transform: "",
        });
        sizes.css({
            transform: "translateZ(0)",
        });
        btn.css({
            transform: "translateZ(0)",
        });
    });
}

$(window).scroll((e) => {
    let desPos = description.get(0).getBoundingClientRect().top;
    let winPos = window.innerHeight / 1.3;
    if (desPos < winPos) {
        description.addClass("active");
    } else {
        description.removeClass("active");
    }
});
