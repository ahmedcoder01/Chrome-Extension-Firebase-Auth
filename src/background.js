


// HANDLING FIRST TIME AUTH CHECK
chrome.runtime.onStartup.addListener(startupHandler);
let websiteLoading = false;

function startupHandler() {
  console.log('chrome have started');

  chrome.tabs.onUpdated.addListener(updateHandler);

  function updateHandler(id, changeInfo) {
    if (
      changeInfo?.url &&
      !changeInfo.url.includes('chrome://') &&
      !websiteLoading
    ) {
      websiteLoading = true;
    }

    if (websiteLoading && changeInfo.status == 'complete') {
      console.log(changeInfo);

      chrome.tabs.onUpdated.removeListener(updateHandler);

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.insertCSS({file:"./sidebar.css"});
        chrome.tabs.executeScript(tabs[0].id, {
          file: './sidebar.js',
        });
      });
    }
  }
}

