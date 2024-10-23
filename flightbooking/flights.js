const flightsData = {
    southkorea: [
        { name: "Korean Airlines", price: "$500", quality: "4 stars", image: "/flightbooking/Flight/korean.jpg"},
        { name: "Asiana Airlines", price: "$550", quality: "5 stars", image: "/flightbooking/Flight/asiana.avif"},
        { name: "Jeju Airlines", price: "$450", quality: "3 stars", image: "/flightbooking/Flight/jeju.jpg" },
    ],
    switzerland: [
        { name: "Gatwick Airlines", price: "$600", quality: "5 stars", image: "/flightbooking/Flight/Gatwick.jpg"},
        { name: "Swiss Airlines", price: "$500", quality: "4 stars", image: "/flightbooking/Flight/swiss.jpg" },
        { name: "Angel Airlines", price: "$400", quality: "3 stars", image: "/flightbooking/Flight/angel.jpg" },
    ],
    france: [
        { name: "Air France", price: "$700", quality: "5 stars", image: "/flightbooking/Flight/airfrance.jpg"},
        { name: "EasyJet", price: "$300", quality: "3 stars", image: "/flightbooking/Flight/easyjey.jpg"},
        { name: "Ryanair", price: "$250", quality: "2 stars", image: "/flightbooking/Flight/ryanair.jpg"},
    ],
    japan: [
        { name: "Japan Airlines", price: "$800", quality: "5 stars", image: "/flightbooking/Flight/japanairlines.avif"},
        { name: "ANA", price: "$750", quality: "5 stars", image: "/flightbooking/Flight/ana.jpg"},
        { name: "Peach Aviation", price: "$350", quality: "3 stars", image: "/flightbooking/Flight/peach.jpg"},
    ],
    australia: [
        { name: "Qantas", price: "$900", quality: "5 stars", image: "/flightbooking/Flight/quantas.jpg"},
        { name: "Virgin Australia", price: "$850", quality: "4 stars", image: "/flightbooking/Flight/vigin.avif"},
        { name: "Jetstar", price: "$400", quality: "3 stars", image: "/flightbooking/Flight/jetstar.jpg"},
    ],
    brazil: [
        { name: "LATAM Airlines", price: "$300", quality: "4 stars", image: "/flightbooking/Flight/latam.avif"},
        { name: "Gol Airlines", price: "$420", quality: "3 stars", image: "/flightbooking/Flight/Gol.jpg"},
        { name: "Azul Airlines", price: "$720", quality: "4 stars", image: "/flightbooking/Flight/azul.jpg"},
    ],
    india: [
        { name: "IndiGo", price: "$700", quality: "4 stars", image: "/flightbooking/Flight/indigo.webp"},
        { name: "SpiceJet", price: "$600", quality: "3 stars", image: "/flightbooking/Flight/spicejet.jpg"},
        { name: "AirAsia India", price: "$650", quality: "4 stars", image: "/flightbooking/Flight/airasia.jpg"},
    ],
    
    nepal: [
        { name: "Everest Airlines", price: "$900", quality: "4 stars", image: "/flightbooking/Flight/everest.avif"},
        { name: "Nepal Airlines", price: "$650", quality: "3 stars", image: "/flightbooking/Flight/nepalairlines.jpg"},
        { name: "Qatar Airlines", price: "$610", quality: "4 stars", image: "/flightbooking/Flight/qatar.jpg"},
    ],
    china: [
        { name: "China Airlines", price: "$900", quality: "4 stars", image: "/flightbooking/Flight/china.jpg"},
        { name: "China Eastern Airlines", price: "$550", quality: "3 stars", image: "/flightbooking/Flight/estern.jpg"},
        { name: "China Southern Airlines", price: "$710", quality: "4 stars", image: "/flightbooking/Flight/southern.avif"},
    ],
    italy: [
        { name: "Alitalia", price: "$980", quality: "4 stars", image: "/flightbooking/Flight/china.jpg"},
        { name: "ITA Airways", price: "$850", quality: "3 stars", image: "/flightbooking/Flight/ita.jpg"},
        { name: "Air Europe", price: "$710", quality: "4 stars", image: "/flightbooking/Flight/aireurope.jpg"},
    ],
};

const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get('destination');
const flightsContainer = document.getElementById('flightsContainer');

if (flightsData[destination]) {
    flightsData[destination].forEach(flight => {
        const flightElement = document.createElement('div');
        flightElement.classList.add('flight');
        flightElement.innerHTML = `
            <img src="${flight.image}" alt="${flight.name}">
            <h3>${flight.name}</h3>
            <p>Price: ${flight.price}</p>
            <p>Quality: ${flight.quality}</p>
            <button onclick="bookFlight()">Book</button>
        `;
        flightsContainer.appendChild(flightElement);
    });
} else {
    flightsContainer.innerHTML = '<p>No flights found for the selected destination.</p>';
}

function bookFlight() {
    window.location.href = 'booking.html';
}
