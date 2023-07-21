
// coloco export para liberar que eu use tudo que está aqui em outro arquivo

export const Modal = {

    //variaveis referente ao modal
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

//evento fechando modal quando clicar no x
Modal.btnClose.onclick = () => {
    Modal.close()
 }

//evendo e função do modal para fechar quando apertar o esc (escape)
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){

    if (event.key === 'Escape'){
        Modal.close()
    }
}
 
