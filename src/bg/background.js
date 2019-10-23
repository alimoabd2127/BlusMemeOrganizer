chrome.contextMenus.create({
    "title": "Download Image",
    "contexts": ["image"],
    "onclick": info => {
        downloadImage(info);
    }
});

function downloadImage(details) {
    let re = /\.\w{3,4}($|\?)/;
    let ext = re.exec(details.srcUrl)[0]
    if (ext.endsWith("?")) {
        ext = ext.slice(1, -1);
    } else {
        ext = ext.slice(1)
    }
    chrome.storage.local.get({
        downloadFolder: "",
        enablePrompt: false,
        fileNumber: 0
    }, function (settings) {
        settings.fileNumber++;
        chrome.downloads.download({
            url: details.srcUrl,
            filename: settings.downloadFolder + settings.fileNumber + "." + ext,
            saveAs: settings.enablePrompt
        }, function (result) {
            if (result === undefined) {
                alert("An error occured.  Please check your download path!")
            }
        });
        chrome.storage.local.set({
            'fileNumber': settings.fileNumber
        });
    });
}