
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

// // iii. Get all elements of class “render” and show their innerHTML
// // in browser.
// let ele_class = document.getElementsByClassName("render");
// // console.log("Child Elements ==== ", ele_class[0].innerHTML);
// for(let ind= 0 ; ind < ele_class.length ; ind++){
//     console.log(`Class Element: ${ind} inner HTML: ${ele_class[ind].innerHTML}`)
// }

// // iv. Fill input value whose element id first-name using javascript.
// document.getElementById("first-name").value = "Aliena";

// // v. Repeat part iv for id ”last-name” and “email”.
// document.getElementById("last-name").value = "Fahad";
// document.getElementById("email").value = "aliena@gmail.com";
