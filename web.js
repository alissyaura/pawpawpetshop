function showAlert() {
    alert("Berhasil Ditambahkan ke 🛒");
}
function updatetime() {
    let now = new Date();
    document.getElementById("jakarta").innerText = now.toLocaleTimeString("id-ID", {timeZone:"Asia/Jakarta"});  
}
    setInterval(updatetime, 1000);
    updatetime();
function toggledarkmode() {
    document.body.classList.toggle('dark-mode');
}