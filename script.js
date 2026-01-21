// Account Type Handle

const accountType = document.getElementById("accountType");
const salariedFields = document.getElementById("salariedFields");

accountType.addEventListener("change", function () {
    if (this.value === "Salaried") {
        salariedFields.style.display = "block";
    } else {
        salariedFields.style.display = "none";
    }
});

// IBAN Select Handle

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


// File Size Handling

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

document.querySelectorAll('input[type="file"]').forEach(input => {
  input.addEventListener("change", function () {
    const file = this.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert("File size must be under 2MB");
      this.value = "";
    }
  });
});
