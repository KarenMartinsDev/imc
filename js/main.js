//importação de outros arquivos

import {Modal} from "./modal.js"
import { AlertError } from "./alert.js"
import {IMC, notNumber} from "./utils.js"

//variaveis input
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//evento de click pegando os valores do input e calculando
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const showAlertError = notNumber (weight) || notNumber (height)

    if (showAlertError){
        AlertError.open()
        return
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
} 

inputWeight.oninput = function(){
    AlertError.close()
}

inputHeight.oninput =function(){
    AlertError.close()
}



