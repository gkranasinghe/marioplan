import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>project title - {id}</span>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Net Ninja</div>
          <div>2nd September</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
