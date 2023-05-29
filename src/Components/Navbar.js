import React from 'react';
import 'tailwindcss/tailwind.css';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Navbar() {
  return (
    <div className='shadow-lg'>
      <div className='nav flex justify-between ml-6 mr-6 mt-6'>
        <div className='text-2xl  '>
          <span className='name tracking-widest'>Nithin</span>
        </div>
        <div className='md:hidden lg:hidden w-3/5 flex justify-evenly items-center'>
          <div className='w-6'>
            <a href='mailto:nithinsunil55@gmail.com' target='blank'>
              <img src={email} alt='E-mail' />
            </a>
          </div>
          <div className='w-6'>
            <a
              href='https://www.linkedin.com/in/nithin-s-b3764820b/'
              target='blank'
            >
              <img src={linkedin} alt='LinkedIn' />
            </a>
          </div>
          <div className='w-6'>
            <a href='https://github.com/nithinsunil' target='blank'>
              <img src={github} alt='Github' />
            </a>
          </div>
        </div>
        <div
          className='hidden 
        lg:links lg:flex lg:justify-evenly lg:mr-8 lg:tracking-widest lg:w-2/5 lg:text-lg
        md:links md:flex md:justify-evenly md:mr-8 md:tracking-widest md:w-2/5 md:text-lg'
        >
          <a href='/'>
            <div>Home</div>
          </a>
          <a href='/'>
            <div>About</div>
          </a>
          <a href='/'>
            <div>Portfolio</div>
          </a>
          <a href='/'>
            <div>Contact</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
