const button = document.getElementById('colorChangeBtn')
button.addEventListener("click", () =>{
    const currentColor = button.style.backgroundColor;

    if(currentColor === "red"){
        button.style.backgroundColor = "";
    }
    else{
        button.style.backgroundColor = "red";
    }
});

