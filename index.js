let myLeads = [];
let myOldLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const tabBtn =document.querySelector("#tab-btn");
// console.log(ulEl);
const inputBtn = document.querySelector("#input-btn");
const deleteBtn= document.querySelector("#delete-btn");
//or
// let inputBtn  = document.getElementById("input-btn");

//learning
//dummy tab
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]
// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    // console.log(tabs[0].url);
    // Save the url instead of logging it out
    // myLeads.push(tabs[0].url)
    // localStorage.setItem("myLeads",JSON.stringify(myLeads));
    // render(myLeads);

    //api for actual cuurent window tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){  //api part
        myLeads.push(tabs[0].url)  //my original code
        localStorage.setItem("myLeads", JSON.stringify(myLeads) ) //my original code
        render(myLeads) //my original code
    }) //api part
} )

//learning
// myLeads = JSON.stringify(myLeads); //this code convert array into string
// console.log(typeof myLeads); //this will verify that myLeads is now string type

//practice challenge 
// let myLeads = `["www.awesomelead.com"]`
/*
1. Turn the myLeads string into an array
2. Push a new value to the array
3. Turn the array into a string again
4. Console.log the string using typeof to verify that it's a string
*/
// myLeads = JSON.parse(myLeads);  //will convert to array
// // console.log(typeof myLeads) //object
// myLeads.push("Pradeep");  //will push new string value to newly converted array
// myLeads=JSON.stringify(myLeads); //will convert newly created array into string
// console.log(typeof myLeads); //will tell typeof myLeads in the console to verify that it has been converted 

//
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);
// localStorage.clear();

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call render()
if(leadsFromLocalStorage){
   myLeads=leadsFromLocalStorage; 
    render(myLeads);
}

//listening for double click
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads =[];
    render(myLeads);
});
/*
In programming, an argument is the value passed into
 a function when it's called, while a parameter is
  a variable that defines the type and number of inputs the function can accept
*/

function render(Leads) {
    let listItems = "";
for (let i=0;i<Leads.length;i++){
    // ulEl.textContent+="<li>"+myLeads[i]+"</li> "; //will display <li>... </li> as it is
    // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>" //will display by considering <li></li> property in html
    //listItems+="<li> <a target='_blank' href='"+myLeads[i]+"' >"+myLeads[i]+"</a></li>";

    //using template string/literals of previous line code
    listItems+=
                `
                <li>
                <a target="_blank" href="${Leads[i]}">
                ${Leads[i]}
                </a>
                </li>
                `

}
ulEl.innerHTML=listItems
}
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value); //get value from input field javascript
    inputEl.value =""; //clear the input field after pushing the value;
    // inputEl.reset(); //bug: not clearing by this

    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    //since localStorage only accept string, hence this line JSON.stringify(myLeads) convert array to string
    localStorage.setItem("myLeads",JSON.stringify(myLeads) ); //save the myLeads to localStorage
    // To verify that it works:
    // console.log( localStorage.getItem("myLeads") );

    render(myLeads);
})

