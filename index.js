//Nos traemos todos los imputs a javascript mediante su ID
let costilla = document.getElementById('costillas')
let patatas = document.getElementById('patatas')
let vino = document.getElementById('vino')
let postre = document.getElementById('postre')
let boton = document.getElementById('confirmar')
let cuenta= document.getElementById('cuenta')

//Creamos un evento donde, al confirmar el pedido rellenado por HTML, nos pinta en pantalla la cantidad, el precio de cada producto y el total de todos los productos sumados
boton.addEventListener('click', ()=>{
    cuenta.innerHTML= `
    Costillas (${costilla.value}) -- ${costilla.value * CARTA[0].precio}€ <br>
    Patatas (${patatas.value}) ---- ${patatas.value * CARTA[1].precio}€ <br>
    Vino (${vino.value}) ------ ${vino.value * CARTA[2].precio}€ <br>
    Postre (${postre.value}) ---- ${postre.value * CARTA[3].precio}€<br>
    ----------------------------- <br>
    Total: 
    ${costilla.value * CARTA[0].precio+patatas.value * CARTA[1].precio+vino.value * CARTA[2].precio+postre.value * CARTA[3].precio}€
    `

})
 
