document.addEventListener('DOMContentLoaded', () => {
    new Splide('#a', {
        perPage: 6,
        perMove: 1,
        autoplay: true,      // Otomatik geçişi etkinleştirir
        interval: 3000,      // Her 3 saniyede bir geçiş yapar
        pauseOnHover: false, // Fareyle üzerine gelindiğinde otomatik geçişi durdurmaz
        pagination: false,  // Sayfalama noktalarını gizler (isteğe bağlı)
    }).mount();
});
