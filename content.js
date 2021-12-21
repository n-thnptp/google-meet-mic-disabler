console.log("content running");

chrome.runtime.onMessage.addListener(receiveMessage);

function receiveMessage(message, sender, sendResponse) {
    console.log(message);
    if (message === "start") {
        // console.log("STARTED");
        disableBtn();
    } else {
        // console.log("STOP");
        enableBtn();
    }
    
    function disableBtn() {

        document.body.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').disabled = true;
        document.body.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').disabled = true; 
        document.body.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.naeMJb > div > div > span > button').disabled = true;

    };

    function enableBtn() {

        document.body.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button').disabled = false;
        document.body.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button').disabled = false; 
        document.body.querySelector('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.naeMJb > div > div > span > button').disabled = false;

    };

}

let keysDown = {};
window.onkeydown = function(e) {
  keysDown[e.key] = true;

  if (keysDown["Control"] && keysDown["e"]) {
    //do what you want when control and a is pressed for example
    var alert = new Audio(chrome.runtime.getURL("/sounds/alert.mp3"));
    alert.play();
    keysDown = {};
  }
  else if( keysDown["Control"] && keysDown["d"] ){
    var alert = new Audio(chrome.runtime.getURL("/sounds/alert2.mp3"));
    alert.play();
    keysDown = {};
  }
  else if( keysDown["Control"] && keysDown["Alt"] && keysDown["h"] ){
    var alert = new Audio(chrome.runtime.getURL("/sounds/alert3.mp3"));
    alert.play();
    keysDown = {};
  }
  
}

window.onkeyup = function(e) {
  keysDown[e.key] = false;
}