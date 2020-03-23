import React from 'react';

const ProjectSummary = ({ title }) => {
  return (
    <div>
      <div className='card z-depth-0 project-summary yellow lighten-4'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{title}</span>
          <p>Posted by Ken Mugy</p>
          <p className='grey-text'>21 march</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
