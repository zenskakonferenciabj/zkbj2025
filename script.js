document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-registracia");

  if (btn) {
    btn.addEventListener("click", () => {
      // tu vlož odkaz na svoj Google Formulár pre registraciu ucastnicok
      const formUrl = "https://forms.gle/yMiSmHuXweDLgDnW8";
      window.open(formUrl, "_blank");
    });
  }
});
