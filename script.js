const accountType = document.getElementById("accountType");
const salariedFields = document.getElementById("salariedFields");

accountType.addEventListener("change", function () {
    if (this.value === "Salaried") {
        salariedFields.style.display = "block";
    } else {
        salariedFields.style.display = "none";
    }
});
