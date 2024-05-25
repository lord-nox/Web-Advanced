document.addEventListener('DOMContentLoaded', function() {
    const favoritesOutput = document.getElementById('favoritesOutput');

    // Functie om favoriete auto's op te halen en weer te geven
    async function fetchFavoriteCars() {
        let likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        
        try {
            if (likedCars.length === 0) {
                favoritesOutput.innerHTML = '<p>No favorite cars added yet.</p>';
                return;
            }

            const apiUrl = 'https://api.api-ninjas.com/v1/cars?id=' + likedCars.join(',');
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'Qg+zs2Q/O1tfiWZv3hNeTw==0Q5YlQKMJDWrTjlb'
                }
            });

            if (!response.ok) {
                throw new Error('An error occurred while fetching data from the API: ' + response.statusText);
            }

            const data = await response.json();
            displayFavoriteCars(data);
        } catch (error) {
            favoritesOutput.innerHTML = 'An error occurred: ' + error.message;
        }
    }

    // Functie om favoriete auto's weer te geven
    function displayFavoriteCars(cars) {
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

    // Functie om de 'like' knoppen toe te voegen aan favoriete auto's
    function addLikeButtonListeners() {
        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', function() {
                const carId = this.parentElement.getAttribute('data-id');
                toggleFavorite(carId);
            });
        });
    }

    // Functie om een auto aan favorieten toe te voegen of te verwijderen
    function toggleFavorite(carId) {
        let likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
        if (likedCars.includes(carId)) {
            likedCars = likedCars.filter(id => id !== carId);
        } else {
            likedCars.push(carId);
        }
        localStorage.setItem('likedCars', JSON.stringify(likedCars));
        fetchFavoriteCars(); // Opnieuw laden van favorieten na wijziging
    }

    // Functie om de 'like' knoppen bij te werken op basis van opgeslagen favorieten
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

    // Initieel ophalen en weergeven van favoriete auto's
    fetchFavoriteCars();
});
