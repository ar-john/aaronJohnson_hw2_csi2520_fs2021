let comBtn = document.querySelector('#commentBtn');
comBtn.addEventListener('click', runInputTextEvent);


let comForm = document.querySelector('#commentForm');

// let txtarea = document.createElement("textArea");

let inputText = document.createElement("textarea");

//inputText.addEventListener('keydown', runInputTextEvent); 


let submitBtn = document.createElement("button");
submitBtn.innerHTML = "Submit Comment";



function runInputTextEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`); // each time you type it will fire the event and increment counter 

    //Grab what is being typed i.e. the value */
    console.log(e.target.value);

    //Take contnet and populate to DOM */
    
    comForm.innerHTML = `<textarea id="textArea">${e.target.value}</textarea>`;
    // let submitBtn = document.createElement("button");
    // submitBtn.innerHTML = "Submit Comment";
    //comForm.appendChild(inputText);
    comForm.appendChild(submitBtn);
    submitBtn.addEventListener('click', addComment);
    return "#textArea";
}

// submitBtn.addEventListener('click', addComment);

function addComment(e) {

    console.log(e.target.value);
    let x = document.createTextNode("#textArea");
    comForm.appendChild(x);




}