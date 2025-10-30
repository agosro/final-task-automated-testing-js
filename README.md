# 🧪 Final Task - WebdriverIO JS Testing (SauceDemo)

Automated end-to-end tests for the [SauceDemo](https://www.saucedemo.com) application using **WebdriverIO (v9)**, **Mocha**, and **JavaScript**.

This project was developed as the final task for the *EPAM "Automated Testing in JS"* course.

---

## 🚀 Project Overview

The goal of this project is to automate the login flow of the SauceDemo platform, validating both **error handling** and **successful login** scenarios.

### ✅ Test Scenarios Implemented

1. **UC-1:** Empty credentials → show “Username is required”.
2. **UC-2:** Missing password → show “Password is required”.
3. **UC-3:** Valid credentials → user is successfully logged in and page title shows “Swag Labs”.

---

## 🧩 Tech Stack

- **Language:** JavaScript (ES Modules)
- **Framework:** Mocha
- **Assertion Library:** Node.js `assert`
- **Automation Tool:** WebdriverIO v9
- **Browsers Tested:** Chrome, Microsoft Edge and Firefox (multi-browser setup)
- **Page Object Pattern:** Implemented in `pages/login.pages.js`

---

## ⚙️ Installation & Setup

### 1. Clone this repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests
```bash
npx wdio run ./wdio.conf.js
```

---

## 📁 Project Structure

```
├── test/
│   └── specs/
│       └── login.spec.js       # Test cases for login feature
├── pages/
│   └── login.pages.js          # Page Object for login page
├── wdio.conf.js                # WebdriverIO main configuration
├── wdio.slow.conf.js           # Optional config for slow visualization
├── package.json
└── README.md
```

---

## 🧠 Key Learnings

- Usage of **WebdriverIO commands** (`setValue`, `click`, `keys`, `getText`)
- Implementation of the **Page Object Model (POM)**
- Multi-browser testing configuration
- Synchronization and element waiting strategies

---

## ⚠️ Note about Geckodriver

Firefox testing uses Geckodriver, but due to GitHub rate-limit issues during installation,
it was installed globally instead of locally in this project.
If needed, you can manually install it with:
```bash
npm install geckodriver --save-dev
```
Or place the binary in:
```bash
C:\Program Files\geckodriver.exe
```

---

## 👩‍💻 Author

**Agostina Rocío Torres**  
Full Stack & QA Tester  
[GitHub](https://github.com/agosro) | [LinkedIn](https://www.linkedin.com/in/agosro/)

