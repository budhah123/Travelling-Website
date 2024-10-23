document.getElementById('carRentalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    window.location.href = `cars.html?destination=${destination}`;
});