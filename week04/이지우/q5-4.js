const box = document.getElementById('hoverBox')
box.addEventListener("mouseover", () =>{
    box.style.backgroundColor = 'skyblue';
});

box.addEventListener("mouseout", () =>{
    box.style.backgroundColor = 'coral';
});