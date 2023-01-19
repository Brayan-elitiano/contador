 let numero = 0


//alteradores de estado da aplicao


 function adicionar() {
 numero++ 
 render()
}
function diminuir() {
    numero--
    render()
}
function zerar(){
    numero = 0
    render()
}
function render(){
const p = document.getElementById("number")
p.innerText = numero
console.log(p)

}