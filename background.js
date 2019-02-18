chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
    file: "./showPass.js"
  });
});
chrome.commands.onCommand.addListener(function(command) {
  if (command === "togglePasswords") {
    chrome.tabs.executeScript({
      file: "./showPass.js"
    });
  }
});
