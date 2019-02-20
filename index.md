---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

---

Welkom, Mijn naam is Jos&#233; Boon, 27 jaar oud en woon in Zaanstad. Ik heb mijn MBO ICT-diploma behaald als Applicatie Ontwikkelaar. Momenteel studeer ik Game Development aan de Hogeschool van Amsterdam (HvA) waar ik mij wil specialiseren als game programmeur.

<h2>Projecten</h2>

<section class="inner">
  {% for post in site.posts %}
   <article>
     <a href="{{ post.url | relative_url }}">
         <img src="{{ post.front_image | relative_url }}" alt="wut">
         <h4>{{ post.title }}</h4>
     </a>
   </article>
   {% endfor %}
</section>