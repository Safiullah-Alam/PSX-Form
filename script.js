const accountType = document.getElementById("accountType");
const salariedFields = document.getElementById("salariedFields");

accountType.addEventListener("change", function () {
    if (this.value === "Salaried") {
        salariedFields.style.display = "block";
    } else {
        salariedFields.style.display = "none";
    }
});

const ibanOption = document.getElementById("ibanOption");
const ibanFileField = document.getElementById("ibanFileField");
const ibanManualField = document.getElementById("ibanManualField");

ibanOption.addEventListener("change", function () {
    ibanFileField.style.display = "none";
    ibanManualField.style.display = "none";

    if (this.value === "file") {
        ibanFileField.style.display = "block";
    } else if (this.value === "manual") {
        ibanManualField.style.display = "block";
    }
});
