const add= document.getElementById("add");
const colorInput =document.getElementById("colorInput");
const textArea=document.getElementById("textArea");
const container=document.getElementById("container");


add.addEventListener("click",()=>{
    let note=textArea.value;
    let color=colorInput.value;
    createNote(note,color)

    //console.log("Added sucessfull");
});

const createNote=(note,color) =>{
    let div = document.createElement("div");
    div.innerHTML=`
    <h1 id="note">${note}<h1>
    <h1 id="del">Delete<h1>
    `;
    div.classList.add("internalDivs");
    div.style.backgroundColor=color;
    container.append(div);

};
container.addEventListener("click",(e)=>{
    //console.log(e.target.innerHTML);
    if(e.target.innerHTML === "Delete"){
        e.target.parentElement.remove();
    }

});


