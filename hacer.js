// Global Değişkenlerimiz
var ilerleme = 0;
var kilitKirmaZamanlayici; // setInterval için
var sifreDondurmeZamanlayici; // setInterval için

// GÖREV 3: Diziye yeni siber güvenlik logları eklendi
var sahteLoglar = [
    "> Güvenlik duvarı atlanıyor...",
    "> Şifreleme algoritmaları çözülüyor...",
    "> Veritabanı portları taranıyor...",
    "> Yönetici (Admin) yetkileri alınıyor...",
    "> Veriler indiriliyor...",
    "> Kamera sistemleri devre dışı bırakılıyor...",
    "> Güvenlik kameraları döngüye alındı...",
    "> Çekirdek (Kernel) açığı sömürülüyor..."
];

// Butona tıklandığında çalışacak ana fonksiyon
function kodKirmayiBaslat() {
    // 1. Butonu devre dışı bırakalım
    document.getElementById("baslatBtn").disabled = true;
    document.getElementById("baslatBtn").innerHTML = "[ İŞLEM DEVAM EDİYOR... ]";

    // 2. Rastgele Şifre Döndürme İşlemi (Her 100 milisaniyede bir)
    sifreDondurmeZamanlayici = setInterval(rastgeleSifreUret, 100);

    // GÖREV 2: Hızı Ayarla - Sürenin 20 saniye sürmesi için her 1000 ms'de (1 saniyede) bir çalıştırıyoruz
    kilitKirmaZamanlayici = setInterval(barDoldur, 1000);
}

// Şifre ekranında film efekti gibi rastgele rakamlar çıkaran fonksiyon
function rastgeleSifreUret() {
    var s1 = Math.floor(Math.random() * 9999);
    var s2 = Math.floor(Math.random() * 9999);
    var s3 = Math.floor(Math.random() * 9999);
    var s4 = Math.floor(Math.random() * 9999);

    document.getElementById("ekran").innerHTML = s1 + "-" + s2 + "-" + s3 + "-" + s4;
}

// Progress Barı dolduran fonksiyon
function barDoldur() {
    // GÖREV 2: Her 1 saniyede bir %5 artarsa, toplam 20 adımda (20 saniyede) %100 olur
    ilerleme = ilerleme + 5; 
    
    document.getElementById("yuklemeBari").value = ilerleme;
    document.getElementById("yuzdeYazi").innerHTML = "%" + ilerleme + " Tamamlandı";

    // Rastgele bir log mesajını ekrana yazdırma
    var rastgeleIndex = Math.floor(Math.random() * sahteLoglar.length);
    document.getElementById("logListesi").innerHTML += "<li>" + sahteLoglar[rastgeleIndex] + "</li>";

    // EĞER İLERLEME %100 OLDUYSA
    if (ilerleme >= 100) {
        clearInterval(kilitKirmaZamanlayici);
        clearInterval(sifreDondurmeZamanlayici);

        // GÖREV 1: Kırmızı Alarm (Sistem Kilitlendi Efekti)
        document.getElementById("ekran").innerHTML = "SİSTEM KİLİTLENDİ - POLİS ARANIYOR";
        document.getElementById("ekran").style.color = "white";
        document.getElementById("ekran").style.backgroundColor = "red";
        document.getElementById("ekran").style.textShadow = "0 0 10px white";
        
        document.getElementById("baslatBtn").innerHTML = "[ BAĞLANTI KESİLDİ ]";
        document.getElementById("baslatBtn").disabled = true; // Butonu tamamen kilitle
    }
}f