import React from 'react';

const About = () =>{
  return (
    <div className='about col-sm-offset-1 col-sm-6'>
      <h2>About</h2>
      <p>
        This app is written as a simple starter kit for a React application using Redux, React Router and React Form.
      </p>
      <p>
        It includes the components and setup I tend to use, but if you like it, feel free to use it as it is or clone.
      </p>
      <br />
      <div>
        <h3>To Do</h3>
        <ul>
          <li>Add log in with passport</li>
          <li>File upload</li>
          <li>Add deployment start script to Webpack.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
