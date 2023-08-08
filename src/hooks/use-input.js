import { useState } from 'react'

export const EmailValidation = 'email';
export const PasswordValidation = 'password';
export const Required = 'required';


export function useInput(validationTypes = [], customValidation = () => true) {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState({ isValid: true, message: '' });

  function handleInputChange(e) {
    const changedVal = e.target.value;

    let isValid = { isValid: customValidation(changedVal), message: ''};
    validationTypes.forEach((type) => {
      switch (type) {
        case EmailValidation:
          const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!changedVal.match(mailFormat)) isValid = { isValid: false, message: 'Invalid email'};
          break;
        case PasswordValidation:
          const passwordFormat = /^(?=.*[0-9])(?=.*[!@.#$%^/&*])[a-zA-Z0-9!@#$.%/^&*]{6,16}$/;
          if (!changedVal.match(passwordFormat)) isValid = { isValid: false, message: 'Invalid Password'};
          break;
        case Required:
          if (!changedVal.length) isValid = { isValid: false,  message: 'Field is required'};
          break
      }
    })

    setValue(changedVal);
    setIsValid(isValid);
  }
  function handleInputBlur() {
    setIsTouched(true)
  }

  function reset() {
    setValue('')
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    isTouched,
    reset,
    handleInputChange
  }
}

