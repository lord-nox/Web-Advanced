document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carForm');
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('output');

    // Event listener voor wijzigingen in de invoervelden
    form.addEventListener('input', function() {
        // Controleren of minstens één veld is ingevuld
        const inputs = form.querySelectorAll('input[type="text"]');
        let isAnyFieldFilled = false;
        inputs.forEach(function(input) {
            if (input.value.trim() !== '') {
                isAnyFieldFilled = true;
            }
        });

        // Knop inschakelen/uitschakelen op basis van de status van de invoervelden
        submitButton.disabled = !isAnyFieldFilled;
    });

    // Event listener voor het formulierinzending
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Standaardformuliergedrag voorkomen

        // De invoer valideren voordat de gegevens worden verzonden
        if (validateForm()) {
            // Als het formulier geldig is, stuur de gegevens naar de API
            sendDataToAPI();

            // Scroll naar de output-div nadat de gegevens zijn geladen
            outputDiv.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Als het formulier niet geldig is, toon een foutmelding
            outputDiv.innerHTML = 'Please fill in all fields.'; // Bericht aanpassen indien nodig
        }
    });

    // Functie om het formulier in te vullen
    function validateForm() {
        const inputs = form.querySelectorAll('input[type="text"]');
        let isValid = true;
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });
        return isValid;
    }

    // Functie om de formuliergegevens naar de API te sturen
    function sendDataToAPI() {
        // De invoer ophalen uit het formulier
        const formData = new FormData(form);
        const searchParams = new URLSearchParams(formData);

        // De API-URL construeren met de ingevoerde parameters
        const apiUrl = 'https://api.api-ninjas.com/v1/cars?' + searchParams;

        // Een HTTP GET-verzoek naar de API maken
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Qg+zs2Q/O1tfiWZv3hNeTw==0Q5YlQKMJDWrTjlb' // Vervang 'YOUR_API_KEY' door je werkelijke API-sleutel
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('An error occurred while fetching data from the API: ' + response.statusText);
            }
            return response.json(); // JSON-gegevens uit de respons parseren
        })
        .then(data => {
            // De ontvangen gegevens verwerken en weergeven op de pagina
            displayCarData(data);
        })
        .catch(error => {
            // Een foutmelding weergeven als er een fout optreedt bij het ophalen van gegevens
            outputDiv.innerHTML = 'An error occurred: ' + error.message;
        });
    }

    // Functie om de ontvangen autogegevens op de pagina weer te geven
    function displayCarData(cars) {
        // Een lege tekenreeks initialiseren om de HTML-structuur van de gegevens voor te stellen
        let carHtml = '';

        // Door elke auto-object in de array loopen en HTML maken voor elke auto
        cars.forEach(car => {
            // MPG converteren naar l/100km
            const cityMpg = car.city_mpg;
            const highwayMpg = car.highway_mpg;
            const cityLper100km = 235.214 / cityMpg; // Formule voor conversie van MPG naar l/100km
            const highwayLper100km = 235.214 / highwayMpg;

            carHtml += '<div class="car">';
            carHtml += '<h2>' + car.make + ' ' + car.model + ' (' + car.year + ')</h2>';
            carHtml += '<p><strong>Fuel Type:</strong> ' + car.fuel_type + '</p>';
            carHtml += '<p><strong>Transmission:</strong> ' + car.transmission + '</p>';
            carHtml += '<p><strong>City Consumption:</strong> ' + cityLper100km.toFixed(2) + ' l/100km</p>'; // Afgerond op 2 decimalen
            carHtml += '<p><strong>Highway Consumption:</strong> ' + highwayLper100km.toFixed(2) + ' l/100km</p>'; // Afgerond op 2 decimalen
            carHtml += '</div>';
        });

        // De autogegevens weergeven in de output-div op de pagina
        outputDiv.innerHTML = carHtml;
    }
});
