const newElement = document.createElement("h2");
newElement.textContent = "Hlo Dosto";
newElement.id = "second";

//select element
const element = document.getElementById("first");
element.after(newElement); // Places new element AFTER the selected one

// If you want to place BEFORE, use this (corrected):
// element.before(newElement); // Note: lowercase 'e' not capital 'E'

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali aa rhi h";
newElement2.id = "third";
//newElement2.className = "diwali";
//newElement2.className = "holi"; override diwali
//newElement2.className +=" holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
//newElement2.classList.remove("holi");

newElement2.style.backgroundColor="pink";
newElement2.style.fontSize="20px";
newElement2.setAttribute("hello","ji");

element.before(newElement2);

console.log(newElement2.getAttribute("hello"));

// const list=document.createElement("li");
// list.textContent="Milk";
// const list2=document.createElement("li");
// list2.textContent="Cake";
// const list3=document.createElement("li");
// list3.textContent="Bread";
// const list4=document.createElement("li");
// list4.textContent="paneer";

// const unorderedElement=document.getElementById("listing");

// unorderedElement.append(list);
// unorderedElement.append(list2);
// unorderedElement.prepend(list3);

// list.after(list4);
// console.log(unorderedElement.children[1]);
const arr=["milk","halwa","paneer","potatao","tea"];

const unorderedElement=document.getElementById("listing");

const fragment=document.createDocumentFragment();
for(let food of arr){
    const list=document.createElement("li");
    list.textContent=food;
    fragment.append(list);
}
unorderedElement.append(fragment);

const s1=document.getElementById("first");
s1.remove();

const month=document.getElementById("ten");
// console.log(month.childNodes);
//console.log(month.children);
const lister=document.createElement("li");
//lister.textContent="Help";
//lister.textContent="<h2>Help</h2>";

// lister.innerHTML="<h2>Help</h2>";
// month.prepend(lister);
//month.insertAdjacentElement("afterbegin",lister)
//month.insertAdjacentElement("beforebegin",lister)
//month.insertAdjacentElement("beforeend",lister)