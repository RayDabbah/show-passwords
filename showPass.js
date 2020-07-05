{
  const passwordFields = Array.from(
    document.querySelectorAll('[type="password"]')
  );
  const shownPasswordFields = Array.from(
    document.querySelectorAll('[type="show-pass"]')
  );
  passwordFields.forEach((el) => el.setAttribute("type", "show-pass"));

  shownPasswordFields.forEach((el) => el.setAttribute("type", "password"));

  if (document.querySelector('[type="show-pass"]')) {
    chrome.runtime.sendMessage({ path: "unlock.png" });
  } else chrome.runtime.sendMessage({ path: "lock.png" });
}
