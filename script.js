// Script untuk Slideshow Otomatis
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

// Jalankan slideshow saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

// Script untuk Menu Hamburger (Tampilan HP)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ##############################################################
/* --- SCRIPT PENCARIAN GURU --- */
// Hanya dijalankan jika ada elemen searchInput (agar tidak error di halaman lain)
const searchInput = document.getElementById('searchInput');
const teacherGrid = document.getElementById('teacherGrid');

if (searchInput && teacherGrid) {
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        const cards = teacherGrid.getElementsByClassName('teacher-card');

        for (let i = 0; i < cards.length; i++) {
            // Ambil data-kelas dari atribut HTML
            const classInfo = cards[i].getAttribute('data-kelas').toLowerCase();
            // Ambil nama guru dari teks h4
            const teacherName = cards[i].querySelector('h4').textContent.toLowerCase();

            // Cek apakah input cocok dengan Kelas ATAU Nama Guru
            if (classInfo.indexOf(filter) > -1 || teacherName.indexOf(filter) > -1) {
                cards[i].style.display = ""; // Tampilkan
            } else {
                cards[i].style.display = "none"; // Sembunyikan
            }
        }
    });
}
/* --- SCRIPT LOAD MORE KALENDER --- */
const calendarBody = document.getElementById('calendarBody');
const btnLoadMore = document.getElementById('btnLoadMore');

if (calendarBody && btnLoadMore) {
    const rows = calendarBody.querySelectorAll('tr');
    const limit = 5; // Jumlah baris yang ingin ditampilkan di awal

    // Sembunyikan baris di atas limit saat halaman dimuat
    if (rows.length > limit) {
        for (let i = limit; i < rows.length; i++) {
            rows[i].style.display = 'none';
        }
    } else {
        // Jika data sedikit, sembunyikan tombol
        btnLoadMore.style.display = 'none';
    }

    // Fungsi saat tombol diklik
    btnLoadMore.addEventListener('click', function() {
        const isExpanded = btnLoadMore.getAttribute('data-expanded') === 'true';

        if (!isExpanded) {
            // TAMPILKAN SEMUA
            for (let i = limit; i < rows.length; i++) {
                rows[i].style.display = 'table-row'; // Tampilkan baris
            }
            btnLoadMore.textContent = "Tutup Sebagian"; // Ubah teks tombol
            btnLoadMore.setAttribute('data-expanded', 'true');
        } else {
            // SEMBUNYIKAN LAGI
            for (let i = limit; i < rows.length; i++) {
                rows[i].style.display = 'none'; // Sembunyikan baris
            }
            btnLoadMore.textContent = "Lihat Selengkapnya"; // Ubah teks tombol
            btnLoadMore.setAttribute('data-expanded', 'false');
        }
    });
}
// ##############################################################
/* --- SCRIPT BACK TO TOP --- */
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Tampilkan tombol saat scroll ke bawah lebih dari 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Saat tombol diklik, kembali ke atas dengan mulus
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// ##############################################################