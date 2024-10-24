document.getElementById('donasiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    
    alert(`Terima kasih ${nama}, Anda telah berdonasi sebesar Rp ${jumlah}`);
});