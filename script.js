function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    document.getElementById("hr").textContent = String(hours).padStart(2, "0");
    document.getElementById("mn").textContent = String(minutes).padStart(2, "0");
    document.getElementById("sc").textContent = String(seconds).padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time immediately
