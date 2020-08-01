import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    planetStatus,
    user: { name },
    status,
  },
}) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">
          {status} {name.trim().split(' ')[0]}
        </h2>
        <p>{bio}</p>
        <div className="line" />
      </Fragment>
    )}
    <h2 className="text-primary">The status of the planet</h2>
    <div className="planetStatus">
      {planetStatus.map((skill, index) => (
        <div key={index} className="p-1">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
