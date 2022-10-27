//Capture um numero entre 1 e 10
//E mostre o quadrado do numero
//Regra: o numero precisa estar entre 1 e 10

//variaveis
let numberInput = prompt("Digite um numero entre 1 a 10:")

//tipo de dado: Boolean = true ou false
if (numberInput <= 10 && numberInput >= 1){
    alert(`O numero ${numberInput} ao quadrado é ${numberInput * numberInput}`)

}else{
    alert("Numero invalido. Atualize a pagina e tente novamente.")
}



// Objetos
let person = {
    name: "Isac",
    age: 27,
    haveChildren: true,
    walk(){
        alert("andar")
    },
    Talk(){
     alert("falar")   
    }  
}


//array
let shopList = ["Banana", "maça", "morango"]
document.write(shopList[1])
alert(shopList[2])