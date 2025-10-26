// This file is plain JavaScript; ensure it runs after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Ensure there is an output container
  let output = document.getElementById('output') || (function () {
    const d = document.createElement('div');
    d.id = 'output';
    document.body.appendChild(d);
    return d;
  })();

  // Use an integer length for the array
  let length = Math.floor(Math.random() * 15);
  let dynamicArray = [];

  // Membuat array dengan panjang acak
  for (let i = 0; i < length; i++) {
    dynamicArray[i] = Math.round(Math.random() * 5);
  }

  // Menjumlahkan semua elemen dalam array
  let arraySum = 0;
  for (let i = 0; i < length; i++) {
    arraySum += dynamicArray[i];
  }

  // Menampilkan hasil di halaman web
  output.innerHTML += "The array of random numbers is: " + dynamicArray.join(', ') + "<br/>";
  output.innerHTML += "The sum of all array elements is: " + arraySum + "<br/>";
});
