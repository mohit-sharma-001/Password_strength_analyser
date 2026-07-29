/**
 * Password Strength Analyzer - Logic
 * Real-time analysis, scoring engine, suggestions, UI updates & interactivity.
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Element references
  const passwordInput = document.getElementById("password-input");
  const toggleVisibilityBtn = document.getElementById("toggle-visibility");
  const eyeIcon = document.getElementById("eye-icon");
  const strengthMeterFill = document.getElementById("meter-fill");
  const strengthBadge = document.getElementById("strength-badge");
  const strengthScoreText = document.getElementById("strength-score-text");
  const suggestionsList = document.getElementById("suggestions-list");
  const copyBtn = document.getElementById("copy-btn");
  const generateBtn = document.getElementById("generate-btn");
  const toast = document.getElementById("toast");

  // Requirement checklist elements
  const checkMinLength = document.getElementById("check-length-8");
  const checkBonusLength = document.getElementById("check-length-12");
  const checkUppercase = document.getElementById("check-uppercase");
  const checkLowercase = document.getElementById("check-lowercase");
  const checkNumber = document.getElementById("check-number");
  const checkSpecial = document.getElementById("check-special");
  const checkNotCommon = document.getElementById("check-not-common");
  const checkNoPattern = document.getElementById("check-no-pattern");

  // Eye icon SVGs (Open Eye & Slash Eye)
  const EYE_OPEN_PATH = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
  const EYE_SLASH_PATH = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;

  /**
   * Helper: Check if password contains obvious repeated or sequential patterns.
   * e.g., "aaaa", "1111", "1234", "abcd", "qwerty"
   */
  function hasObviousPattern(str) {
    if (!str || str.length < 3) return false;
    const lower = str.toLowerCase();

    // 1. 4+ repeated identical characters (e.g. "aaaa", "1111")
    if (/(.)\1{3,}/.test(lower)) return true;

    // 2. Keyboard & common sequence patterns
    const keyboardPatterns = ["qwerty", "asdfgh", "zxcvbn", "123456", "654321", "abcdef", "password"];
    for (const pattern of keyboardPatterns) {
      if (lower.includes(pattern)) return true;
    }

    // 3. Sequential 4-character alphabetic or numeric runs (e.g., "1234", "abcd", "dcba", "4321")
    for (let i = 0; i <= str.length - 4; i++) {
      const c0 = lower.charCodeAt(i);
      const c1 = lower.charCodeAt(i + 1);
      const c2 = lower.charCodeAt(i + 2);
      const c3 = lower.charCodeAt(i + 3);

      // Ascending (+1 step)
      if (c1 === c0 + 1 && c2 === c1 + 1 && c3 === c2 + 1) return true;
      // Descending (-1 step)
      if (c1 === c0 - 1 && c2 === c1 - 1 && c3 === c2 - 1) return true;
    }

    return false;
  }

  /**
   * Helper: Check if password is in COMMON_PASSWORDS list (case-insensitive)
   */
  function isCommonPassword(str) {
    if (!str) return false;
    const normalized = str.trim().toLowerCase();
    if (typeof COMMON_PASSWORDS !== "undefined" && Array.isArray(COMMON_PASSWORDS)) {
      return COMMON_PASSWORDS.some(item => item.toLowerCase() === normalized);
    }
    return false;
  }

  /**
   * Core Analysis Function
   */
  function evaluatePassword(pwd) {
    if (!pwd) {
      return {
        score: 0,
        category: "None",
        colorClass: "none",
        meterWidth: "0%",
        suggestions: [],
        checks: {
          len8: false,
          len12: false,
          uppercase: false,
          lowercase: false,
          number: false,
          special: false,
          notCommon: true,
          noPattern: true
        }
      };
    }

    const checks = {
      len8: pwd.length >= 8,
      len12: pwd.length >= 12,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(pwd),
      notCommon: !isCommonPassword(pwd),
      noPattern: !hasObviousPattern(pwd)
    };

    const suggestions = [];

    // Calculate score
    let score = 0;
    if (checks.len8) score += 1;
    if (checks.len12) score += 1;
    if (checks.uppercase) score += 1;
    if (checks.lowercase) score += 1;
    if (checks.number) score += 1;
    if (checks.special) score += 1;

    // Pattern deduction (-1 point if obvious pattern found)
    if (!checks.noPattern) {
      score = Math.max(0, score - 1);
      suggestions.push("Avoid repeated characters or obvious sequences (e.g. 'aaaa', '1234', 'qwerty').");
    }

    // Common password check (forces score to 0)
    if (!checks.notCommon) {
      score = 0;
      suggestions.push("⚠️ This is a commonly used/leaked password! Please choose something unique.");
    }

    // Build specific feature suggestions if not common password
    if (checks.notCommon) {
      if (!checks.len8) suggestions.push("Add at least 8 characters for basic security.");
      else if (!checks.len12) suggestions.push("Make it 12+ characters for bonus strength.");

      if (!checks.uppercase) suggestions.push("Include at least one uppercase letter (A-Z).");
      if (!checks.lowercase) suggestions.push("Include at least one lowercase letter (a-z).");
      if (!checks.number) suggestions.push("Include at least one number (0-9).");
      if (!checks.special) suggestions.push("Include at least one special character (!@#$%^&*).");
    }

    // Map score to category & color styling
    let category = "Weak";
    let colorClass = "weak";
    let meterWidth = "25%";

    if (score >= 7) {
      category = "Very Strong";
      colorClass = "very-strong";
      meterWidth = "100%";
    } else if (score >= 5) {
      category = "Strong";
      colorClass = "strong";
      meterWidth = "75%";
    } else if (score >= 3) {
      category = "Medium";
      colorClass = "medium";
      meterWidth = "50%";
    } else {
      category = "Weak";
      colorClass = "weak";
      meterWidth = pwd.length > 0 ? "25%" : "0%";
    }

    return { score, category, colorClass, meterWidth, suggestions, checks };
  }

  /**
   * Helper to update UI badge, meter, checklist & suggestions
   */
  function updateUI() {
    const pwd = passwordInput.value;
    const analysis = evaluatePassword(pwd);

    if (!pwd) {
      strengthMeterFill.style.width = "0%";
      strengthMeterFill.className = "meter-fill";
      strengthBadge.textContent = "Enter Password";
      strengthBadge.className = "strength-badge none";
      strengthScoreText.textContent = "Score: 0 / 7";
      suggestionsList.innerHTML = `<li class="hint-item">Start typing a password to analyze its security strength.</li>`;
      resetChecklist();
      return;
    }

    // Update meter fill
    strengthMeterFill.style.width = analysis.meterWidth;
    strengthMeterFill.className = `meter-fill ${analysis.colorClass}`;

    // Update strength label/badge
    strengthBadge.textContent = analysis.category;
    strengthBadge.className = `strength-badge ${analysis.colorClass}`;
    strengthScoreText.textContent = `Score: ${analysis.score} / 7`;

    // Update checklist items
    updateCheckItem(checkMinLength, analysis.checks.len8);
    updateCheckItem(checkBonusLength, analysis.checks.len12);
    updateCheckItem(checkUppercase, analysis.checks.uppercase);
    updateCheckItem(checkLowercase, analysis.checks.lowercase);
    updateCheckItem(checkNumber, analysis.checks.number);
    updateCheckItem(checkSpecial, analysis.checks.special);
    updateCheckItem(checkNotCommon, analysis.checks.notCommon);
    updateCheckItem(checkNoPattern, analysis.checks.noPattern);

    // Update suggestions list
    suggestionsList.innerHTML = "";
    if (analysis.suggestions.length === 0) {
      const successLi = document.createElement("li");
      successLi.className = "suggestion-item success";
      successLi.innerHTML = `<span>✨ Great job! Your password meets all security recommendations.</span>`;
      suggestionsList.appendChild(successLi);
    } else {
      analysis.suggestions.forEach(text => {
        const li = document.createElement("li");
        li.className = text.includes("commonly used") ? "suggestion-item warning" : "suggestion-item";
        li.innerHTML = `<span>${text}</span>`;
        suggestionsList.appendChild(li);
      });
    }
  }

  function updateCheckItem(element, isPassed) {
    if (!element) return;
    if (isPassed) {
      element.classList.add("passed");
      element.classList.remove("failed");
    } else {
      element.classList.add("failed");
      element.classList.remove("passed");
    }
  }

  function resetChecklist() {
    const allChecks = [
      checkMinLength, checkBonusLength, checkUppercase, checkLowercase,
      checkNumber, checkSpecial, checkNotCommon, checkNoPattern
    ];
    allChecks.forEach(el => {
      if (el) el.classList.remove("passed", "failed");
    });
  }

  // Toggle Password Visibility
  toggleVisibilityBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    eyeIcon.innerHTML = isPassword ? EYE_SLASH_PATH : EYE_OPEN_PATH;
    toggleVisibilityBtn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });

  // Copy Password to Clipboard
  copyBtn.addEventListener("click", () => {
    const val = passwordInput.value;
    if (!val) {
      showToast("Nothing to copy!");
      return;
    }
    navigator.clipboard.writeText(val).then(() => {
      showToast("Password copied to clipboard! 📋");
    }).catch(() => {
      showToast("Failed to copy password.");
    });
  });

  // Generate Random Strong Password
  generateBtn.addEventListener("click", () => {
    const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsetLower = "abcdefghijklmnopqrstuvwxyz";
    const charsetNum = "0123456789";
    const charsetSpec = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const allCharset = charsetUpper + charsetLower + charsetNum + charsetSpec;

    let generated = "";
    // Ensure at least one of each required type
    generated += getRandomChar(charsetUpper);
    generated += getRandomChar(charsetLower);
    generated += getRandomChar(charsetNum);
    generated += getRandomChar(charsetSpec);

    // Fill up to 16 characters with random chars
    for (let i = 4; i < 16; i++) {
      generated += getRandomChar(allCharset);
    }

    // Shuffle the generated password
    generated = generated.split('').sort(() => 0.5 - Math.random()).join('');

    passwordInput.value = generated;
    passwordInput.type = "text";
    eyeIcon.innerHTML = EYE_SLASH_PATH;
    updateUI();
    showToast("Strong password generated! ⚡");
  });

  function getRandomChar(charset) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return charset[array[0] % charset.length];
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // Event Listeners
  passwordInput.addEventListener("input", updateUI);

  // Initial UI state setup
  updateUI();
});
