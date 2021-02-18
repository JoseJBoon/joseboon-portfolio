---
---
  <article class="container">
  {%- assign visible_posts = site.posts | where: "hide", false -%}
  {% for post in visible_posts %}
    <section class="item project">
      <a href="{{ post.url | relative_url }}">
        <img src="{{ post.front_image | relative_url }}" alt="wut">
        <section class="overlay {% cycle 'blue', 'red', 'purple' %}">
          <h3>{{ post.title }}</h3>
        </section>
      </a>
    </section>
  {% endfor %}
  </article>
  