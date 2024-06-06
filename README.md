# Web-Advanced
Endtask
    <h1>Auto Zoekmachine</h1>
    <p>Dit is een webapplicatie waarmee gebruikers auto's kunnen zoeken op basis van verschillende parameters, zoals merk, model en jaar. Gebruikers kunnen ook favoriete auto's toevoegen en bekijken. Tot slot hebben ze ook mogelijkheid om een zoekmachine te gebruiken die meteen resultaten weergeeft.</p>
    <h2>Inhoudsopgave</h2>
    <ul>
        <li><a href="#installatie">Installatie</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#requirementsInPortfolio">Requirements in portfolio</a></li>
        <li><a href="#gebruik">Gebruik</a></li>
        <li><a href="#bijdragen">Bijdragen</a></li>
        <li><a href="#licentie">Licentie</a></li>
    </ul>
    <h2 id="installatie">Installatie</h2>
    <p>Clone de repository naar je lokale machine:</p>
    <pre><code>git clone https://github.com/lord-nox/Web-Advanced.git</code></pre>
    <p>Navigeer naar de gekloonde map in GitHub Desktop:</p>
    <pre><code>Open in visual studio code.</code></pre>
    OF <br /><br />
    ![image](https://github.com/lord-nox/Web-Advanced/assets/163293931/1ec77ad6-3ba2-47be-b059-8dd6e4cc9570) <br />
    <p> En open het index.html-bestand in je favoriete webbrowser.</p>
    <h2 id="gebruik">Gebruik</h2>
    <p>Op de startpagina (index.html) kunnen gebruikers auto's zoeken door merk, model en jaar in te voeren. Ze kunnen ook favoriete auto's toevoegen door op de "Like" knop te klikken. De "Favorites" pagina (favorites.html) toont alle favoriete auto's die zijn toegevoegd door de gebruiker. Hier kunnen gebruikers favoriete auto's bekijken en verwijderen.</p>
    <h2 id="requirements">Requirements</h2>
    <p>Hier is een lijst van de vereiste items voor dit project:</p>
    <ul>
        <li>Elementen selecteren</li>
        <li>Elementen manipuleren</li>
        <li>Event aan een element koppelen</li>
        <li>Formulier valideren</li>
        <li>Gebruiken van een constante</li>
        <li>Gebruiken van template literals</li>
        <li>Destructuring</li>
        <li>Spread & Rest operator</li>
        <li>Iteration over een array</li>
        <li>Arrow function</li>
        <li>Callback function</li>
        <li>Promise</li>
        <li>Consumer methods</li>
        <li>Async & Await</li>
        <li>Self executing function</li>
        <li>Fetch om data op te halen</li>
        <li>JSON manipuleren en weergeven</li>
        <li>Basis CSS Animatie</li>
        <li>Gebruiken van een flexbox of CSS grid</li>
        <li>Gebruik van LocalStorage</li>
    </ul>
    <h2 id="requirementsInPortfolio">Requirements in portfolio</h2>
Elementen selecteren:
> Het selecteren van HTML-elementen met behulp van hun ID, klasse of tag-naam. Het eerste voorkomen hiervan is in **script.js**.
> 
> <img width="400" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/f502a9ab-eabb-4ada-b06b-75fb6d036bf6">
Elementen manipuleren:
> Het aanpassen van de eigenschappen, inhoud of stijl van HTML-elementen. Een element dat we manipuleren is de **submitButton** ook in het script **script.js** , hierbij houden we rekening met of er al dan niet iets werd ingevoerd.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/e75128bb-d654-4932-8201-54f821940c5c">
> <img width="500" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/f81edce5-4fed-422f-8503-a7fc675f7064c">

Event aan een element koppelen:
> Het toewijzen van een functie aan een gebeurtenis die wordt geactiveerd door een gebruikersinteractie of andere actie. Een element dat wordt ingeladen op de website waaraan een event vast hangt is **submitButton**, deze geeft de mogelijkheid om de data naar de API te sturen en gegevens terug te krijgen.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/fc940a0d-2c53-4136-8662-333c24f903ac">

Formulier valideren:
> Het valideren van formuliergegevens om te controleren of ze aan bepaalde criteria voldoen voordat ze worden verzonden naar de server. In mijn geval kijken of
> er **geldige text** in de textvakken wordt geplaatst. Het script vind je in **script.js**.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/be71a99c-c6c3-4dc6-92ee-837f5b21301e">

Gebruiken van een constante:
> Het definiëren van variabelen met het const-keyword om waarden op te slaan die gedurende de levensduur van het programma niet veranderen. Dit wordt overal in mijn project gebruikt.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/eb5c363d-1f76-46ba-a4cd-7a5186a00ac0">

Gebruiken van template literals:
> Het gebruik van backticks (`) om sjabloonreeksen te maken waarin variabelen direct kunnen worden ingevoegd zonder concatenatie. (Ik maak gebruik van template literals bij mijn **script.js**.
>
> <img width="563" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/5d5a0daa-7675-403d-99b3-9619c331e855">

Destructuring:
> In het script **search.js** maak ik gebruik van Destructuring om parameters te geven aan elke auto uit de lijst  met **cars**.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/0991ac33-85c6-4841-b9d5-ea581d58550c">

Spread & Rest operator:
> De spread operator gebruik ik bij de **favorites.js**. Het verspreiden van waarden van een array of object over individuele elementen, of het verzamelen van resterende parameters in een array.
>
> <img width="750" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/14488ae5-eed5-4673-8dcb-357a17dd2509">

Iteration over een array:
> Het doorlopen van arrays met behulp van methoden zoals forEach() om acties uit te voeren op elk element van de array.
Dit gebruik ik op meerdere plaatsen, onderstaande voorbeelden komen uit **search.js**.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/06a634df-73e5-4978-b296-076cb08d30dd">
> <img width="650" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/2f84ad19-5cbd-4e03-845a-f891c6812c00">

Arrow function:
> Het gebruik van arrow functions (=>) om korte en beknopte functiedefinities te maken, vooral bij het doorlopen van arrays of het toevoegen van event listeners. Arrow functions gebruik ik gedurende het gehele project, omdat dit een snelle manier van werken is!
>
> <img width="800" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/73c83e45-31f9-4242-b28f-88efc6389c3f">

Callback function:
> Het doorgeven van een functie als argument aan een andere functie, die wordt uitgevoerd nadat een bepaalde actie is voltooid. Onderstaand voorbeeld komt uit mijn **script.js**.
>
> <img width="750" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/98ac4173-65e0-441c-b4d4-d2ffb93ed5af">

Promise + Consumer method
> Een object dat een asynchrone bewerking vertegenwoordigt en het succes of falen van de bewerking afhandelt. -> **Promise** <br />
> **Consumer method** -> Methoden die worden gebruikt om gegevens te consumeren of te verwerken, zoals .then() en .catch() bij het werken met Promises. Ook dit voorbeeld komt uit **script.js**.
> 
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/dc4772b6-db55-476b-8313-c84c1f1f330f">

Async & await:
> Het gebruik van de **async-functie** en het await-keyword om asynchrone code op een synchrone manier te schrijven, de code gaat dus pas verder vanaf de andere voltooid is. Gebruikt in **script.js**.
> 
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/e0dee647-df4e-43d5-a61e-6a11d61eec75">

Self executing function:
> Spreekt vrijwel voor zich, dit is een functie die automatisch wordt uitgevoerd zodra deze wordt gedefinieerd.
> 
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/4fd46175-3faf-49d7-a838-b3a1f8674f57">

Fetch om data op te halen + JSON manipuleren en weergeven:
> Ik gebruik de **fetch()** (line 47) om de data van de api server af te hale en binnen te krijgen op mijn 'database / project'.
> Na dat we de gegevens hebben gaan we met de method **response.json()** (line 57) de ontvangen data omzetten naar een javaScript-object.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/6853a3d7-c019-4167-b44b-b3042fe21fc1">

Basis CSS Animatie:
> Het toepassen van eenvoudige animaties op elementen met behulp van CSS, zoals het geleidelijk laten verschijnen of verdwijnen van elementen. Ik ga te werk met een **fade-in** van 1seconde als de auto's worden ingeladen. 
>
> <img width="750" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/b067910d-4e0a-47c4-b33e-0decb7f678a9">

Gebruiken van een flexbox of CSS grid:
> Ik maar door heen het project gebruik van de flexbox, het gebruik van Flexbox of CSS Grid voor het creëren van responsieve en geavanceerde lay-outs. Ik heb voor de **nav-bar** (navigation) al meteen hiermee aan de slag gegaan in mijn **style.css**. Hieronder zal u een voorbeeld terugvinden. 
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/d2a079c7-e866-4d85-80e2-4ef44070d01f">

Gebruik van LocalStorage:
> Het gebruik van de LocalStorage API om gegevens lokaal op te slaan en op te halen, zoals in mijn geval de opgeslagen auto's + model en nog enkele andere veelzeggende eigenschappen.
>
> <img width="800" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/27187a97-f812-4d2a-806c-8ddce45f98ed">

<h2 id="bijdragen">Bijdragen</h2>
    <p>Bijdragen aan dit project zijn welkom! Hier zijn een paar manieren waarop je kunt bijdragen:</p>
    <ul>
        <li>Bugrapporten: Als je een bug tegenkomt, open dan een issue en beschrijf het probleem zo gedetailleerd mogelijk.</li>
        <li>Functieverzoeken: Heb je een idee voor een nieuwe functie? Laat het ons weten door een issue te openen en je voorstel te delen.</li>
        <li>Codebijdragen: Als je graag code wilt bijdragen, vork dan de repository, maak je wijzigingen en stuur een pull-verzoek.</li>
    </ul>
    <h2 id="licentie">Licentie</h2>
    <p>Dit project is gelicentieerd onder de MIT-licentie. Zie het <a href="LICENSE">LICENSE</a> bestand voor meer informatie.</p>
