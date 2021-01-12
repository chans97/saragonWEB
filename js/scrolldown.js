let re = document.querySelector("header");

document.addEventListener('scroll', function() {
    let currentScrollValue = document.body.scrollTop;

    if (currentScrollValue > 250) {
        re.classList.add("header_scroll")
    } else {
        re.classList.remove("header_scroll")
    }
});