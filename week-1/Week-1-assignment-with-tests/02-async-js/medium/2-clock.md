Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function padWithZero(num) {
    return num < 10 ? '0' + num : num;
}

function formatTime24(hours, minutes, seconds) {
    return `${padWithZero(hours)}:${padWithZero(minutes)}:${padWithZero(seconds)}`;
}

function formatTime12(hours, minutes, seconds) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${padWithZero(formattedHours)}:${padWithZero(minutes)}:${padWithZero(seconds)} ${period}`;
}

function displayClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time24 = formatTime24(hours, minutes, seconds);
    const time12 = formatTime12(hours, minutes, seconds);

    console.log(`24-Hour Format: ${time24}`);
    console.log(`12-Hour Format: ${time12}`);

    setTimeout(displayClock, 1000);
}

displayClock();