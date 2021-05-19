// grid view: buttons onclick change flex of column
var columns = document.getElementsByClassName('column');
var i;


function one() {
    for (i=0; i<columns.length;i++){
    columns[i].style.flex="100%";
    }
}

function two() {
    for (i=0; i<columns.length;i++){
    columns[i].style.flex="50%";
    }
}

function three() {
    for (i=0; i<columns.length;i++){
    columns[i].style.flex="33.3%";
    }
}

function four() {
    for (i=0; i<columns.length;i++){
    columns[i].style.flex="25%";
    }
}

// button active when clicked
var gridbuttons = document.getElementById("grid-buttons");
var buttons = gridbuttons.getElementsByClassName('button');
for (var j = 0;j < buttons.length;j++){
    buttons[j].addEventListener('click', function(){
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(" active", "") ;
    this.className += " active";
});
}
