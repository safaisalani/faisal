//importing react and useState from react
//importing css Form.css , FormSingnup.js , FormSuccess.js .

import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

//i am using javaScript flat function.

const Form = () => {
// isSubmitted = false
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='faisal-img/000.png' alt='spaceship' />
        </div>

        {//using js by using {}

        //trinary operator 


        //this allow to show submit and success page
          
          !isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )
        
        
        }
      </div>
    </>
  );
};

export default Form;
