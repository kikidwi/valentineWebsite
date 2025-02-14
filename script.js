// Fungsi untuk mengontrol musik
const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

// Atur waktu mulai musik (dalam detik)
const startTimeInSeconds = 40; // Misalnya, mulai dari menit ke-0:30
music.currentTime = startTimeInSeconds;

// Atur volume musik secara hardcode (nilai antara 0 dan 1)
music.volume = 0.2; // Volume 30%

musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.pause();
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

// Fungsi untuk membuka gambar dalam ukuran penuh
function openFullImg(src) {
    const modal = document.getElementById('fullImgModal');
    const fullImg = document.getElementById('fullImg');
    fullImg.src = src;
    modal.style.display = "block";
}

// Fungsi untuk menutup modal gambar
function closeFullImg() {
    const modal = document.getElementById('fullImgModal');
    modal.style.display = "none";
}

// Fungsi untuk kembali ke halaman utama
function goBack() {
    window.location.href = "index.html";
}

// Fungsi untuk mengarahkan ke gallery
function redirectToGallery() {
    window.location.href = "gallery.html";
}