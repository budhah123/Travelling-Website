document.getElementById('flightBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    window.location.href = `flights.html?destination=${destination}`;
});