console.log("popup running");


document.getElementById('toggleBtn').addEventListener('change', function() {

    let params = {
        active: true,
        currentWindow: true
    };

    
        if (this.checked) {

            chrome.tabs.query(params, startBtn);

            function startBtn(tabs) {
                console.log("got tabs (on start)");
                console.log(tabs);
                chrome.tabs.sendMessage(tabs[0].id, "start");
            };

        } else {

            chrome.tabs.query(params, stopBtn);

            function stopBtn(tabs) {
                console.log("got tabs (on stop)");
                console.log(tabs);
                chrome.tabs.sendMessage(tabs[0].id, "stop");
        };

    }

});


// Make it so it doesn't reset (THE SWITCH STAYS THE SAME / STAY ON OR OFF) when closing the extension tab and refresh/clean up after the tab is closed

