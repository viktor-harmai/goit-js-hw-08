import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';

populateFormInput();

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

// получаем значение поля и сохраняем его в хранилище

function onFormInput(evt) {
  const inputData = {
    email: refs.inputEl.value,
    message: refs.textareaEl.value,
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputData));
}

//получаем значение из хранилища и если там не null обновляем DOM

function populateFormInput() {
  try {
    const saveMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (saveMessage) {
      const { email, message } = saveMessage;
      refs.inputEl.value = email;
      refs.textareaEl.value = message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

//При сабмите формы очищаем хранилище,поля формы и выводим объект с полями email, message и текущими их значениями в консоль.

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
