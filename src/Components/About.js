import React from 'react';

function About() {
  return (
    <div className='flex flex-col p-4 text-center'>
        {/* lg:flex justify-evenly items-center mx-auto mt-24 w-3/4 */}
      <div className=''><h2 className='text-lg font-bold'>About Me</h2></div>
      {/* w-1/2 grid place-items-center */}
      <div className='mt-6'>
        {/* w-1/2 */}
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>
    </div>
  );
}

export default About;
