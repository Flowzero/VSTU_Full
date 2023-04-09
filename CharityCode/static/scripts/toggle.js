function toggleNavbar() {
    var nv__links = document.querySelector(".nv__right-section");
    document.getElementById("toggle-btn").onclick = function() {
        nv__links.classList.toggle("active")
    }
}