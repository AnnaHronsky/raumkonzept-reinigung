// ==========================================
// RAUMKONZEPT REINIGUNG
// script.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Website erfolgreich geladen.");

    // -----------------------------
    // Sanftes Scrollen zu Bereichen
    // -----------------------------
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const ziel = document.querySelector(this.getAttribute("href"));

            if (ziel) {
                e.preventDefault();

                ziel.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });


    // -----------------------------------
    // Aktuelles Jahr im Footer einsetzen
    // -----------------------------------
    const jahr = document.getElementById("jahr");

    if (jahr) {
        jahr.textContent = new Date().getFullYear();
    }


    // -----------------------------------
    // Button-Animation beim Überfahren
    // -----------------------------------
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

    });

});
