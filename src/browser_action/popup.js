chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "something_completed") {
            document.getElementById("content").innerText = request.data.content;
        }
    }
);