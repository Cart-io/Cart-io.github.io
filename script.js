function showTime() {
	document.getElementById('time').innerHTML = new Date().toUTCString();
}
function showPlus7Time() {
    const date = new Date();

    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).formatToParts(date);

    const obj = {};
    parts.forEach(p => obj[p.type] = p.value);

    document.getElementById('plus7Time').innerHTML = `${obj.weekday}, ${obj.day} ${obj.month} ${obj.year} ${obj.hour}:${obj.minute}:${obj.second} GMT+7`;
}

showTime();
setInterval(function () {
	showTime();
	showPlus7Time();
}, 1000);
