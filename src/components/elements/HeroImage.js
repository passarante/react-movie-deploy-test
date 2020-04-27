import React from 'react';

import { StyledHeroImage } from '../styles/StyledHeroImage';
import { Link } from '@reach/router';

const HeroImage = ({ image, title, text, movieId }) => (
  <Link to={`/${movieId}`}>
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  </Link>
);

export default HeroImage;
