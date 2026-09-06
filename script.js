// ==========================================
// MAINTENANCE MODE
// ==========================================

const MAINTENANCE_MODE = false;


// ==========================================
// MAINTENANCE SCREEN
// ==========================================

if (MAINTENANCE_MODE) {

    document.body.innerHTML = `
        <div class="maintenance-screen">

            <div class="maintenance-content">

                <div class="maintenance-icon">
                    ⚙
                </div>

                <p class="maintenance-label">
                    TEMPORARILY UNAVAILABLE
                </p>

                <h1>
                    We'll be back soon.
                </h1>

                <p class="maintenance-text">
                    We're currently working on something new.
                    Check back soon.
                </p>

                <div class="maintenance-status">
                    <span></span>
                    Maintenance in progress
                </div>

            </div>

        </div>
    `;

    // Stop the rest of the JavaScript from running
} else {

    // ==========================================
    // NORMAL WEBSITE
    // ==========================================

    const startButton = document.getElementById("startButton");
    const learnButton = document.getElementById("learnButton");
    const ctaButton = document.getElementById("ctaButton");

    if (startButton) {
        startButton.addEventListener("click", function () {
            alert("We're just getting started 🚀");
        });
    }

    if (learnButton) {
        learnButton.addEventListener("click", function () {
            document.getElementById("features").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener("click", function () {
            alert("More coming soon.");
        });
    }
}