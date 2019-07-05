chrome.contextMenus.create({
    "title": "Download Image",
    "contexts": ["image"],
    "onclick": info => {
        downloadImage(info);
    }
});

function downloadImage(details) {
    let re = /(?:\.([^.]+))?$/;
    chrome.storage.local.get({
        downloadFolder: "",
        enablePrompt: false,
        fileNumber: 0
    }, function (settings) {
        settings.fileNumber++;
        chrome.downloads.download({
            url : details.srcUrl,
            filename : settings.downloadFolder + settings.fileNumber + "." + re.exec(details.srcUrl)[1],
            saveAs : settings.enablePrompt
        }, function (result) {
            if(result === undefined){
                alert("An error occured.  Please check your download path!")
            }
        });
        chrome.storage.local.set({'fileNumber': settings.fileNumber});
    });
}