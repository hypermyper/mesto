let buttonOpenPopup = document.querySelector(".profile_info__edit_button");
let buttonClosePopup = document.querySelector(".form__close-icon");
let popup = document.querySelector(".overlay");

let field1 = document.querySelector(".field_1");
let field2 = document.querySelector(".field_2");

field1.value = document.querySelector(".profile_info__title").textContent;
field2.value = document.querySelector(".profile_info__description").textContent;

function popupToggle () {
  popup.classList.toggle("overlay_is-opened");
}

buttonOpenPopup.addEventListener("click", popupToggle);
buttonClosePopup.addEventListener("click", popupToggle);

function onClickPopupBackgroundListener (event) {
  if(event.target !== event.currentTarget) {
    return;
  }
  popupToggle();
}

popup.addEventListener("click", onClickPopupBackgroundListener);


// Находим форму в DOM
let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {

  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector(".field_1"); // Воспользуйтесь инструментом .querySelector()
    let jobInput = formElement.querySelector(".field_2");// Воспользуйтесь инструментом .querySelector()


    // Получите значение полей из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileInfo = document.querySelector(".profile_info__title");
    let profileDescription = document.querySelector(".profile_info__description");

    // Вставьте новые значения с помощью textContent
    profileInfo.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;

    popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
