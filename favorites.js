document.addEventListener('DOMContentLoaded', function() {
    const favoritesOutput = document.getElementById('favoritesOutput');

    // Function to fetch favorite cars from local storage and display them
    function fetchFavoriteCars() {
        let likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        console.log('Liked Cars on Favorites Page:', likedCars); // Debugging log
        
        try {
            if (likedCars.length === 0) {
                favoritesOutput.innerHTML = '<p>No favorite cars added yet.</p>';
                return;
            }

            const cars = JSON.parse(localStorage.getItem('cars')) || [];
            const favoriteCars = cars.filter(car => likedCars.includes(car.id));
            displayFavoriteCars(favoriteCars);
        } catch (error) {
            favoritesOutput.innerHTML = 'An error occurred: ' + error.message;
        }
    }

    // Function to display favorite cars
    function displayFavoriteCars(cars) {
        if (cars.length === 0) {
            favoritesOutput.innerHTML = '<p>No favorite cars added yet.</p>';
            return;
        }

        let carHtml = '';
        cars.forEach(car => {
            const cityMpg = car.city_mpg;
            const highwayMpg = car.highway_mpg;
            const cityLper100km = 235.214 / cityMpg;
            const highwayLper100km = 235.214 / highwayMpg;
            const isElectric = car.fuel_type.toLowerCase() === 'electric';
            let consumptionUnit = 'l/100km';
            if (isElectric) {
                consumptionUnit = 'kWh/100km';
            }
            const cityConsumption = isElectric ? (cityLper100km * 10).toFixed(2) : cityLper100km.toFixed(2);
            const highwayConsumption = isElectric ? (highwayLper100km * 10).toFixed(2) : highwayLper100km.toFixed(2);
            carHtml += `<div class="car" data-id="${car.id}">
                <h2>${car.make} ${car.model} (${car.year})</h2>
                <p><strong>Fuel Type:</strong> ${car.fuel_type}</p>
                <p><strong>Transmission:</strong> ${car.transmission}</p>
                <p><strong>City Consumption:</strong> ${cityConsumption} ${consumptionUnit}</p>
                <p><strong>Highway Consumption:</strong> ${highwayConsumption} ${consumptionUnit}</p>
                <button class="like-button">&#9825;</button>
            </div>`;
        });
        favoritesOutput.innerHTML = carHtml;
        updateLikedCars();
        addLikeButtonListeners();
    }

    // Function to add event listeners to like buttons
    function addLikeButtonListeners() {
        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', function() {
                const carId = this.parentElement.getAttribute('data-id');
                toggleFavorite(carId);
            });
        });
    }

    // Function to toggle favorite cars
    function toggleFavorite(carId) {
        let likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        if (likedCars.includes(carId)) {
            likedCars = likedCars.filter(id => id !== carId);
        } else {
            likedCars.push(carId);
        }
        localStorage.setItem('likedCars', JSON.stringify(likedCars));
        console.log('Liked Cars:', likedCars); // Debugging log
        fetchFavoriteCars(); // Reload favorites after modification
    }

    // Function to update like buttons based on stored favorites
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

    // Initial retrieval and display of favorite cars
    fetchFavoriteCars();
});
