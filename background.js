chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.executeScript({
    file: "./showPass.js",
  });
});

chrome.commands.onCommand.addListener(function (command) {
  console.log(command);
  if (command === "toggle-passwords") {
    chrome.tabs.executeScript({
      file: "./showPass.js",
    });
  }
});
