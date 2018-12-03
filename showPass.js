{
  const passwordFields = Array.from(
    document.querySelectorAll('[type="password"]')
  );
  const shownPasswordFields = Array.from(
    document.querySelectorAll('[type="show-pass"]')
  );
  passwordFields.forEach(function(el) {
    el.setAttribute("type", "show-pass");
  });
  shownPasswordFields.forEach(function(el) {
    el.setAttribute("type", "password");
  });
}
