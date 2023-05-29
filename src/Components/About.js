import React from 'react';

function About() {
  return (
    <div className='flex flex-col p-4 text-center'>
      {/* lg:flex justify-evenly items-center mx-auto mt-24 w-3/4 */}
      <div className=''>
        <h2 className='font-bold text-3xl'>About Me</h2>
      </div>
      {/* w-1/2 grid place-items-center */}
      <div className='mt-6'>
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
          My journey as a web developer began with a deep fascination for
          crafting interactive and visually appealing websites. Over the years,
          I have honed my skills and gained experience in building robust and
          user-friendly web applications. I thrive in dynamic and collaborative
          environments, where I can contribute my creative problem-solving
          abilities and attention to detail.
        </p>{' '}
        <br />
        <p>
          Combining my technical expertise with a passion for delivering
          high-quality code, I consistently strive for excellence in every
          project I undertake. I am dedicated to creating clean and maintainable
          code, ensuring optimal performance and scalability. With a strong
          commitment to continuous learning and a drive to embrace new
          technologies, I am excited to tackle new challenges and contribute to
          innovative web solutions. <br />
        </p>{' '}
        <br />
        <p>
          If you are looking for a web developer who is not only proficient in
          JavaScript, React.js, Next.js, and Vue.js but also possesses a strong
          work ethic, attention to detail, and a genuine passion for creating
          outstanding web experiences, I would love to connect and explore
          potential opportunities together.
        </p>
      </div>
    </div>
  );
}

export default About;
