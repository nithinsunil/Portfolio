import React from 'react';
// import email from '../assets/email.png';
// import linkedin from '../assets/linkedin.png';
// import github from '../assets/github.png';
import avatar from '../assets/nithin.png'

function Home() {
  return (
    <div className='flex flex-col md:flex-row justify-center mt-24'>
      {/* Avatar and resume buttons */}
      <div>
        <div className='flex mx-auto h-1/2 w-4/5 md:w-1/2'>
          <img src={avatar} alt="Avatar" />
        </div>
        {/* <div className='flex w-48 mx-24 justify-between'>
          <div>
            <button className='w-8'>
              <a href='mailto:nithinsunil55@gmail.com' target='blank'>
                <img src={email} alt='E-mail' />
              </a>
            </button>
          </div>
          <div>
            <button className='w-8'>
              {' '}
              <a href='https://github.com/nithinsunil' target='blank'>
                <img src={github} alt='Github' />
              </a>
            </button>
          </div>
          <div>
            <button className='w-8'>
              {' '}
              <a
                href='https://www.linkedin.com/in/nithin-s-b3764820b/'
                target='blank'
              >
                <img src={linkedin} alt='LinkedIn' />
              </a>
            </button>
          </div>
        </div> */}
        <div className='flex justify-center mt-8'>
          <button className='w-24 h-8 text-white bg-green-500 hover:bg-green-400 rounded-md'>Resume</button>
        </div>
      </div>
      {/* Small personal description area */}
      <div className='h-1/2 md:w-1/2 flex flex-col justify-center p-4'>
        <div>Hello World,</div>
        <div className='text-2xl font-bold'>I'm Nithin!</div>
        <div className='w-full md:w-3/5 h-2/5 my-4'>
          I'm a highly motivated and detail-oriented UI developer with 9 months
          of experience in developing user-friendly interfaces. Possessing a
          strong understanding of HTML, CSS, and JavaScript to bring designs to
          life.
        </div>
      </div>
    </div>
  );
}

export default Home;
