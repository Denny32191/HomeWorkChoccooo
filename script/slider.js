const slider = document.querySelector('.products__list');
const buttons = document.querySelectorAll('.products__arrow');
const items = document.querySelectorAll('.products__item');

const sliderTranform = (to) => {

    const width = document.querySelector('.products__item').offsetWidth
    const currentPosition = +slider.style.left.replace('-', '').replace('px', '')

    let i = 0;

    if (to === 'next') {
        if (currentPosition === 0) {
            i = 1
        } else if (currentPosition > 0 && currentPosition < width * (items.length - 1)) {
            i = currentPosition / width + 1
        }
    } else {
        if (currentPosition === 0) {
            i = (items.length - 1)
        } else if (currentPosition > 0) {
            i = currentPosition / width - 1
        }
    }


    slider.style.left = `-${width * i}px`
}


for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', (e) => {
        e.preventDefault()
        if (button.classList.contains('products__arrow--prev')) {
            sliderTranform('prev')
        } else {
            sliderTranform('next')
        }

    })

}


//Валидация
const form = document.querySelector('.form');

const validateField = (field) => {
    if (field.value.trim().length) {
        field.classList.remove('form__input_error')
        return true
    } else {
        field.classList.add('form__input_error')
        return false
    }
}

const validateForm = (data) => {
    let valid = true

    for (const key in data) {
        const element = data[key];

        const validField = validateField(element)

        if (!validField) {
            valid = false
        }
    }

    return valid
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = {
        name: form.elements.name,
        phone: form.elements.phone,
        comment: form.elements.comment,
    }

    if (validateForm(data)) {
        console.log('форма валидна, отправляем запрос')
    } else {
        console.log('запрос не отправляем, ждём заполнения формы')
    }

})
    ///бургер
