# Password Strength Analyser 🔐

> A real-time, client-side password strength analyzer built with pure HTML5, CSS3, and JavaScript—with zero external APIs, zero backend dependencies, and 100% offline capability.

---

## 📖 Description

**Password Strength Analyser** evaluates password security live as you type. It measures password complexity based on length, character variety, and pattern recognition, while checking against a built-in database of **500+ commonly leaked passwords**. The app provides immediate visual feedback, color-coded strength meters, actionable suggestions, and a cryptographically secure random password generator.

---

## ✨ Features

- ⚡ **Real-time Analysis**: Live evaluation on every keypress.
- 🎯 **Multi-Criteria Scoring Engine**:
  - Minimum length (8+ characters) & bonus length (12+ characters)
  - Uppercase letters (`A-Z`)
  - Lowercase letters (`a-z`)
  - Numbers (`0-9`)
  - Special characters (`!@#$%^&*` etc.)
- 🛡️ **Advanced Pattern & Leak Detection**:
  - Instant checks against **500+ commonly breached passwords**
  - Common names & default credential detection
  - Keyboard sequence patterns (e.g. `qwerty`, `1qaz2wsx`)
  - Sequential numbers/letters (e.g. `1234`, `abcd`, `aaaa`)
- 📊 **Visual Strength Meter & Badges**:
  - 🔴 **Weak** (Score: 0 - 2)
  - 🟠 **Medium** (Score: 3 - 4)
  - 🟢 **Strong** (Score: 5 - 6)
  - 💎 **Very Strong** (Score: 7+)
- 💡 **Live Actionable Suggestions**: Shows exact steps needed to improve password strength.
- 👁️ **Visibility Toggle**: Easily switch between hidden and visible password fields.
- ⚡ **Secure Password Generator**: Generates 16-character cryptographically random passwords using the Web Crypto API.
- 📱 **Fully Responsive**: Sleek dark-mode glassmorphic UI that works seamlessly across desktop and mobile screens.
- 🔌 **100% Offline Capability**: Runs directly via `file://` with zero NPM packages or CDN dependencies.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags & accessible form structure.
- **CSS3**: Vanilla CSS with custom properties (variables), Flexbox/Grid, Glassmorphism, and smooth transitions.
- **JavaScript (ES6)**: Pure client-side logic, Web Crypto API (`window.crypto`), and DOM manipulation.

---

## 🚀 Installation

1. **Fork** this repository.
2. **Clone** or download the project to your local machine:
   ```bash
   git clone https://github.com/mohit-sharma-001/Password_strength_analyser.git
   ```
3. Open `index.html` directly in any modern browser.

---

## 💡 Usage

1. Launch `index.html` in your web browser.
2. Type any password into the input field.
3. Review the **real-time strength meter**, **score badge**, and **live suggestions**.
4. Click the **Eye icon** to toggle password visibility.
5. Click **"Generate Strong Password"** to create a secure random password instantly.
6. Click the **Copy button** to copy the generated password to your clipboard.

---

## 📊 Project Status & Timeline

- **Status**: 🟢 **Completed**
- **Start Date**: 2026-07-28
- **End Date**: 2026-07-29

---

## 🔮 Future Improvements

- [ ] **Password History Check**: Store recent passwords in `localStorage` to warn against reuse.
- [ ] **Entropy Calculator**: Display exact bits of entropy for technical security feedback.
- [ ] **Dark / Light Mode Toggle**: Allow users to switch visual themes.
- [ ] **Export Security Report**: Download a summary report (PDF/text) of the password audit.
- [ ] **Have I Been Pwned API Integration**: Optional real-time API check against k-Anonymity breach databases.
- [ ] **Custom Policy Presets**: Support customizable enterprise or custom password rule sets.
- [ ] **Enhanced Accessibility**: Full ARIA accessibility and screen reader support.

---

## 👤 Author

**Mohit Sharma**
- GitHub: [@mohit-sharma-001](https://github.com/mohit-sharma-001)
- Repository: [Password_strength_analyser](https://github.com/mohit-sharma-001/Password_strength_analyser)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).