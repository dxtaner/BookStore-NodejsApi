
Book Nodejs Proje Açıklaması
================

Başlangıç
---------

1.  Projeyi klonlayın:
`git clone <proje-repo-url>`3.  Proje dizinine gidin:
`cd <proje-dizini>`5.  Gerekli bağımlılıkları yükleyin:
`npm install`7.  MongoDB bağlantı URL'sini `.env` dosyasına ekleyin:
`DB_URL=<mongodb-baglanti-urlsi>`9.  Uygulamayı çalıştırın:
`npm start`

API Rotaları
------------

*   **Kullanıcılar (Users):**
    *   `GET /api/users`: Tüm kullanıcıları listeler.
    *   `GET /api/users/:id`: Belirli bir kullanıcıyı getirir.
    *   `POST /api/users`: Yeni bir kullanıcı oluşturur.
    *   `PUT /api/users/:id`: Belirli bir kullanıcının bilgilerini günceller.
    *   `DELETE /api/users/:id`: Belirli bir kullanıcıyı siler.
*   **Yazarlar (Authors):**
    *   `GET /api/authors`: Tüm yazarları listeler.
    *   `GET /api/authors/:id`: Belirli bir yazarı getirir.
    *   `POST /api/authors`: Yeni bir yazar oluşturur.
    *   `PUT /api/authors/:id`: Belirli bir yazarın bilgilerini günceller.
    *   `DELETE /api/authors/:id`: Belirli bir yazarı siler.
*   **Kitaplar (Books):**
    *   `GET /api/books`: Tüm kitapları listeler.
    *   `GET /api/books/:id`: Belirli bir kitabı getirir.
    *   `POST /api/books`: Yeni bir kitap oluşturur.
    *   `PUT /api/books/:id`: Belirli bir kitabın bilgilerini günceller.
    *   `DELETE /api/books/:id`: Belirli bir kitabı siler.

Veri Modeli
-----------

Proje, MongoDB veritabanında aşağıdaki veri modelini kullanmaktadır:

#### Kullanıcı (User) Veri Modeli:

*   `name`: Kullanıcının adı (String).
*   `email`: Kullanıcının e-posta adresi (String).
*   `age`: Kullanıcının yaşı (Number).

#### Yazar (Author) Veri Modeli:

*   `name`: Yazarın adı (String).
*   `birthDate`: Yazarın doğum tarihi (Date).
*   `nationality`: Yazarın vatandaşı olduğu ülke (String).

#### Kitap (Book) Veri Modeli:

*   `title`: Kitabın başlığı (String).
*   `author`: Kitabın yazarı (Referans olarak Yazar veri modeline atıfta bulunur).
*   `publicationDate`: Kitabın yayınlanma tarihi (Date).
*   `genre`: Kitabın türü (String).

Ek Bilgiler
-----------

*   Proje MongoDB veritabanını kullanmaktadır. Veritabanı bağlantısı için `DB_URL` çevresel değişkeni kullanılır.
*   Proje, Express.js ile geliştirilmiştir ve HTTP isteklerini işlemek için Express yönlendiricilerini kullanır.
*   Kullanıcılar, yazarlar ve kitaplar için ayrı yönlendiriciler (routes) bulunmaktadır.
*   Veri modelleri ve yönlendiriciler `/models` ve `/routes` klasörlerinde yer almaktadır.

Lisans
------

Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyebilirsiniz.
