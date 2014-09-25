layers = [
    {'yscale': 200, 'xscale': 124, 'y': 100, 'x': 40, 'src':"0.png"},
    {'yscale': 142, 'xscale': 42, 'y': 100, 'x': 40, 'src':"2.png"},
    {'yscale': 119, 'xscale': 4, 'y': 100, 'x': 40, 'src':"4.png"},
    {'yscale': 110, 'xscale': 10, 'y': 100, 'x': 40, 'src':"5.png"},
    {'yscale': 110, 'xscale': 2, 'y': 100, 'x': 40, 'src':"6.png"}
]

var page1 = new Array();
for( i in layers ){
    temp = new Image();
    temp.src = layers[i].src;
    page1.push({'src':temp, 'xscale':layers[i].xscale, 'yscale':layers[i].yscale,'x':layers[i].x, 'y':layers[i].y });
}

