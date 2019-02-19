---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

---

Welkom! Mijn naam is José Boon en ik 

{% for post in site.posts %}
<a href="{{ post.url | relative_url }}">{{ post.title }}</a> <br />
{% endfor %}