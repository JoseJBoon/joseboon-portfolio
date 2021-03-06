---
layout: post
title: Neon Trail
date: 2021-02-14 14:00:00 +0100
front_image: /assets/images/NeonTrail/UI_PlayerSelect_countdown.png
image_library: /images/NeonTrail/
hide: false
---

Neon Trail is een multiplayer game, gebaseerd op 'Achtung, die Kurve!', van 2 t/m 4 spelers en is gemaakt voor de Ton Ton club als school project. Elke speler bestuurt een schip waarmee je over de tafel beweegt. Het schip beweegt altijd naar voren en laat een spoor achter. De speler kan doormiddel van een custom controller, gemaakt met Arduino, het schip naar links of rechts draaien. Je bent af als je tegen een spoor, een ander speler of de grenzen van het spel botst. De speler die als laatst overblijft wint de ronde en krijgt een punt. De eerste speler met 3 punten wint het spel.

Dit spel moest speelbaar zijn binnen in één van de Ton Ton club locaties waar de spelers aan tafel zitten te wachten voor het eten. Het spel moest een arcade en nostalgisch gevoel opleven bij de speler. De controllers waren enkel een draaischijf die je ook nog is kon indrukken. Het indrukken van de draaischijf zorgt ervoor dat het schip die de speler bestuurt gaat springen.

### Het spel

De webgl versie van dit spel is speelbaar met het toestenboord.

|--
| Player Controls |
|:------|
| Acties | Blauw | Rood | Paars | Groen |
| Draaien | A/D | F/H | J/L | Links/Rechts |
| Springen | W | T | I | Boven |

| Extra Controls |
|:--|
| Object plaatsen | Linkermuisknop |
| Object Verwijderen | Rechtermuisknop |
| Achtergrond Veranderen | Tab |

[Klik hier op de webgl versie te spelen]({{ 'assets/unity/NeonTrail/index.html' | relative_url }})

<section>
    <h3>Eerste playtest</h3>
    <video autoplay="false" controls width="360">
        <source src="{{ 'assets/videos/NeonTrail-Demo-v1.webm' | relative_url }}" type="video/webm">
        Sorry, your browser doesn't support embedded videos.
    </video>
</section>
