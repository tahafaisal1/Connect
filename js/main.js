let icon = document.querySelector(".bar");
let nav = document.querySelector("ul");
let li = document.querySelectorAll("ul li");
icon.onclick=function(){
    nav.classList.toggle("small");
}
// li.forEach((e)=>{
//     document.styleSheets[2].rules[0].style.setProperty("display","none");
// })
const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }  else{
        event.preventDefault()
        Swal.fire("شكرا","تمت عملية التسجيل بنجاح","success")
    }

        form.classList.add('was-validated')
    }, false)
})
