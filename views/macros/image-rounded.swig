{% macro input(src, htmlClass, htmlId, width, height) %}
  <img src='{{src}}' class='{{htmlClass}}' id='{{htmlId}}' width='{{width}}' height='{{height}}' />
{% endmacro %}

{{ input("text", "fname", "fname", "First Name", fname.value, fname.errors) }}