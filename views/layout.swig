{% import 'macros/image-rounded.swig' as imgRound %}
<!DOCTYPE html>
<html>
  {% include 'head.swig'  %}
<body>
  {% include 'footer.swig' %}
  {{ imgRound.input('img.png','nonsense','id','55','33') }}
</body>
</html>
