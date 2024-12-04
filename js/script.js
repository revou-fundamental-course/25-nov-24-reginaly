document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data input
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm ke meter
    const weight = parseFloat(document.getElementById('weight').value);

    // Validasi input
    if (isNaN(height) || isNaN(weight) || isNaN(age) || !gender) {
        document.getElementById('result').textContent = "Please fill in all fields correctly.";
        return;
    }

    if (height <= 0 || weight <= 0 || age <= 0) {
        document.getElementById('result').textContent = "Height, weight, and age must be positive values.";
        return;
    }

    // Hitung BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Tentukan kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Tambahkan rekomendasi khusus untuk gender
    let genderMessage = gender === "male" ? "As a male, maintaining a healthy weight is important." : "As a female, maintaining a balanced lifestyle is key.";

    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
        <p>Your BMI is <strong>${bmi}</strong> (${category}).</p>
        <p>${genderMessage}</p>
    `;
});

// Event listener untuk tombol reset
document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('result').innerHTML = ""; // Bersihkan hasil
});