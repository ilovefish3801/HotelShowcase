const NameValidation = (element)=>{
    const VALUE = element.value
    
    if (VALUE.length >= 3){
        let FILTERED_VALUE = VALUE.toLowerCase()
        
        FILTERED_VALUE = FILTERED_VALUE[0].toUpperCase() + FILTERED_VALUE.slice(1)
        
        return FILTERED_VALUE
    }else{
        return null
    }
}

const clearData = (elements)=>{
    elements.map((el)=>{
        el.value = null
    })
}

const sendDataToTelegram = (data)=>{
    fetch(`https://api.telegram.org/bot6760843429:AAFhFl-reEv7BSIPG9jVJ1wTzJ1JrXhG_x8/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: '6148293963',
      text: `Name: ${data.name} \nEmail: ${data.email} \nMessage: ${data.message}`,
        
})
})
}

const showFormText = ()=>{
    if(localStorage.getItem('data')){
        const MAIN = document.querySelector('main')
        const TEXT = document.querySelector('.formText')
        const FOOTER = document.querySelector('footer')

        MAIN.style.display = 'none'
        TEXT.style.display = 'flex'
        

        FOOTER.classList.add('formFilled')

    }
}

  document.addEventListener("DOMContentLoaded", ()=>{
    showFormText()

    const FORM = document.querySelector('#mainContainer__form')

    const NAME_INPUT = document.querySelector('#mainContainer__form_inputName')
    const EMAIL_INPUT = document.querySelector('#mainContainer__form_inputEmail')
    const TEXT_AREA = document.querySelector('#mainContainer__form_textArea')


    FORM.addEventListener('submit', (e)=>{
        e.preventDefault()

        const name = NameValidation(NAME_INPUT)
        const email = EMAIL_INPUT.value
        const message = TEXT_AREA.value

        if (name == null){
            alert('Name is too short')
        }else{
            const USER_DATA = {name, email, message}
            
            localStorage.setItem('data', JSON.stringify(USER_DATA))

            clearData([NAME_INPUT, EMAIL_INPUT, TEXT_AREA])

            sendDataToTelegram(USER_DATA)

            showFormText()
        }

    })
})
 