// Ambil elemen DOM
const kelvinInput = document.getElementById('kelvinInput');
const convertBtn = document.getElementById('convertBtn');
const outC = document.getElementById('outC');
const outF = document.getElementById('outF');
const fill = document.getElementById('fill');

// mapping: kita tentukan rentang Celsius untuk visual (misal -10 sampai 50)
const visualMinC = -10;
const visualMaxC = 50;

function kelvinToCelsius(k) {
  return k - 273;
}

function celsiusToFahrenheit(c) {
  return c * (9 / 5) + 32;
}

// map celsius ke persentase tinggi untuk elemen thermo-fill
function mapCelsiusToPercent(c) {
  // clamp agar tidak keluar dari 0..100
  const clamped = Math.max(visualMinC, Math.min(visualMaxC, c));
  const percent = ((clamped - visualMinC) / (visualMaxC - visualMinC)) * 100;
  return Math.floor(percent); // kita bulatkan ke bawah
}

function updateDisplayFromKelvin(k) {
  const c = kelvinToCelsius(k);
  let f = celsiusToFahrenheit(c);

  // bulatkan agar tampilkan angka bulat
  const cRounded = Math.floor(c);
  const fRounded = Math.floor(f);

  outC.textContent = `Celsius: ${cRounded} °C`;
  outF.textContent = `Fahrenheit: ${fRounded} °F`;

  const percent = mapCelsiusToPercent(c);
  // set height (CSS) dari .thermo-fill
  fill.style.height = `${percent}%`;
}

// Event tombol
convertBtn.addEventListener('click', () => {
  const k = Number(kelvinInput.value);
  if (Number.isNaN(k)) {
    alert('Masukkan angka Kelvin yang valid');
    return;
  }
  updateDisplayFromKelvin(k);
});

// jalankan saat halaman pertama kali dimuat
updateDisplayFromKelvin(Number(kelvinInput.value));
