var naotu = document.querySelector("#naotu");
var data = [{
    name: 'asdfsdfsaaa',
    child: [{
            name: 'bbbb',
            child: [{
                name: 'bbb-1111',
                child: []
            }]
        },
        {
            name: 'cccc',
            child: []
        }
    ]
}];

function extData(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].name) {
      data[i].show = false;
      data[i].id = Math.random();
    }
    if (data[i].child) {
      extData(data[i].child);
    }
  }
}

extData(data);

function init(data) {
    var span = createIdea(data);
    naotu.appendChild(span);
}

function createIdea(data) {
    var idea = document.createElement('span');
    idea.innerHTML = data.name;
    idea.setAttribute("data", JSON.stringify(data));

    idea.addEventListener('click', function() {
        var child = JSON.parse(idea.getAttribute('data')).child;

        for (var i = 0; i < child.length; i++) {
            if (child[i].name) {
                var si = createIdea(child[i]);
                naotu.appendChild(si);
            }
        }
    });
    return idea;
}

function createLine() {}

init(data[0]);
