# Blog Projesi

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş bir blog uygulamasıdır. Kullanıcılar hesap oluşturabilir, giriş yapabilir, blog yazıları oluşturabilir, düzenleyebilir ve silebilir. Veriler MongoDB'de saklanmaktadır ve şifreleme için Bcrypt kullanılmıştır.

## 📌 Özellikler
- **Kullanıcı Kayıt ve Giriş Sistemi:** Bcrypt ile şifrelenmiş kullanıcı giriş ve kayıt işlemleri
- **JWT ile Kimlik Doğrulama:** Kullanıcı girişlerini güvenli hale getirme
- **Blog Yönetimi:** Blog yazıları oluşturma, düzenleme ve silme
- **MongoDB Kullanımı:** Mongoose ile MongoDB bağlantısı ve veri yönetimi
- **Session Yönetimi:** express-session ve connect-mongo ile oturum yönetimi
- **EJS Şablon Motoru:** express-ejs-layouts ile dinamik sayfa oluşturma
- **Middleware Desteği:** method-override, cookie-parser ile gelişmiş HTTP işlemleri

## 🛠 Kullanılan Teknolojiler
- **Backend:** Node.js, Express.js
- **Veritabanı:** MongoDB, Mongoose
- **Kimlik Doğrulama:** Bcrypt, JWT (JSON Web Token)
- **Oturum Yönetimi:** express-session, connect-mongo
- **Şablon Motoru:** EJS, express-ejs-layouts
- **Diğer:** Dotenv, CORS, Body-Parser, Method-Override, Cookie-Parser

## 🚀 Kurulum

1. **Projeyi Klonla:**
   ```bash
   git clone https://github.com/kullanici/blog-projesi.git
   cd blog-projesi
   ```

2. **Bağımlılıkları Yükle:**
   ```bash
   npm install
   ```

3. **.env Dosyasını Oluştur ve Aşağıdakileri Ekle:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   SESSION_SECRET=your_session_secret
   ```

4. **Uygulamayı Başlat:**
   ```bash
   npm start
   ```

## 💡 Katkıda Bulunma
Katkıda bulunmak için lütfen bir **pull request (PR)** gönderin veya bir **issue** açın.

## 📜 Lisans
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için [LİSANS](LICENSE) dosyasına göz atabilirsiniz.

