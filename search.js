document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.trim();
        if (searchText.length === 0) {
            searchResults.innerHTML = '';
            return;
        }
        displaySearchResults(getSampleCarData(searchText));
    });

    function getSampleCarData(searchText) {
        // Sample car data for demonstration purposes
        const cars = [
            { id: '1', make: 'Toyota', model: 'Corolla', year: 2020, fuel_type: 'Gasoline', transmission: 'Automatic', city_mpg: 30, highway_mpg: 38 },
            { id: '2', make: 'Tesla', model: 'Model S', year: 2022, fuel_type: 'Electric', transmission: 'Automatic', city_mpg: 102, highway_mpg: 105 },
            { id: '3', make: 'Honda', model: 'Civic', year: 2019, fuel_type: 'Gasoline', transmission: 'Manual', city_mpg: 25, highway_mpg: 36 }
        ];
        return cars.filter(car => car.make.toLowerCase().includes(searchText.toLowerCase()) || 
                                  car.model.toLowerCase().includes(searchText.toLowerCase()) || 
                                  car.year.toString().includes(searchText));
    }

    function displaySearchResults(cars) {
        if (cars.length === 0) {
            searchResults.innerHTML = '<p>No cars found.</p>';
            return;
        }
        let carHtml = '';
        cars.forEach(car => {
            const { make, model, year, fuel_type, transmission, city_mpg, highway_mpg } = car;
            const cityLper100km = 235.214 / city_mpg;
            const highwayLper100km = 235.214 / highway_mpg;
            const isElectric = fuel_type.toLowerCase() === 'electric';
            const consumptionUnit = isElectric ? 'kWh/100km' : 'l/100km';
            const cityConsumption = isElectric ? (cityLper100km * 10).toFixed(2) : cityLper100km.toFixed(2);
            const highwayConsumption = isElectric ? (highwayLper100km * 10).toFixed(2) : highwayLper100km.toFixed(2);
            carHtml += `<div class="car" data-id="${car.id}">
                <h2>${make} ${model} (${year})</h2>
                <p><strong>Fuel Type:</strong> ${fuel_type}</p>
                <p><strong>Transmission:</strong> ${transmission}</p>
                <p><strong>City Consumption:</strong> ${cityConsumption} ${consumptionUnit}</p>
                <p><strong>Highway Consumption:</strong> ${highwayConsumption} ${consumptionUnit}</p>
                <button class="like-button">&#9825;</button>
            </div>`;
        });
        searchResults.innerHTML = carHtml;
        updateLikedCars();
        addLikeButtonListeners();
    }

    function addLikeButtonListeners() {
        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', async function() {
                const carId = this.parentElement.getAttribute('data-id');
                await toggleFavorite(carId);
            });
        });
    }

    async function toggleFavorite(carId) {
        let likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        if (likedCars.includes(carId)) {
            likedCars = likedCars.filter(id => id !== carId);
        } else {
            likedCars.push(carId);
        }
        localStorage.setItem('likedCars', JSON.stringify(likedCars));
        updateLikedCars();
    }

    function updateLikedCars() {
        const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        document.querySelectorAll('.car').forEach(carDiv => {
            const carId = carDiv.getAttribute('data-id');
            const likeButton = carDiv.querySelector('.like-button');
            if (likedCars.includes(carId)) {
                likeButton.innerHTML = '&#9829;';
                likeButton.classList.add('liked');
            } else {
                likeButton.innerHTML = '&#9825;';
                likeButton.classList.remove('liked');
            }
        });
    }

    // Initial call to set up listeners
    addLikeButtonListeners();
});
