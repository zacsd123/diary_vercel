
  const form = document.querySelector('form');
  const btn = document.querySelector('button');
  const ul = document.querySelector('ul');
  const input = document.querySelector('input');
  let array = [];
  const addItem = () =>{
    const text = document.createElement('li');
    text.innerText = input.value;
    ul.appendChild(text);
    array.push(text);
    const delButton = document.createElement('button');
    text.appendChild(delButton)
    delButton.innerText = "삭제"

    delButton.addEventListener('click', () => {
      ul.removeChild(text);
    });
  }


  btn.addEventListener('click', () => {
    addItem();
  });

  


  

