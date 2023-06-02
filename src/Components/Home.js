import React from 'react';
import avatar from '../assets/nithin.png';

function Home() {
  const handleClick = () => {
    const resumeUrl = process.env.PUBLIC_URL + 'resume/resume.pdf';
    window.open(resumeUrl, '_blank');
  };
  return (
    <div className='flex flex-col md:flex-row justify-center mt-24'>
      {/* Avatar and resume buttons */}
      <div>
        <div className='flex mx-auto h-1/2 w-4/5 md:justify-center md:w-4/5 md:mx-0'>
          <img src={avatar} alt='Avatar' />
        </div>
        <div className='flex justify-center md:w-4/5 mt-8'>
          <button
            onClick={handleClick}
            className='w-28 h-9 text-white bg-green-500 hover:bg-green-400 rounded-md'
          >
            Resume
          </button>
        </div>
      </div>
      {/* Small personal description area */}
      <div className='mb-24 md:mb-64 md:w-1/2 flex flex-col justify-center p-4'>
        <div>Hello World,</div>
        <div className='text-2xl font-bold'>I'm Nithin!</div>
        <div className='w-full md:w-4/5 h-2/5 my-4'>
          A highly motivated UI developer with 9 months' experience in HTML, CSS,
          JavaScript. Actively seeking opportunities to contribute expertise in
          user-friendly interfaces and collaborate on exciting projects.
        </div>
      </div>
    </div>
  );
}

export default Home;
