
var add = document.getElementById('addElem'),
    list = document.getElementById('list');

add.addEventListener('click', function(e) {
  var currentElemts = list.getElementsByTagName('li');
  var currentElemtsLength = currentElemts.length -1;
 
  var element = document.createElement('li');
  element.innerHTML = 'item ' + (currentElemtsLength + 1) ;
  list.appendChild(element);
  console.log(e)
})








  