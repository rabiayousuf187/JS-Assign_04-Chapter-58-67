
//i. What is node type of element having id “form-content”
let ele = document.getElementById("form-content");
console.log("form-content Node Type ==== ", ele.nodeType);

// ii. Show node type of element having id “lastName” and its child node.

let ele2 = document.getElementById("lastName");
console.log("lastName Node Type==== ", ele2.nodeType);
for(let ind = 0; ind < ele2.childNodes.length ; ind++){
    console.log(`lastName Child Node ${ele2.childNodes[ind].nodeName} Type ==== ", ${ele2.childNodes[ind].nodeType}`);
    
}

// iii. Update child node of element having id “lastName”.
ele2.childNodes[0].nodeValue = 'Update Last Name : Zafar';

// iv. Get First and last child of id “main-content”.
let ele3 = document.getElementById("main-content");
console.log(`Fisrt Child of main-content ${ele3.firstChild.nodeName} `);
console.log(`Last Child of main-content ${ele3.lastChild.nodeName} `);


// v. Get next and previous siblings of id “lastName”.
console.log(`LastName: previous Sibling ${ ele2.previousSibling.nodeName} `);
console.log(`LastName: next Sibling ${ ele2.nextSibling.nodeName} `);
