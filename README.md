# Vize-Final Not Hesaplama

SAPUI5 ile geliştirdiğim, vize ve final notlarından ortalama hesaplayan basit bir web uygulaması. Staj sürecinde SAPUI5 öğrenirken yaptığım projelerden biridir.

## Özellikler

- Vize ve final notu girişi
- Not ağırlıklarına göre (vize %[40], final %[60]) ortalama hesaplama
- Geçti/Kaldı durumunun gösterilmesi
- XML View ve Controller yapısıyla MVC mimarisi

## Kullanılan Teknolojiler

- SAPUI5 1.150.0 (sap_horizon teması)
- JavaScript (XML Views, MVC)
- SAP Fiori Application Generator (Basic şablon)
- UI5 Tooling
- Node.js

## Proje Yapısı

```
webapp/
├── controller/    # App ve Main controller dosyaları
├── view/          # XML view dosyaları
├── model/         # Model tanımları
├── i18n/          # Dil dosyaları
├── css/           # Stil dosyaları
├── test/          # Unit ve integration testleri
├── Component.js
├── manifest.json
└── index.html
```

## Kurulum ve Çalıştırma

Gereksinim: [Node.js](https://nodejs.org) (LTS sürüm)

```bash
git clone https://github.com/seymahilaly/sapui5-vize-final-not-hesaplama.git
cd sapui5-vize-final-not-hesaplama
npm install
npm start
```

Uygulama tarayıcıda açılır. Açılmazsa terminalde yazan adresi (genellikle `http://localhost:8080`) tarayıcıya yapıştır.

## Geliştirici

Şeyma Hilal Yeşildal  
GitHub: [@seymahilaly](https://github.com/seymahilaly)