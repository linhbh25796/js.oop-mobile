let mobile = function (name, battery, inbox, outbox, power) {
    this.name = name;
    this.battery = battery;
    this.inbox = inbox;
    this.outbox = outbox;
    this.power = power;

    this.onOff = function () {
        let powerBtnMobile = document.getElementById('powerBtn' + this.name);
        if (this.power == "on") {
            this.power = "off";
        } else {
            this.power = "on";
        }
        if (this.power == "on") {
            powerBtnMobile.innerHTML = "Off";
        } else {
            powerBtnMobile.innerHTML = "On";
        }
    };


    let screenMobile = document.getElementById("screen" + this.name);
    this.checkStatus = function () {
        if (this.power == "on") {
            screenMobile.value = "Phone is ON. Battery: " + this.battery + "%";
        } else {
            screenMobile.value = "Phone is OFF";
        }
    };

    this.typingMessage = function () {
        if (this.power == "on") {
            if (this.battery > 0) {
                screenMobile.value = "";
                screenMobile.setAttribute("placeholder", "Texting");
                screenMobile.removeAttribute("readonly");
                this.battery -= 1;
            } else {
                alert("Battery is over.");
            }
        } else {
            alert("Phone is OFF!!!!!");
        }
    };

    this.back = function () {
        screenMobile.value = "";
        screenMobile.setAttribute("placeholder", "Screen");
        screenMobile.setAttribute("readony", "true");
    };
    this.sendMessage = function () {
        if (this.power == "on") {
            if (this.battery > 0) {
                if (screenMobile.value != "") {
                    this.outbox.push(screenMobile.value);
                    screenMobile.value = "";
                    this.battery -= 1;
                }
            } else {
                alert("Phone is OFF")
            }
        } else {
            alert("Phone is Off. Turn on!!!")
        }
    };
    this.checkOutbox = function () {
        if (this.power == "on") {
            if (this.battery > 0) {
                screenMobile.value = "";
                screenMobile.setAttribute("placeholder", "Inbox");
                screenMobile.setAttribute("readonly", "true");
                for (let i = 0; i < this.outbox.length; i++) {
                    screenMobile.value += this.outbox[i] +"\n" ;
                }
                this.battery -= 1;
            } else {
                alert("Battery is over.");
            }
        } else {
            alert("Phone is OFF!!!!!");
        }
    };

    this.checkInbox = function () {
        if (this.power == "on") {
            if (this.battery > 0) {
                screenMobile.value = "";
                screenMobile.setAttribute("placeholder", "Inbox");
                screenMobile.setAttribute("readonly", "true");
                for (let i = 0; i < this.inbox.length; i++) {
                    screenMobile.value += this.inbox[i] +"\n";
                }
                this.battery -= 1;
            } else {
                alert("Battery is over.");
            }
        } else {
            alert("Phone is OFF!!!!!");
        }
    };


};
let nokiaName = "Nokia";
let batteryNokia = 10000;
let inboxNokia = [];
let outboxNokia = [];
let powerNokia = "On";
let nokia = new mobile(nokiaName, batteryNokia, inboxNokia, outboxNokia, powerNokia);
let iphoneName = "Iphone";
let batteryIphone = 10000;
let inboxIphone = [];
let outboxIphone = [];
let powerIphone = "On";
let iphone = new mobile(iphoneName, batteryIphone, inboxIphone, outboxIphone, powerIphone);


function onOff(mobile) {
    mobile.onOff();
}

function checkStatus(mobile) {
    mobile.checkStatus();
}

function typingMessage(mobile) {
    mobile.typingMessage();
}

function back(mobile) {
    mobile.back();
}

function sendMassage(mobile) {
    mobile.sendMessage();
    switch (mobile) {
        case nokia:
            iphone.inbox = outboxNokia;
            break;
        case iphone:
            nokia.inbox = iphone.outbox;
            break;
    }
}

function checkOutbox(mobile) {
    mobile.checkOutbox();
}

function checkInbox(mobile) {
    mobile.checkInbox();
}
