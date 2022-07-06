var form = document.getElementById('form');
var image = document.getElementById('img');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;

  var url = `https://picsum.photos/${width}/${height}`;

  image.src = url;
});
