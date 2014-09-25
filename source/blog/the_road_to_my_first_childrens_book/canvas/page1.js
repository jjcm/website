layers = [
    {'yscale': 124, 'xscale': 124, 'y': 0, 'x': 0, 'src':"fireman_0014_bg.png"},
    {'yscale': 63, 'xscale': 63, 'y': 757, 'x': 0, 'src':"fireman_0013_bg.png"},
    {'yscale': 42, 'xscale': 42, 'y': 1025, 'x': 0, 'src':"fireman_0012_bg.png"},
    {'yscale': 19, 'xscale': 17, 'y': 1317, 'x': 0, 'src':"fireman_0011_bg.png"},
    {'yscale': 20, 'xscale': 20, 'y': 1385, 'x': 1, 'src':"fireman_0010_bg.png"},
    {'yscale': 19, 'xscale': 17, 'y': 499, 'x': 607, 'src':"fireman_0009_firetruck.png"},
    {'yscale': 18, 'xscale': 17, 'y': 0, 'x': 1019, 'src':"fireman_0008_tree_back.png"},
    {'yscale': 18, 'xscale': 17, 'y': 132, 'x': 1130, 'src':"fireman_0007_tree_middle.png"},
    {'yscale': 18, 'xscale': 16, 'y': 0, 'x': 1028, 'src':"fireman_0006_tree_front.png"},
    {'yscale': 17, 'xscale': 15, 'y': 402, 'x': 1380, 'src':"fireman_0005_cat.png"},
    {'yscale': 18, 'xscale': 14, 'y': 1138, 'x': 1233, 'src':"fireman_0004_fireman_back.png"},
    {'yscale': 18, 'xscale': 13, 'y': 914, 'x': 1257, 'src':"fireman_0003_fireman_front.png"},
    {'yscale': 18, 'xscale': 12, 'y': 1166, 'x': 763, 'src':"fireman_0002_girl_back.png"},
    {'yscale': 18, 'xscale': 11, 'y': 1125, 'x': 809, 'src':"fireman_0001_girl_front.png"},
    {'yscale': 10, 'xscale': 10, 'y': 1386, 'x': 1, 'src':"fireman_0000_grass_top.png"}
]

var page1 = new Array();
for( i in layers ){
    temp = new Image();
    temp.src = layers[i].src;
    page1.push({'src':temp, 'xscale':layers[i].xscale, 'yscale':layers[i].yscale,'x':layers[i].x, 'y':layers[i].y });
}

