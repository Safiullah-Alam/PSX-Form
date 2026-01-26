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

const fiqahSelect = document.querySelector('select[name="fiqah"]');
const otherFiqahField = document.getElementById("otherFiqahField");

fiqahSelect.addEventListener("change", function () {
    if (this.value === "Other") {
        otherFiqahField.style.display = "block";
    } else {
        otherFiqahField.style.display = "none";
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
