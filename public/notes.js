
const add = document.getElementById("Add-btn");


function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  /* otherwise, move the DIV from anywhere inside the DIV:*/
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if (
      elmnt.offsetTop - pos2 > window.innerHeight - 100 ||
      elmnt.offsetTop - pos2 < 0 ||
      elmnt.offsetLeft - pos1 > window.innerWidth - 100 ||
      elmnt.offsetLeft - pos1 < 0
    ) {
      return;
    }
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/

    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//
 add.addEventListener('click', addNote)
// add a note and edit it
function addNote(){
  const body = document.querySelector("body")
  const addanote = document.createElement('div')
  const list = document.createElement("li")
  const h2 = document.createElement('h2')
  const paragraph = document.createElement('p')
  addanote.classList.add('note')
  h2.classList.add('title')
  paragraph.classList.add('text')
  list.classList.add('list')
  body.appendChild(addanote)
  addanote.appendChild(list)
  list.appendChild(h2)
  list.appendChild(paragraph)
  dragElement(addanote);
}
