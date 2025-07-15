let cc =document.querySelector(".cc")
console.log(cc);
window.addEventListener('scroll', function() {
    if(window.scrollY > 350 && cc.getAttribute("data-cc") == "false") { // 1. تصحيح screenY إلى scrollY
        const counters = document.querySelectorAll('.num');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-counter');
            let current = 0;
            
            const updateCount = () => {
                if(current < target) {
                    current += Math.ceil(target / speed);
                    if(current > target) current = target;
                    counter.innerText = current.toLocaleString();
                    setTimeout(updateCount, 1);
                }
            };
            
            setTimeout(updateCount, 300);
        });
        cc.setAttribute("data-cc","true")
    }
});