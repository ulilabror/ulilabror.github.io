// Array untuk menyimpan nilai checkbox
const makul = [];

// Pilih semua checkbox dengan class 'form-check-input'
const checkboxes = document.querySelectorAll('input.form-check-input');

// Loop melalui semua checkbox dan tambahkan event listener
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      // Jika checkbox dicentang, tambahkan nilai ke array
      if (!makul.includes(value)) {
        makul.push(value);
      }
    } else {
      // Jika checkbox tidak dicentang, hapus nilai dari array
      const index = makul.indexOf(value);
      if (index > -1) {
        makul.splice(index, 1);
      }
    }

    // Tampilkan array di konsol
    console.log('Array makul[]:', makul);
  });
});
