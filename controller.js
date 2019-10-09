var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var off = document.getElementById("off");
var timeStamp = new Date();

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect", () => {
    off.disabled = true;
    alert("The fan is currently turned Off");
});

one.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    alert("The fan is currently turned 1");

    client.publish('princess/device/status', 'FAN TURNED 1: ' + timeStamp, (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

two.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    alert("The fan is currently turned 2");

    client.publish('princess/device/status', 'FAN TURNED 2: ' + timeStamp, (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

three.addEventListener('click', (prevent) => {
    prevent.preventDefault();

    off.disabled = false;
    alert("The fan is currently turned 3");

    client.publish('princess/device/status', 'FAN TURNED 3: ' + timeStamp, (err) => {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    });
})

off.addEventListener('click', () => {

    alert("The fan is currently turned Off");

    client.publish('princess/device/status', 'FAN TURNED OFF: ' + timeStamp, function (err) {
        if (err) {
            alert("Oopps! Failed to connect!")
        }
    })
});
