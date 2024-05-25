document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const apiUrl = 'https://api.api-ninjas.com/v1/cars?search=';

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.trim();
        if (searchText.length === 0) {
            searchResults.innerHTML = '';
            return;
        }
        fetchCars(searchText);
    });

    function fetchCars(searchText) {
        const searchUrl = apiUrl + searchText;
        fetch(searchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('An error occurred while fetching data from the API: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                displaySearchResults(data);
            })
            .catch(error => {
                searchResults.innerHTML = 'An error occurred: ' + error.message;
            });
    }

    function displaySearchResults(cars) {
        if (cars.length === 0) {
            searchResults.innerHTML = '<p>No cars found.</p>';
            return;
        }
        let carHtml = '';
        cars.forEach(car => {
            carHtml += `<div class="car">
                <h2>${car.make} ${car.model} (${car.year})</h2>
                <p><strong>Fuel Type:</strong> ${car.fuel_type}</p>
                <p><strong>Transmission:</strong> ${car.transmission}</p>
                <p><strong>City MPG:</strong> ${car.city_mpg}</p>
                <p><strong>Highway MPG:</strong> ${car.highway_mpg}</p>
            </div>`;
        });
        searchResults.innerHTML = carHtml;
    }
});
