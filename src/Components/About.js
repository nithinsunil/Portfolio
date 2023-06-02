import React from 'react';

function About() {
  return (
    <div className='flex flex-col p-4 text-center'>
      {/* lg:flex justify-evenly items-center mx-auto mt-24 w-3/4 */}
      <div className=''>
        <h2 className='font-bold text-3xl'>About Me</h2>
      </div>
      {/* w-1/2 grid place-items-center */}
      <div className='mt-6 lg:w-1/2 md:w-3/4 mx-auto'>
        {/* w-1/2 */}
        <p>
          {' '}
          My name is Nithin, a passionate web developer who loves what I do.
          With a strong focus on JavaScript and frameworks like React.js,
          Next.js, and Vue.js, I strive to create exceptional web experiences.
          Constantly seeking opportunities to expand my skills and stay
          up-to-date with the latest industry trends, I am currently actively
          looking for new opportunities in the web development field.
        </p>{' '}
        <br />
        <p>
          During my time as a UI developer, I have gained expertise in several
          key technologies, including HTML, CSS, JavaScript, React.js, and
          Tailwind CSS. These tools have allowed me to create visually appealing
          and highly functional websites and web applications. I am constantly
          expanding my skill set and staying up-to-date with the latest industry
          trends to ensure that I can deliver modern and innovative solutions.
        </p>{' '}
        <br />
        <p>
          Collaboration is at the heart of my work philosophy. I thrive in a
          team environment, where I can contribute my skills and learn from
          others. I value effective communication and believe that open and
          transparent collaboration leads to the best outcomes. I enjoy working
          closely with designers, project managers, and other stakeholders to
          ensure that the final product exceeds expectations.
          <br />
        </p>{' '}
        <br />
        <p>
          If you're looking for a dedicated and motivated team member who is
          passionate about crafting exceptional web experiences, I would love to
          hear from you. Please feel free to browse through my portfolio and
          explore some of the projects I've worked on. Thank you for taking the
          time to visit, and I look forward to connecting with you soon!
        </p>
      </div>
    </div>
  );
}

export default About;
