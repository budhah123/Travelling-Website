document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    window.location.href = `hotels.html?destination=${destination}`;
});
