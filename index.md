---
---

Welkom, mijn naam is Jos&#233; Boon, 29 jaar oud en woon in Zaanstad. Ik heb mijn MBO ICT-diploma behaald als Applicatie Ontwikkelaar en studeer momenteel Game Development aan de Hogeschool van Amsterdam (HVA) voor het specialiseren als game programmeur.
<h2>Projecten</h2>

<article class="inner">
 {% assign visible_posts = site.posts | where: "hide", false %}
 {% for post in visible_posts %}
  <section>
    <a href="{{ post.url | relative_url }}">
     <h3>{{ post.title }}</h3>
     <img src="{{ post.front_image | relative_url }}" alt="wut">
    </a>
  </section>
 {% endfor %}
</article>