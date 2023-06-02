import React from 'react';

function Portfolio() {
  return (
    <div className='flex flex-col p-4 text-center mt-16'>
      {/* flex justify-evenly items-center mx-auto mt-24 w-3/4 */}
      <div>
        <h2 className='font-bold text-3xl'>Portfolio</h2>
      </div>
      {/* WORK EXPERIENCE */}
      <div>
        <h3 className='text-2xl font-bold mt-6'>Work experience</h3>
      </div>
      <div>
        <h3 className='text-lg font-bold mt-4'>
          • McFadyen Digital, Infopark, Kochi •
        </h3>
        <h4>May 2022 - Jan 2023</h4>
        <div className='mt-2'>
          Worked on projects like ShopBazaar and Bay Supply as a UI developer
          focusing primarily on UI bugs, ADA compliance, style concerns etc.
        </div>
      </div>
      <div>
        <h3 className='text-lg font-bold mt-4'>
          • Luminar Technolab, Kakkanad •
        </h3>
        <h4>Nov 2021 - Apr 2022</h4>
        <div className='mt-2'>
          Developed websites utilising the MERN stack and completed various
          projects using HTML, CSS, React etc. ({' '}
          <span className='italic'>
            Restaurants lister, Bank Application, The Coffee Lover Website
          </span>{' '}
          )
        </div>
      </div>
      {/* EDUCATION */}
      <div>
        <h3 className='text-2xl font-bold mt-6'>Education</h3>
      </div>
      <div>
        <h3 className='text-lg font-bold mt-4'>
          • Siena College of Professional Studies, Edakochi •
        </h3>
        <h4>2017-2020</h4>
        <div className='mt-2'>Bachelor of Computer Applications</div>
      </div>
      <div>
        <h3 className='text-lg font-bold mt-4'>• SNMGBHSS, Cherthala •</h3>
        <h4>2015-2017</h4>
        <div className='mt-2'>Computer Science</div>
      </div>
    </div>
  );
}

export default Portfolio;
