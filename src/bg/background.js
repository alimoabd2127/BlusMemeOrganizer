// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.contextMenus.create({
    "title": "Download Image",
    "contexts": ["image"],
    "onclick": info => {
        sendDetailsToPopup(info);
        downloadImage(info);
    }
});

function sendDetailsToPopup(details) {
    chrome.runtime.sendMessage({
        msg: "something_completed",
        data: {
            subject: "Loading",
            content: details.srcUrl
        }
    });
}

function downloadImage(details) {
    chrome.downloads.download({
        url : details.srcUrl
    })
}