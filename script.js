// Static replica — buttons just give simple feedback, no real navigation.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-row a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  var wifiBtn = document.querySelector('.btn-wifi');
  if (wifiBtn) {
    wifiBtn.addEventListener('click', function () {
      var newPass = Math.floor(100000 + Math.random() * 900000);
      var strong = document.querySelector('.wifi-pass strong');
      if (strong) strong.textContent = newPass;
      alert('تم إنشاء كلمة سر جديدة للشبكة: ' + newPass);
    });
  }

  document.querySelectorAll('.side-btn, .btn-eval').forEach(function (btn) {
    btn.addEventListener('click', function () {
      console.log('clicked: ' + btn.textContent.trim());
    });
  });
});
