# AI Destekli Playwright QA Framework

Playwright ve TypeScript ile geliştirilmiş, portfolio seviyesine çıkarılması hedeflenen bir end-to-end test otomasyon framework projesidir.

Bu proje, QA + AI öğrenme yol haritasının bir parçasıdır. Amaç, modern QA otomasyon pratiklerini adım adım öğrenirken gerçek dünyaya yakın bir test framework’ü oluşturmaktır.

[İngilizce dokümantasyon için tıklayın](./README.md)

## Teknoloji Stack’i

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- HTML Reporter

## Test Edilen Uygulama

[SauceDemo](https://www.saucedemo.com/)

## Mevcut Test Kapsamı

### Smoke Testleri

- Login sayfası başarılı şekilde açılır
- Username alanı görünür
- Password alanı görünür
- Login butonu görünür

### Auth Testleri

- Geçerli kullanıcı ile login
- Geçersiz kullanıcı ile login hata kontrolü
- Logout

## Proje Yapısı

```text
.
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── auth/
│   │   └── login.spec.ts
│   └── smoke/
│       └── login-page.smoke.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Kurulum

Bağımlılıkları kur:

```bash
npm install
```

Playwright browser’larını kur:

```bash
npm run install:browsers
```

## Testleri Çalıştırma

Tüm testleri çalıştır:

```bash
npm test
```

Auth testlerini çalıştır:

```bash
npm run test:auth
```

Sadece Chromium testlerini çalıştır:

```bash
npm run test:chromium
```

Sadece Firefox testlerini çalıştır:

```bash
npm run test:firefox
```

Sadece WebKit testlerini çalıştır:

```bash
npm run test:webkit
```

Tarayıcı açık şekilde test çalıştır:

```bash
npm run test:headed
```

Debug modda test çalıştır:

```bash
npm run test:debug
```

HTML raporu aç:

```bash
npm run test:report
```

TypeScript kontrolü çalıştır:

```bash
npm run typecheck
```

## Mevcut NPM Scriptleri

```json
{
  "test": "playwright test",
  "test:auth": "playwright test tests/auth/login.spec.ts",
  "test:chromium": "playwright test --project=chromium",
  "test:firefox": "playwright test --project=firefox",
  "test:webkit": "playwright test --project=webkit",
  "test:headed": "playwright test --project=chromium --headed",
  "test:debug": "playwright test --project=chromium --debug",
  "test:report": "playwright show-report",
  "typecheck": "tsc --noEmit",
  "install:browsers": "playwright install"
}
```

## Öğrenme Hedefleri

Bu proje şu konulara odaklanır:

- Playwright temelleri
- TypeScript ile test otomasyonu
- Page Object Model
- Stabil selector kullanımı
- Test datasını ayırma
- Cross-browser testing
- HTML reporting
- CI-ready test yapısı
- AI destekli debugging ve test tasarımı
