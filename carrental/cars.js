const carsData = {
    southkorea: [
        { name: "Ford Mustang", price: "$50/day", quality: "4 stars", image: "/carrental/carphoto/toyotarius.webp" },
        { name: "Chevrolet Camaro", price: "$60/day", quality: "5 stars", image: "/carrental/carphoto/Chev.avif" },
        { name: "Toyota Corolla", price: "$30/day", quality: "3 stars", image: "/carrental/carphoto/Toyota.jpg" },
    ],
    switzerland: [
        { name: "Honda Civic", price: "$40/day", quality: "4 stars", image: "/carrental/carphoto/civic.jpg" },
        { name: "Ford Focus", price: "$35/day", quality: "3 stars", image: "/carrental/carphoto/Focus.jpg" },
        { name: "Chevrolet Malibu", price: "$45/day", quality: "4 stars", image: "/carrental/carphoto/Malibu.jpg" },
    ],
    france: [
        { name: "Renault Clio", price: "$50/day", quality: "4 stars", image: "/carrental/carphoto/RenaultClio.webp" },
        { name: "Peugeot 208", price: "$55/day", quality: "4 stars", image: "/carrental/carphoto/puget.jpg" },
        { name: "Citroen C3", price: "$45/day", quality: "3 stars", image: "/carrental/carphoto/Citroen.webp" },
    ],
    japan: [
        { name: "Toyota Prius", price: "$60/day", quality: "5 stars", image: "/carrental/carphoto/Toyota.jpg" },
        { name: "Nissan Leaf", price: "$50/day", quality: "4 stars", image: "/carrental/carphoto/nissanleaf.webp" },
        { name: "Honda Fit", price: "$40/day", quality: "3 stars", image: "/carrental/carphoto/hondafit.webp" },
    ],
    australia: [
        { name: "Holden Commodore", price: "$55/day", quality: "4 stars", image: "/carrental/carphoto/holden.webp" },
        { name: "Ford Falcon", price: "$50/day", quality: "4 stars", image: "/carrental/carphoto/Falcon.webp" },
        { name: "Toyota Camry", price: "$45/day", quality: "3 stars", image: "/carrental/carphoto/toyotacamry.avif" },
    ],
    brazil: [
        { name: "Fiat Uno", price: "$30/day", quality: "3 stars", image: "/carrental/carphoto/UNO.jpg" },
        { name: "Volkswagen Gol", price: "$35/day", quality: "3 stars", image: "/carrental/carphoto/gol.jpg" },
        { name: "Chevrolet Onix", price: "$40/day", quality: "4 stars", image: "/carrental/carphoto/onix.webp" },
    ],
    india: [
        { name: "Maruti Suzuki Swift", price: "$25/day", quality: "3 stars", image: "/carrental/carphoto/swift.webp" },
        { name: "Hyundai i20", price: "$30/day", quality: "4 stars", image: "/carrental/carphoto/i20.jpg" },
        { name: "Tata Nexon", price: "$35/day", quality: "4 stars", image: "/carrental/carphoto/nexon.webp" },
    ],
    nepal: [
        { name: "Honda Civic", price: "$30/day", quality: "4 stars", image: "/carrental/carphoto/civic.jpg" },
        { name: "Toyota Camry", price: "$35/day", quality: "3 stars", image: "/carrental/carphoto/Camry.jpg" },
        { name: "Nissan Sentra", price: "$40/day", quality: "4 stars", image: "/carrental/carphoto/sentra.avif" },
    ],
    china: [
        { name: "BYD", price: "$70/day", quality: "4 stars", image: "/carrental/carphoto/byd.jpg" },
        { name: "Audi", price: "$80/day", quality: "3 stars", image: "/carrental/carphoto/audi.jpg" },
        { name: "BMW", price: "$90/day", quality: "4 stars", image: "/carrental/carphoto/bmw.jpg" },
    ],
    italy: [
        { name: "Fiat", price: "$70/day", quality: "4 stars", image: "/carrental/carphoto/fiat.jpg" },
        { name: "Ferrari", price: "$80/day", quality: "3 stars", image: "/carrental/carphoto/ferrari.avif" },
        { name: "Porche", price: "$90/day", quality: "4 stars", image: "/carrental/carphoto/porche.jpg" },
    ],
};

const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get('destination');
const carsContainer = document.getElementById('carsContainer');

if (carsData[destination]) {
    carsData[destination].forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: ${car.price}</p>
            <p>Quality: ${car.quality}</p>
            <button onclick="bookCar()">Book</button>
        `;
        carsContainer.appendChild(carElement);
    });
} else {
    carsContainer.innerHTML = '<p>No cars found for the selected destination.</p>';
}

function bookCar() {
    window.location.href = 'booking.html';
}