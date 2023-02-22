/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components/macro'

export const ProjectTags = (project) => {
    return (
        project.tags.map((tag) => (
            <TagWrapperText key={tag.id}>{tag.tech}</TagWrapperText>
        ))
    )
}

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  `
export const TagWrapperText = styled.p`
    font-family: "Roboto", sans-serif;
    color: white;
    font-weight: bold;
    background-color: var(--color-darkGreen);
    font-size: .8rem;
    line-height: .9em;
    padding: .5em;
    margin: .5em .2em .2em 0;
    border-radius: 5px;
  `
export const TagRepo = styled(TagWrapperText)`
@media screen and (min-width: 1024px) {
  &:hover {
    opacity: 75%;
    transition: 0.3s ease;
  }
}`