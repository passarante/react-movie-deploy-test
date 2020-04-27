import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { StyledActor } from '../styles/StyledActor';
import NoImage from '../images/no_image.jpg';

const Actor = ({ actor }) => {
  return (
    <StyledActor>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actorthumb"
      />
      <span className="actor-name">{actor.name}</span>
      <span className="actor-character">{actor.character}</span>
    </StyledActor>
  );
};

export default Actor;
