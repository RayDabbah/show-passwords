chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
   file: './showPass.js'
  });
});
