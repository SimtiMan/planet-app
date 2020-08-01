import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    robots,
    planetName,
    planetStatus,
    planetImage,
    planetDescription,
  },
}) => {
  return (
    <div className="profile bg-light">
      <img src={planetImage} alt="" className="round-img" />
      <div>
        <p>{planetDescription}</p>
        <p>
          <strong>By {status}: </strong>
          {name}
        </p>
        <p>
          <strong>Robots:</strong> {robots}
        </p>
        <p className="my-1">
          {planetName && (
            <span>
              <strong>Planet: {planetName}</strong>
            </span>
          )}
        </p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {planetStatus.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
