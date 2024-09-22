# Uçuş Rezervasyon Sistemi

Bu proje, kullanıcıların uçuş araması yapabildiği, filtreleyebildiği ve rezervasyon yapabildiği bir web uygulamasıdır.

## Özellikler

- Uçuş arama
- Gelişmiş filtreleme seçenekleri
- Uçuş sonuçlarını görüntüleme
- Rezervasyon yapma

## Teknolojiler

- Frontend: React.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- Veritabanı: MongoDB
- API: RESTful API

## Kurulum

1. Repoyu Github Üzerinden klonlayın:
   ```
   https://github.com/burak-mumcu/flight-site
   ```

2. Proje dizinine gidin:
   ```
   cd FLIGHT-SITE
   ```

3. Backend klasörüne gidin:
   ```
   cd Backend
   ```

4. Backend klasöründe .env dosyasını oluşturun ve gerekli değişkenleri ekleyin:
   ```
  MONGO_URI=mongodb+srv://burak:123@cluster0.tem3o.mongodb.net/
   ```

5. Gerekli bağımlılıkları yükleyin:
   ```
   npm install
   ```

6. Uygulamanın Backend kısmını başlatın:
 2  ```
   npm run dev
   ```

7. Uygulamanın Frontend Kısmına gidin:
   ```
   cd ..
   cd Frontend
   ```
8. Gerekli bağımlılıkları yükleyin:
   ```
   npm install
   ```

9. Uygulamanın Frontend kısmını başlatın:
   ```
   npm run dev
   ```

## Kullanım

1. Tarayıcınızda `http://localhost:5173` adresine gidin.
2. Ana sayfada Gördüğünüz uçuşları filtreleyebilirsiniz.
3. İstediğiniz uçuşu seçin ve rezervasyon işlemini tamamlayın.
4. Rezervasyonlarınızı görüntüleyebilirsiniz, Dilediğiniz zaman bunları silebilirsiniz.

## Katkıda Bulunma

1. Bu repoyu fork edin.
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`).
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Açıklama'`).
4. Dalınıza push yapın (`git push origin yeni-ozellik`).
5. Bir Pull Request oluşturun.

## Lisans

Bu proje [MIT lisansı](https://opensource.org/licenses/MIT) altında lisanslanmıştır.

## İletişim

Proje Sahibi: Burak Mumcu
E-posta: Mumcuburak@icloud.com
Proje Linki: https://github.com/burak-mumcu/flight-site

## Sistem Gereksinimleri

Bu projeyi çalıştırmak için aşağıdaki minimum gereksinimlere ihtiyacınız vardır:

- Node.js: v14.0.0 veya üzeri
- npm: v6.14.0 veya üzeri

Sisteminizde Node.js ve npm'in kurulu olduğundan emin olun. Sürümlerinizi kontrol etmek için terminal veya komut istemcisinde şu komutları çalıştırabilirsiniz:

```
node -v
npm -v
```

Eğer kurulu değilse, Node.js ve npm'in en son sürümlerini indirmek için [Node.js resmi web sitesi](https://nodejs.org/) veya [npm resmi web sitesi](https://www.npmjs.com/get-npm) adreslerini ziyaret edebilirsiniz.


Projenin Çalışan Fotoğrafları : 

![alt text](<Ekran görüntüsü 2024-09-22 142655.png>)
![alt text](<Ekran görüntüsü 2024-09-22 142705.png>)
![alt text](<Ekran görüntüsü 2024-09-22 142722.png>)