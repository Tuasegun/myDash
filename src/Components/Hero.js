import React from 'react';
import styled from 'styled-components'

const Hero = ({greeting, name, subtext}) => {
  return (
    <HeroStyle>
        <p className="greeting">{greeting} <span className='greetedName'>{name}</span></p>
        <p class="subtext">{subtext}</p>
  </HeroStyle>
  );
};

export default Hero;

const HeroStyle = styled.div`
    .greeting{
        font-size: 1.875em;
        font-weight: normal;
        font-style: normal;
        color: #01133C;
        line-height: 1.9em;

        .greetedName{
            font-weight: bold;
        }
    }

    .subtext{
        font-size: 0.875em;
        color: #01133C93;
        line-height: 0.9em;
    }
    
`