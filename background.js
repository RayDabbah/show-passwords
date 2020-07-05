chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.executeScript({
    file: "./showPass.js",
  });
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === "toggle-passwords") {
    chrome.tabs.executeScript({
      file: "./showPass.js",
    });
  }
});

chrome.runtime.onMessage.addListener((req) =>
  chrome.browserAction.setIcon(req)
);
