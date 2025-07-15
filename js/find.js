//more info apperance
let moreinfo =document.querySelectorAll(".moreinfo");
let moreInfo =document.querySelectorAll(".moreInfo");
let xmarker=document.querySelectorAll(".xmarker");
moreinfo.forEach(e =>{
    e.onclick=function(){
        Array.from(moreInfo).filter(ele =>{
            if(this.getAttribute("data-name")==ele.getAttribute("data-iname")){
                console.log(ele)
                let single=document.querySelector(`[data-iname="${ele.getAttribute("data-iname")}"]`)
                single.style.display="flex";
            }
        })
    }
})

Array.from(xmarker).forEach(ele=>{
    ele.onclick=function(){
        let i=0;
        let currentElement = ele;
        while (currentElement.parentElement !== null && i!=2) {
        currentElement = currentElement.parentElement;
        i++
        console.log(i);
    }
    console.log(currentElement);
    currentElement.style.display="none";
    }
})


// filtering cards 
let cards = document.querySelectorAll(".find .cards .card");
let catego =document.querySelector("#Category");
let Specialty =document.querySelector("#Specialty");
let Names =document.querySelector("#Names");
let categoop=document.querySelectorAll("#Category option");
let Specialtyop =document.querySelectorAll("#Specialty option");
let Namesop =document.querySelectorAll("#Names option");
// category filter
catego.onchange = function(){
Array.from(cards).forEach(ele=>{
        if(catego.value!=ele.getAttribute("data-Category")&&window.getComputedStyle(ele).display !='none'){
            ele.setAttribute("data-filter","category")
        }
    })
Array.from(cards).filter(ele =>{
    ele.style.display="block";
    if(catego.value=="All"){
            ele.style.display="block";
    }else if(catego.value!=ele.getAttribute("data-Category" )){
            ele.style.display="none"
            
    }
})
Array.from(Specialtyop).filter(ele =>{ 
    ele.style.display="block";
    console.log(ele.getAttribute("data-Category"))
    if(catego.value=="All"){
        ele.style.display="block";
    }else if(ele.getAttribute("data-Category")!=catego.value && ele.textContent!="All"){
        ele.style.display="none";
    }
})
Array.from(Namesop).filter(ele =>{ 
    ele.style.display="block";
    if(catego.value=="All"){
        ele.style.display="block";
    }else if(ele.getAttribute("data-Category")!=catego.value && ele.textContent!="All"){
        ele.style.display="none";
    }
})
    
}
// Specialty filter
Specialty.onchange = function(){
    Array.from(cards).forEach(ele=>{
    if(Specialty.value!=ele.getAttribute("data-Specialty")&&window.getComputedStyle(ele).display !='none'){
        ele.setAttribute("data-filter","Specialty")
    }
    })
    Array.from(cards).filter(ele =>{
    ele.style.display="block";
    if(Specialty.value=="All"){
        ele.style.display="block";
    }else if(Specialty.value!=ele.getAttribute("data-Specialty")){
            ele.style.display="none"
            
    }
})
// let curentspop=document.querySelector(`[data-Specialty="${Specialty.value}"]`)
// Array.from(categoop).filter(ele =>{ 
//     ele.style.display="block";
//     console.log(ele.getAttribute("data-Category"))
//     if(Specialty.value=="All"){
//         ele.style.display="block";
//     }else if(ele.getAttribute("data-Category")!=curentspop.getAttribute("data-Category" && ele.textContent!="All")){
//         ele.style.display="none";
//     }
// })
Array.from(Namesop).filter(ele =>{ 
    console.log("#################"+ele.textContent);
    ele.style.display="block";
    if(Specialty.value=="All"){
        ele.style.display="block";
    }else if(ele.getAttribute("data-Specialty")!=Specialty.value && ele.textContent!="All"){
        ele.style.display="none";
    }
})
}
// Names filter
Names.onchange = function(){
     Array.from(cards).forEach(ele=>{
    if(Names.value!=ele.getAttribute("data-pname")&&window.getComputedStyle(ele).display !='none'){
            ele.setAttribute("data-filter","pname")
        }
    })
    Array.from(cards).filter(ele =>{
    ele.style.display="block";
    if(Names.value=="All"){
        ele.style.display="block";
    }else if(Names.value!=ele.getAttribute("data-pname")){
            ele.style.display="none"
            
    }
})
// let curentspop=document.querySelector(`[data-pname="${Names.value}"]`)
// Array.from(categoop).filter(ele =>{ 
//     ele.style.display="block";
//     console.log(ele.getAttribute("data-Category"))
//     if(Specialty.value=="All"){
//         ele.style.display="block";
//     }else if(ele.getAttribute("data-Category")!=curentspop.getAttribute("data-Category" && ele.textContent!="All")){
//         ele.style.display="none";
//     }
// })
// Array.from(Specialtyop).filter(ele =>{ 
//     console.log("#################"+ele.textContent);
//     ele.style.display="block";
//     if(Specialty.value=="All"){
//         ele.style.display="block";
//     }else if(ele.getAttribute("data-Category")!=curentspop.getAttribute("data-Category" && ele.textContent!="All")){
//         ele.style.display="none";
//     }
// })
}