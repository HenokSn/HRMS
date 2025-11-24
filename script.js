const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav');

navbarToggle.addEventListener (
    'click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    }
);

// Popup(Search Engine)
function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");
    
    function openPopup() {
        popupNode.classList.add("active");
    }
    
    function closePopup() {
        popupNode.classList.remove("active");
    }

    overlay.addEventListener("click", closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

let popup = createPopup("#search-engine");
document.querySelector("#search-link").addEventListener("click", popup);
document.querySelector("#explore-link").addEventListener("click", function(e) {
    e.preventDefault();
    popup();
});


