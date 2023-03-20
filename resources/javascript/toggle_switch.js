//Turn off lights.
let lightSwitch = document.getElementById("button");
let body = document.body;

let lightStatus = false;
lightSwitch.style.fill = "var(--light-switch-off)"
body.style.backgroundColor = "var(--light-switch-on)"

const Http = new XMLHttpRequest();
const url='https://maker.ifttt.com/trigger/turn_off/json/with/key/gzbkuVllhZORCDIhBygAgsNoEM01k3ptM0KAdbqUAJk';
Http.open("GET", url);
Http.send();

lightSwitch.onclick = () => {
    if(lightStatus)
        {
            lightSwitch.style.fill = "var(--light-switch-off)"
            body.style.backgroundColor = "var(--light-switch-on)"
            lightStatus = false;

            const Http = new XMLHttpRequest();
            const url='https://maker.ifttt.com/trigger/turn_off/json/with/key/gzbkuVllhZORCDIhBygAgsNoEM01k3ptM0KAdbqUAJk';
            Http.open("GET", url);
            Http.send();

        }  
    else
        {
            lightSwitch.style.fill = "var(--light-switch-on)"
            body.style.backgroundColor = "var(--light-switch-off)"
            lightStatus = true;

            const Http = new XMLHttpRequest();
            const url='https://maker.ifttt.com/trigger/turn_on/json/with/key/gzbkuVllhZORCDIhBygAgsNoEM01k3ptM0KAdbqUAJk';
            Http.open("GET", url);
            Http.send();
        }
}