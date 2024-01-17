const modal = document.querySelector('.wrapper__modal');
const openButton = document.getElementById('openModal');
const closeButton = document.querySelector('.message__close');
const overlay = document.querySelector('.modal__overlay');


openButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

overlay.addEventListener('click', function() {
  modal.style.display = 'none';
});


function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;

        parent.classList.add('error');

        parent.append(errorLabel);
    }

    let result = true;

    const allInputs = form.querySelectorAll('input, checkbox');

    for (const input of allInputs) {
        removeError(input);

        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength) {
                removeError(input);
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`);
                result = false;
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input);
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`);
                result = false;
            }
        }

        if (input.type === 'checkbox' && input.dataset.required == 'true') {
            if (!input.checked) {
                removeError(input);
                createError(input, 'Необходимо отметить согласие!');
                result = false;
            }
        }

        if (input.type !== 'checkbox' && input.dataset.required == 'true') {
            if (input.value.trim() === '') {
                removeError(input);
                createError(input, 'Поле не заполнено!');
                result = false;
            }
        }
    }

    return result;
}

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this)) {
        const formData = new FormData(this);

        fetch('./php/process_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                this.reset();

                const modal = document.querySelector('.wrapper__modal');
                modal.style.display = 'none';
            } else {
                alert('Произошла ошибка при отправке данных.');
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке данных:', error);
            alert('Произошла ошибка при отправке данных.');
        });
    }
});

document.getElementById('burgerBtn').addEventListener('click', function() {
    var navSite = document.querySelector('.nav__site');
    var burgerBtn = document.getElementById('burgerBtn');
    var headerNav = document.getElementById('headerNav');

    if (navSite.style.display === 'none') {
      navSite.style.display = 'flex';
      headerNav.classList.remove('header__nav');
      burgerBtn.classList.remove('burger__closed');
      burgerBtn.classList.add('burger__open');
      headerNav.classList.add('header__nav__open');
    } else {
      navSite.style.display = 'none';
      burgerBtn.classList.remove('burger__open');
      headerNav.classList.remove('header__nav__open');
      burgerBtn.classList.add('burger__closed');
      headerNav.classList.add('header__nav');
    }
});

