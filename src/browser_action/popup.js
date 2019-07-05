chrome.storage.local.get('fileNumber', function (result) {
    if(result.fileNumber != null){
        let optionalText = "";
        let tooltipText = "";
        switch (result.fileNumber) {
            case result.fileNumber > 100:
                optionalText = "(Sparked)";
                tooltipText = "What is this? Rookie hour or something? Keep up the pace!";
                break;
            case result.fileNumber > 420:
                optionalText = "(High)";
                tooltipText = "You officially know what dank means.";
                break;
            case result.fileNumber > 500:
                optionalText = "(Stoned)";
                tooltipText = "Keep it up, you're not a beginner anymore.";
                break;
            case result.fileNumber > 1000:
                optionalText = "(Baked)";
                tooltipText = "You've reached collector status. You can differentiate between trash and dank.";
                break;
            case result.fileNumber > 2000:
                optionalText = "(Toasted)";
                tooltipText = "Keep climbing the hill. Your skills have vastly improved.";
                break;
            case result.fileNumber > 3000:
                optionalText = "(Smashed)";
                tooltipText = "A third of the way there already! You don't even associate with normies anymore.";
                break;
            case result.fileNumber > 4000:
                optionalText = "(Blazed)";
                tooltipText = "You have reached 99 percentile already.  Keep it up and you may be able to reach enlightenment!";
                break;
            case result.fileNumber > 5000:
                optionalText = "(Gone)";
                tooltipText = "Already halfway there.  You are the definition of a mad-lad.  Snoop Dogg would be proud.";
                break;
            case result.fileNumber > 10000:
                optionalText = "(Out of this Universe)";
                tooltipText = "You've reached something very few will ever achieve in their lifetime. Congrats!'.";
                break;
            default:
                optionalText = "(Sober)";
                tooltipText = "You've just started your dank memeing career. Start downloading!";
                break;
        }
        document.getElementById("total").innerHTML = "Total downloaded: " + result.fileNumber + " " + optionalText;
        document.getElementById("total").title = tooltipText;
    }
});

function save_options() {
    let folder = document.getElementById('downloadFolder').value;
    let prompt = document.getElementById('enablePrompt').checked;
    chrome.storage.local.set({
        downloadFolder: folder,
        enablePrompt: prompt
    }, function() {
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    // Use default value color = 'red' and enablePrompt = true.
    chrome.storage.local.get({
        downloadFolder: "",
        enablePrompt: false
    }, function(items) {
        document.getElementById('downloadFolder').value = items.downloadFolder;
        document.getElementById('enablePrompt').checked = items.enablePrompt;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);