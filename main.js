window.onscroll = () => {
    if(window.scrollY > 20) {
        document.getElementById("back").classList.add("color");
    } else {
        document.getElementById("back").classList.remove("color");
    }
}