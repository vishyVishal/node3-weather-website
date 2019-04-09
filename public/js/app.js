
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
messageOne = document.querySelector('#message-1')
messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JS' 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location ).then( (response) => {
    response.json().then( (data) => {
        if(data.error) {
            messageTwo.textContent =  data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast

            
        }
        
    })
})

    
})