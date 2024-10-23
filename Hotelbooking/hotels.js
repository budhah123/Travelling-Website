const hotelsData = {
    southkorea: [
        { name: "Hotel Seoul", price: "$200/night", quality: "4 stars", image: "/Hotelbooking/Hotel/freepik-export-20240802180842leEI.jpeg" },
        { name: "Lotte Hotel", price: "$300/night", quality: "5 stars", image: "/Hotelbooking/Hotel/lotte.jpg" },
        { name: "Haeundae Hotel", price: "$50/night", quality: "2 stars", image: "/Hotelbooking/Hotel/Haeundae.webp" },
    ],
    china: [
        { name: "Hotel Beijing", price: "$250/night", quality: "5 stars", image: "/Hotelbooking/Hotel/bejing.webp" },
        { name: "Hotel Shanghai", price: "$100/night", quality: "3 stars", image: "/Hotelbooking/Hotel/Shanghai.webp" },
        { name: "Hotel Guangzhou", price: "$150/night", quality: "4 stars", image: "/Hotelbooking/Hotel/Guangzhou.jpg" },
    ],
    nepal: [
        { name: "Hotel Kathmandu", price: "$400/night", quality: "5 stars", image: "/Hotelbooking/Hotel/kathmandu.jpg" },
        { name: "Hotel Pokhara", price: "$350/night", quality: "5 stars", image: "/Hotelbooking/Hotel/pokhara.webp" },
        { name: "Hotel Everest", price: "$80/night", quality: "3 stars", image: "/Hotelbooking/Hotel/everest.jpg" },
    ],
    japan: [
        { name: "Park Hyatt Tokyo", price: "$500/night", quality: "5 stars", image: "/Hotelbooking/Hotel/hyatt.jpg" },
        { name: "Kyoto Hotel", price: "$30/night", quality: "1 star", image: "/Hotelbooking/Hotel/kyoto.jpg" },
        { name: "Hilton Tokyo", price: "$200/night", quality: "4 stars", image: "/Hotelbooking/Hotel/Hilton.webp" },
    ],
    australia: [
        { name: "Sydney Harbour Marriott", price: "$300/night", quality: "5 stars", image: "/Hotelbooking/Hotel/sydney.webp" },
        { name: "Travelodge", price: "$100/night", quality: "3 stars", image: "/Hotelbooking/Hotel/travelodge.jpg" },
        { name: "Quest Hotel", price: "$150/night", quality: "4 stars", image: "/Hotelbooking/Hotel/hotelquest.webp" },
    ],
    switzerland: [
        { name: "Hotel Zurich", price: "$400/night", quality: "5 stars", image: "/Hotelbooking/Hotel/zurich.webp" },
        { name: "Hotel Geneva", price: "$80/night", quality: "3 stars", image: "/Hotelbooking/Hotel/Geneva.webp" },
        { name: "Hotel Lausanne", price: "$200/night", quality: "4 stars", image: "/Hotelbooking/Hotel/Lausanne.jpg" },
    ],
    india: [
        { name: "Taj Mahal Palace", price: "$300/night", quality: "5 stars", image: "/Hotelbooking/Hotel/Taj.jpg" },
        { name: "Oberoi", price: "$250/night", quality: "5 stars", image: "/Hotelbooking/Hotel/oberoi.jpg" },
        { name: "Holiday Inn", price: "$100/night", quality: "3 stars", image: "/Hotelbooking/Hotel/holidayinn.jpg" },
    ],
    france: [
        { name: "Hotel Paris", price: "$315/night", quality: "5 stars", image: "/Hotelbooking/Hotel/Paris.jpg" },
        { name: "Hotel Lyon", price: "$350/night", quality: "5 stars", image: "/Hotelbooking/Hotel/lyon.jpeg" },
        { name: "Hotel Marseille", price: "$150/night", quality: "3 stars", image: "/Hotelbooking/Hotel/Marseille.jpg" },
    ], 
    italy: [
        { name: "Hotel Rome", price: "$400/night", quality: "5 stars", image: "/Hotelbooking/Hotel/rome.jpg" },
        { name: "Hotel Milan", price: "$350/night", quality: "5 stars", image: "/Hotelbooking/Hotel/milan.webp" },
        { name: "Hotel Venice", price: "$220/night", quality: "3 stars", image: "/Hotelbooking/Hotel/venice.jpg" },
    ], 
    brazil: [
        { name: "Hotel Rio", price: "$320/night", quality: "5 stars", image: "/Hotelbooking/Hotel/rio.jpg" },
        { name: "Hotel Sao Paulo", price: "$250/night", quality: "5 stars", image: "/Hotelbooking/Hotel/sanpaulo.webp" },
        { name: "Hotel Brasilia", price: "$120/night", quality: "3 stars", image: "/Hotelbooking/Hotel/brasilia.jpg" },
    ],
};

const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get('destination');
const hotelsContainer = document.getElementById('hotelsContainer');

if (hotelsData[destination]) {
    hotelsData[destination].forEach(hotel => {
        const hotelElement = document.createElement('div');
        hotelElement.classList.add('hotel');
        hotelElement.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <h3>${hotel.name}</h3>
            <p>Price: ${hotel.price}</p>
            <p>Quality: ${hotel.quality}</p>
            <button onclick="bookHotel()">Book</button>
        `;
        hotelsContainer.appendChild(hotelElement);
    });
} else {
    hotelsContainer.innerHTML = '<p>No hotels found for the selected destination.</p>';
}

function bookHotel() {
    window.location.href = 'booking.html';
}