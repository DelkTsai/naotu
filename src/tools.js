var naotu = document.querySelector("#naotu");
var data = [
  {
    name: 'a',
    child : [
      {name: 'b'},
      {name: 'c'}
    ]
  }
];

function createIdea(info) {
  var idea = document.createElement('span');
  idea.innerHTML = info;
  console.log(idea);
  return idea;
}

function createLine() {

}

naotu.appendChild(createIdea('info'));
