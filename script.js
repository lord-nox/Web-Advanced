document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carForm');
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('output');
    const defaultLimit = 50;

    form.addEventListener('input', function() {
        const inputs = form.querySelectorAll('input[type="text"]'); // Get all text input fields in the form
        let isAnyFieldFilled = false; // Initialize a variable to check if any field is filled
    
        inputs.forEach(function(input) { // Iterate over each text input field
            if (input.value.trim() !== '') { // Check if the field is not empty or just whitespace
                isAnyFieldFilled = true; // If a field is filled, set the variable to true
            }
        });
    
        submitButton.disabled = !isAnyFieldFilled; // Enable the submit button if any field is filled
    });
 
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
    
        if (validateForm()) { // Check if the form is valid
            sendDataToAPI(); // Send the form data to the API if valid
            outputDiv.scrollIntoView({ behavior: 'smooth' }); // Scroll the output div into view smoothly
        } else {
            outputDiv.innerHTML = 'Please fill in at least one field.'; // Display an error message if the form is not valid
        }
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input[type="text"]');
        let isAnyFieldFilled = false;
        inputs.forEach(function(input) {
            if (input.value.trim() !== '') {
                isAnyFieldFilled = true;
            }
        });
        return isAnyFieldFilled;
    }

    function sendDataToAPI() {
        const formData = new FormData(form);
        const searchParams = new URLSearchParams(formData);
        searchParams.set('limit', defaultLimit);
        const apiUrl = 'https://api.api-ninjas.com/v1/cars?' + searchParams;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Qg+zs2Q/O1tfiWZv3hNeTw==0Q5YlQKMJDWrTjlb'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('An error occurred while fetching data from the API: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayCarData(data);
        })
        .catch(error => {
            outputDiv.innerHTML = 'An error occurred: ' + error.message;
        });
    }

    function displayCarData(cars) {
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
        outputDiv.innerHTML = carHtml;
        updateLikedCars();
        addLikeButtonListeners();
    }
    

    // Adding async listener to the like button
    async function addLikeButtonListeners() {
        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', async function() {
                const carId = this.parentElement.getAttribute('data-id');
                await toggleFavorite(carId); // Ensure it awaits the async operation
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