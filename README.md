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
> De spread operator gebruik ik bij de **admin.js**. Hier kan ik makkelijk het gevraagd aantal kolommen maken d.m.v. een fucntie en hoef ik deze niet altijd apart aan te maken.
>
> <img width="386" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/0450dcfb-2836-4ffe-8e4b-d4acb3403ede">

Iteration over een array:
> Het doorlopen van arrays met behulp van methoden zoals forEach() om acties uit te voeren op elk element van de array.
Dit gebruik ik op meerdere plaatsen, onderstaande voorbeelden komen uit **search.js**.
>
> <img width="700" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/06a634df-73e5-4978-b296-076cb08d30dd">
> <img width="650" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/2f84ad19-5cbd-4e03-845a-f891c6812c00">

Arrow function:
> Het gebruik van arrow functions (=>) om korte en beknopte functiedefinities te maken, vooral bij het doorlopen van arrays of het toevoegen van event listeners. Arrow functions gebruik ik gedurende het gehele project, omdat dit een snelle manier van werken is!
>
> <img width="500" alt="image" src="https://github.com/lord-nox/Web-Advanced/assets/163293931/535353dc-2ee5-4b9e-8a6e-30309eb521ee">

Callback function:
> De callback function wordt benut bij de **api.js**. Omdat we elke keer een nieuwe stad kunnen opgeven en deze willen zien.
>
> <img width="320" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/b307b254-4137-429d-9290-809932e9d591">

Promise + Consumer method + Async & await:
> In de functie **getWeatherData()** maak ik zowel gebruik van een **promise**, die de gevraagde data ophaald.
> 
> Ook maak ik gebruik van **consumer methods**, **then()** dit wordt uitgevoerd van zodra de data beschikbaar is.
> 
> Ten slotte maak ik ook nog gebruik van **async & await**, de code gaat dus pas verder vanaf de promise voltooid is.
>
> <img width="575" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/7d30caad-ad05-446c-a6fa-2bb73fb5945f">

Self executing function:
> Vanaf dat men op de pagina **admin.html** komt wordt het script **localStorageToArray()** ingeladen. Dit maakt van de opgeslagen localStorage data een array met verschillende elementen.
> 
> <img width="400" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/7a522138-4752-45a6-9fc2-562988dc4b18">

> <img width="486" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/962b3ef4-23a6-4942-bed2-b1ccdb673b57">


Fetch om data op te halen + JSON manipuleren en weergeven:
> Ik gebruik de **fetch()** om de data van de api server af te hale en binnen te krijgen op mijn 'database / project'.
> Na dat we de gegevens hebben gaan we met de method **response.json()** de ontvangen data omzetten naar een javaScript-object.
>
> <img width="584" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/0a490263-97c4-4234-8741-3b5b512b7a78">

Basis CSS Animatie:
> Op 1 plek staat er een zeer basic css animatie, omdat ik dit niet zeer belangrijk vind op een web-pagina. Je kan deze vinden in de file **signUp.css** onder de class **#Login-card + slideIn**.
>
> <img width="241" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/411152bf-c683-42ca-bdec-67cc69a6ab13">

Gebruiken van een flexbox of CSS grid:
> Ik maar door heen het project gebruik van de flexbox, een voorbeeld hiervan vind je in de **footer** in de file **index.css**.
>
> <img width="295" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/4237008f-108a-4a12-8b8c-a450bf975b36">

Gebruik van LocalStorage:
> Als laatste requirement maak ik gebruik van localStorage om mijn inlog gegevens te bewaren en een email aan een wachtwoord te linken. Dit vind je in de file **signUp.js**.
>
> <img width="376" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/4499cecf-a055-40c1-bbd4-0c965da1a12f">

> <img width="409" alt="image" src="https://github.com/XanderWTRS/Web-Advanced-Portfolio/assets/137180731/e6fa2bc7-7f9d-474c-9802-54f03f6821b4">
<h2 id="bijdragen">Bijdragen</h2>
    <p>Bijdragen aan dit project zijn welkom! Hier zijn een paar manieren waarop je kunt bijdragen:</p>
    <ul>
        <li>Bugrapporten: Als je een bug tegenkomt, open dan een issue en beschrijf het probleem zo gedetailleerd mogelijk.</li>
        <li>Functieverzoeken: Heb je een idee voor een nieuwe functie? Laat het ons weten door een issue te openen en je voorstel te delen.</li>
        <li>Codebijdragen: Als je graag code wilt bijdragen, vork dan de repository, maak je wijzigingen en stuur een pull-verzoek.</li>
    </ul>
    <h2 id="licentie">Licentie</h2>
    <p>Dit project is gelicentieerd onder de MIT-licentie. Zie het <a href="LICENSE">LICENSE</a> bestand voor meer informatie.</p>
