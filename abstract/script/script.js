document.getElementById("button-menu").onclick = function() {
    let hamburger = document.getElementById("hamburger-menu");
    let bar = document.getElementsByClassName("bar")[0];
    let linksMenu = document.getElementsByClassName("hamburger-links-menu")[0];

    if(hamburger.classList.contains("selected")) {
        hamburger.classList.remove("selected");
        bar.classList.remove("selected");
        linksMenu.classList.remove("selected");
    } else {
        hamburger.classList.add("selected");
        bar.classList.add("selected");
        linksMenu.classList.add("selected");
    }
}