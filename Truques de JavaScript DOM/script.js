const form = document.querySelector('form')
const ul = document.querySelector('ul')
// Criação de um unico evento... bloqueia o evento!
// Pega o ultimo evento...
form.onsubmit = function(evt) {
    event.preventDefault()

    const input = form.querySelector('input')
    const value = input.value


    if (value === "") return

    const li = ul.querySelector('li').cloneNode(true)
    li.querySelector('span').textContent = value
    ul.appendChild(li)
    //ul.innerHTML = ul.innerHTML += `<li "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`

    //Resetar o valor da caixa
    input.value = ""

}

//ul.addEventListener

ul.onclick = function(event) {
    
    if( event.target.classList.contains("delete") ) {
        if(confirm("Deseja deletar esse item?")){
          event.target.parentElement.remove()

        }        
    }
}
    //console.log(event.currentTarget)// referencia quem ta chamando o evento...
    //console.log(event.target) // pode variar de acordo com o elemento que recebeu o click (pode mudar dependendo de onde é clicado)
    






// Criação de mais de um evento...
//form.addEventListener('submit', function(evt) {})


// Criação de um elemento...
//const li = document.createElement('li')
//li.setAttribute("class", "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")

// Retorna o valor do elemento...
//li.textContent = value

//const button = document.createElement("button")
//button.setAttribute("classs","text-red-700 delete")
//button.textContent = "x"

// Dentro do li colocou um botão
//li.appendChild(button)

// Maneira de adicionar um elemento que criou
//ul.appendChild(li)

