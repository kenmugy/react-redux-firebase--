import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  let { id } = useParams();
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            porro obcaecati assumenda vel aperiam labore est aspernatur
            consequatur blanditiis nesciunt error ipsum mollitia quidem quis
            quas asperiores, quaerat, sed iste!
          </p>
        </div>
        <div className='card-action lighten-4 grey-text'>
          <div className=''>Posted by Ken Mugabi</div>
          <div className=''>2nd Sept, 2019</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
