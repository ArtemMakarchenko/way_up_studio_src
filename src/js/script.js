/*===================================== Проверка поддерживает ли браузер WEBP =======================================*/
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

document.querySelector(".menu-icon-wrapper").onclick = function () {
    document.querySelector(".menu-icon").classList.toggle("menu-icon-active"),
        document.querySelector(".header__nav").classList.toggle("header-nav-active")
    document.querySelector("body").classList.toggle("lock")
};