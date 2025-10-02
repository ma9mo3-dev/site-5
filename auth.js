// -------------------- تسجيل الدخول --------------------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) return alert("الرجاء ملء جميع الحقول");

    // جلب بيانات المستخدم من localStorage
    const users = JSON.parse(localStorage.getItem("taeh_users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      // تخزين المستخدم الحالي
      localStorage.setItem("taeh_user", JSON.stringify(user));
      window.location.href = "dashboard.html";
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  });
}

// -------------------- تسجيل حساب جديد --------------------
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const age = parseInt(document.getElementById("signup-age").value);
    const gender = document.getElementById("signup-gender").value;
    const weight = parseFloat(document.getElementById("signup-weight").value);
    const height = parseFloat(document.getElementById("signup-height").value);
    const diseases = document.getElementById("signup-diseases").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;

    // التحقق من صحة البيانات
    if (username.length < 8 || username.length > 20) return alert("اسم المستخدم بين 8 و 20 حرف");
    if (password.length < 8) return alert("كلمة المرور يجب أن تكون أكثر من 8 أحرف");
    if (password !== confirm) return alert("كلمة المرور غير مطابقة");

    const users = JSON.parse(localStorage.getItem("taeh_users") || "[]");

    // التحقق من عدم تكرار اسم المستخدم
    if (users.find(u => u.username === username)) return alert("اسم المستخدم موجود بالفعل");

    const newUser = {
      username,
      age,
      gender,
      weight,
      height,
      diseases,
      password,
      points: 0 // نقاط التحديات
    };

    users.push(newUser);
    localStorage.setItem("taeh_users", JSON.stringify(users));

    alert("تم إنشاء الحساب بنجاح! الرجاء تسجيل الدخول.");
    window.location.href = "index.html";
  });
      }
