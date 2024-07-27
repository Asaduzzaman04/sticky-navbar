const btn1 = document.getElementById("link1");
const btn2 = document.getElementById("link2");
const btn3 = document.getElementById("link3");
const btn4 = document.getElementById("link4");

// =====>first-button <=====
btn1.addEventListener("mouseover", (e) =>{
    const x = e.pageX - btn1.offsetLeft;
    const y = e.pageY - btn1.offsetTop;
    
    btn1.style.setProperty("--pageL", x + 'px');
    btn1.style.setProperty("--pageY", y + 'px');
})
// =====>second-button <=====

btn2.addEventListener("mouseover", (e) =>{
    const x = e.pageX - btn2.offsetLeft;
    const y = e.pageY - btn2.offsetTop;
    
    btn2.style.setProperty("--pageL", x + 'px');
    btn2.style.setProperty("--pageY", y + 'px');
})

// =====>third-button <=====
btn3.addEventListener("mouseover", (e) =>{
    const x = e.pageX - btn3.offsetLeft;
    const y = e.pageY - btn3.offsetTop;
    
    btn3.style.setProperty("--pageY", y + 'px');
    btn3.style.setProperty("--pageL", x + 'px');
})

// =====>fourth-button <=====
btn4.addEventListener("mouseover", (e) =>{
    const x = e.pageX - btn4.offsetLeft;
    const y = e.pageY - btn4.offsetTop;

    btn4.style.setProperty("--pageL", x + 'px');
    btn4.style.setProperty("--pageY", y + 'px');
})

// sticky-nav-bar-section \\
const navbar = document.getElementById('navbar');

const div1 = document.getElementById("div1")

const div1mes = div1.offsetTop;

const div2 = document.getElementById("div2")

window.addEventListener("scroll", () =>{
    if(window.scrollY >  div1mes){
        navbar.classList.add('change')
    }else{
        navbar.classList.remove('change')
    }
})

