const add = document.getElementById("Add-btn");


function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;


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
  const editTitleBtn = document.createElement('button')
  const editNoteBtn = document.createElement('button')
  const footer = document.createElement('div')
  const removeBtn = document.createElement('button')
  const date = document.createElement('date')


  addanote.classList.add('note')
  h2.classList.add('title')
  paragraph.classList.add('text')
  list.classList.add('list')
  removeBtn.classList.add('delete')
  editTitleBtn.classList.add('edit')
  editNoteBtn.classList.add('edit')
  

  body.appendChild(addanote)
  addanote.appendChild(list)
  list.appendChild(h2)
  list.appendChild(paragraph)
  list.appendChild(editTitleBtn)
  list.appendChild(editNoteBtn)
  list.appendChild(removeBtn)
  list.appendChild(date)

  h2.innerText='title';
  paragraph.innerText='Your Note';
  removeBtn.textContent = 'remove';
  editTitleBtn.textContent = 'editTitle';
  editNoteBtn.textContent = 'editNote';
  date.textContent = '10-10-2020'
 
 
  // makes the note dragable
  dragElement(addanote);
  
  // complete on click 
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
})
  
  // the delete button / edit / save  
  addanote.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
      
      const button = event.target;
      const list = button.parentNode;
      const addanote = list.parentNode;
      
      if(button.textContent === 'remove') {
        addanote.removeChild(list);
      } else if(button.textContent === 'editTitle') {
        
        const h2 = list.firstElementChild;
        const input = document.createElement('input');
       
        input.addEventListener('mousedown' , (event)=>{
          event.stopPropagation();
        })
        
        input.type = 'text';
        input.value = h2.textContent;
       
        list.insertBefore(input, h2);
        list.removeChild(h2);
        
        button.textContent = 'saveTitle'; 
      }else if(button.textContent === 'editNote') {
         
        const paragraph = list.children[1];
          const input = document.createElement('input');
         
          input.addEventListener('mousedown' , (event)=>{
            event.stopPropagation();
          })
         
          input.type = 'text';
          input.value = paragraph.textContent;
         
          list.insertBefore(input, paragraph);
          list.removeChild(paragraph);
         
          button.textContent = 'saveNote';
      } else if(button.textContent === 'saveNote') {
            const input = list.children[1];
            const paragraph = document.createElement('paragraph');
           
            paragraph.textContent = input.value;
            
            
            list.insertBefore(paragraph, input);
            list.removeChild(input);
           
           
            addanote.classList.add('note')
            h2.classList.add('title')
            paragraph.classList.add('text')
            list.classList.add('list')
            removeBtn.classList.add('delete')
            editTitleBtn.classList.add('edit')
            editNoteBtn.classList.add('edit')
            button.textContent = 'editNote';
      } else if(button.textContent === 'saveTitle') {
        
            const input = list.firstElementChild;
            const h2 = document.createElement('h2');
        
            h2.textContent = input.value;

        
            list.insertBefore(h2, input);
            list.removeChild(input);


            addanote.classList.add('note')
            h2.classList.add('title')
            paragraph.classList.add('text')
            list.classList.add('list')
            removeBtn.classList.add('delete')
            editTitleBtn.classList.add('edit')
            editNoteBtn.classList.add('edit')
            button.textContent = 'editTitle';
      
      
      }
    }
  });
}
// log out
const logout = getElementById('logout')

logout.addEventListener("click", (event) => {
    fetch("/log-out")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.response == "success") {
          window.location.href = "/";
        }
      });
  }
);
