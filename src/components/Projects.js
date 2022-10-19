import React, { useState, useEffect } from 'react';
import { BASE_URL } from 'utils/urls';
// import styled from 'styled-components/macro';
import { InnerWrapper, /* Devices, */MainHeader, MainSections, MainText } from 'styles/mainStyles';

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState({});
  const [filteredList, setFilteredList] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        const listItems = [];
        list.map((item) => {
          if (item.fork === true && item.name.includes('project')) {
            listItems.push(item);
          }
          return 0;
        });
        setFilteredList(listItems);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p>Page is loading...</p>
    );
  }

  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainHeader>FEATURED PROJECTS</MainHeader>
        {filteredList.map((project) => {
          return (
            <MainText>{project.name}</MainText>
          );
        })}
      </InnerWrapper>
    </MainSections>
  );
}

export default Projects;

// const ProjectImage = styled.img`
//   opacity: 1.0;
//   width: 300px;
//   padding: 8% 5%;
// `