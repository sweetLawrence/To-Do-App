var input = document.querySelector(".text");
var addBtn = document.querySelector(".add");
var taskContainer = document.querySelector(".taskContainer");

addBtn.addEventListener("click",perform);

function perform(){
var value = input.value;

var task = document.createElement('div');
task.setAttribute("class","task");
// task.setAttribute("id","task");

var name = document.createElement('p');
name.setAttribute("class","name");
var txtNode = document.createTextNode(value);
name.appendChild(txtNode)
// name.setAttribute("id","task");

var controls = document.createElement('div');
controls.setAttribute("class","controls");
// controls.setAttribute("id","controls");

var img = document.createElement('img');
img.setAttribute("src",'Imagesfolder/delete2.jpg')
img.setAttribute("alt",'delete')
var img2 = document.createElement('img');
img2.setAttribute("src",'Imagesfolder/edit2.png');
img2.setAttribute("alt",'edit')


// name.appendChild(value);

controls.appendChild(img);
controls.appendChild(img2)
task.appendChild(name);
task.appendChild(controls);
taskContainer.append(task);


}