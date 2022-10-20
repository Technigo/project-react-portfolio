import React from 'react';
import styled from 'styled-components';

export const Pitch = () => {
  return (
    <StyledPitch>
      <h3>I am a people-oriented person with a strong background in tourism and recreation.
        I have a solid knowledge of customer service and building long-term relations with clients.
        My previous experience taught me how to handle many tasks
        at the same time, as well as plan and handle stressful situations.
        I am a self-driven, responsible, and punctual person with a strong learning desire
        and the ability to work alone or as a part of a team, and strong interpersonal skills.
        I have excellent time-management and planning skills.
        In addition, I am a swift learner with ease in learning languages, currently proficient in:
        Polish (native speaker),English (Professional working proficiency),
         and Swedish (Professional working proficiency).
        In my free time,  I am learning as well Spanish.
      </h3>
    </StyledPitch>

  )
}

const StyledPitch = styled.h3`
    margin-top: 45px;
    padding: 20px;  
`