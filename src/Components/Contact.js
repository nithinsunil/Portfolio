import React from 'react';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Contact() {
  return (
    <div className='flex flex-col p-4 text-center mt-16'>
      <div>
        <h2 className='text-3xl font-bold'>Connect with Me</h2>
      </div>
      <div className='mt-6'>
        Hey, you've made it this far! Have a question or want to get in touch?
        Feel free to checkout the links below.
      </div>
      <div className='md:w-3/5 lg:w-1/5 md:mx-auto lg:mx-auto flex justify-around items-center mt-6'>
        <div className='w-8'>
          <a href='mailto:nithinsunil55@gmail.com' target='blank'>
            <img src={email} alt='E-mail' />
          </a>
        </div>
        <div className='w-8'>
          <a
            href='https://www.linkedin.com/in/nithin-s-b3764820b/'
            target='blank'
          >
            <img src={linkedin} alt='LinkedIn' />
          </a>
        </div>
        <div className='w-8'>
          <a href='https://github.com/nithinsunil' target='blank'>
            <img src={github} alt='Github' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
