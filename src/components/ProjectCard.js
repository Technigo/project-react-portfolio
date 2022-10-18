import React, { useEffect, useState } from 'react';
import { Overlay, OverlayText, ProjectBox, ProjectDescription, ProjectTitle, ProjectWrap } from 'styledcomponents/Project';

const ProjectCard = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/Sneezan/repos')
      .then((res) => res.json())
      .then((json) => {
        setRepos(json);
      });
  }, []);
  console.log(repos);

  return (
    <ProjectWrap>
      <ProjectBox> <Overlay> <OverlayText>THE MOVIE PROJECT</OverlayText></Overlay> </ProjectBox>
      <ProjectTitle>Test Project title about</ProjectTitle>
      <ProjectDescription> This is a description of a project</ProjectDescription>
    </ProjectWrap>
  );
};
export default ProjectCard;
