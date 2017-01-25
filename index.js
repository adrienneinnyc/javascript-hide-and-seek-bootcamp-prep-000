function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  var target = document.getElementById("nested").getElementsByClassName("target");
  //for(var i = 0; i < target.length; i++) {
  //  return target[i];
  //}
  return target[0];
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll("ul.ranked-list li");
  for(var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML, 10) + n).toString();
  }
}


function deepestChild() {
  var element = document.getElementById('grand-node'); 
  var next = null; 

  while(element.children[0] != null) {
    next = element.children[0]; 
    element = next; 
  }
  return element; 
}

