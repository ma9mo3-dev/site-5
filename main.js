// الشريط الجانبي (Sidebar)
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-toggle");

// فتح وإغلاق الشريط
if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // إغلاق الشريط لما تضغط في أي مكان برا
  document.addEventListener("click", function (e) {
    if (sidebar.classList.contains("active") && !sidebar.contains(e.target) && e.target !== menuBtn) {
      sidebar.classList.remove("active");
    }
  });
}

// زر تسجيل الخروج (لو موجود)
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("taeh_user");
    window.location.href = "index.html";
  });
}
