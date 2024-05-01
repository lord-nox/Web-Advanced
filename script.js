// Model van de auto
var model = 'camry';

// AJAX-verzoek om auto-informatie op te halen
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    headers: { 'X-Api-Key': 'Qg+zs2Q/O1tfiWZv3hNeTw==0Q5YlQKMJDWrTjlb' },
    contentType: 'application/json',
    success: function(result) {
        // Verwerk de ontvangen gegevens en bouw de tabel op
        toonAutoTabel(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Fout: ', jqXHR.responseText);
    }
});

// Functie om de auto-informatie weer te geven in een tabel
function toonAutoTabel(autoData) {
    var autoTabelHTML = '<table>';
    autoTabelHTML += '<tr><th>Merk</th><th>Model</th><th>Bouwjaar</th></tr>';
    
    autoData.forEach(function(auto) {
        autoTabelHTML += '<tr>';
        autoTabelHTML += '<td>' + auto.brand + '</td>';
        autoTabelHTML += '<td>' + auto.model + '</td>';
        autoTabelHTML += '<td>' + auto.year + '</td>';
        autoTabelHTML += '</tr>';
    });

    autoTabelHTML += '</table>';

    // Voeg de tabel toe aan de #auto-tabel div
    $('#auto-tabel').html(autoTabelHTML);
}
