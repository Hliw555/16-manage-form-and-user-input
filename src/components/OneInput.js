import { useState, useRef, useEffect } from "react";

const OneInput = (props) => {

  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  let formIsValid = false;
  const enteredNameIsValid = enteredName !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // let message;
  // if (enteredName === '') {
  //   message = '- empty string'
  // } else { message = '- string' }
  // console.log(message)
  // console.log(enteredNameIsValid)

  // useEffect(() => {
  if (enteredNameIsValid) {
    formIsValid = true;
    // setFormIsValid(true)
  } else {
    // formIsValid = false;
    // setFormIsValid(false)
  }
  // }, [enteredNameIsValid])


  const inputNameChangeHandler = e => {
    setEnteredName(e.target.value)

    // if (enteredName.trim() !== '') {

    // if (e.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }
  }

  const inputNameBlurHandler = e => {
    setEnteredNameTouched(true)
    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }
  }

  const submitHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    // if (enteredName.trim() === '') {
    // setEnteredNameIsValid(false);
    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);
    // if (enteredName.trim().length === 0) return;

    console.log(enteredName)
    // console.log(nameInputRef.current.value)
    // nameInputRef.current.value = ''; Not Ideal, Don't manipulate the dom
    setEnteredName('');
    setEnteredNameTouched(false)
  }


  // const nameInputClass = enteredNameIsValid
  const nameInputClass = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        {/* <div className='form-control'> */}
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
          // ref={nameInputRef}
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default OneInput;
