import React from 'react';
import styled from 'styled-components'
import { OuterWrapper } from './OuterWrapper';

const OtherProjects = () => {
	return (
		<OuterWrapper primary>
			<FeaturedMoviesStyler>
				<article className="project">
					<a href="https://movie-catalogue-project.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="project-image-group">
							<img src="images/project-movies.png" alt="movies" />
							<div className="project-overlay">
								<h5 className="project-overlay-title" aria-hidden="true">
							Project movies
								</h5>
							</div>
						</div>
						<h5 className="project-title" aria-hidden="true">Project movies</h5>
						<p className="project-paragraph">
					Imdb alike website where you can see description of movies and their raiting.
						</p>
					</a>
					<div className="tag-wrapper">
						<p>HTML5</p>
						<p>CSS</p>
						<p>JavaScript ES6</p>
						<p>React</p>
						<a href="https://github.com/Petrasoderstrom1612/project-guess-who" target="_blank" className="repo-tag" rel="noreferrer"><p>GitHub Repo</p>
						</a>
					</div>
				</article>
				<article className="project">
					<a href="https://star-survey.netlify.app/" target="_blank" rel="noopener noreferrer">
						<div className="project-image-group">
							<img src="images/project-survey.png" alt="start survey" />
							<div className="project-overlay">
								<h5 className="project-overlay-title" aria-hidden="true">
								Survey
								</h5>
							</div>
						</div>
						<h5 className="project-title" aria-hidden="true">Survey</h5>
						<p className="project-paragraph">
						A survey form to be filled in with various input fields made in React.
						</p>
					</a>
					<div className="tag-wrapper">
						<p>HTML5</p>
						<p>CSS</p>
						<p>REACT</p>
						<a href="https://github.com/Petrasoderstrom1612/project-survey" target="_blank" className="repo-tag" rel="noreferrer">
							<p>GitHub Repo</p>
						</a>
					</div>
				</article>
			</FeaturedMoviesStyler>
		</OuterWrapper>
	)
}

export default OtherProjects;

const FeaturedMoviesStyler = styled.div`
.project {
}

.project-image-group {
  display: flex;
  justify-content: center;
  position: relative;
}
.project-overlay-title {
  background-color: transparent;
  position: absolute;
  color: #fff;
  font-weight: 700;
  align-self: center;
  text-transform: uppercase;
}
.project-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}
.project-overlay:hover {
  background-color: transparent;
  color: transparent;
}
.project-overlay:hover .project-overlay-title {
  display: none;
}
.project-title {
  color: rgb(255, 119, 119);
  font-weight: 700;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: left;
  margin: 10px 0 0;
  padding-top: 4%;
}
.tag-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
 
}
.tag-wrapper p {
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: bold;
  background-color: rgb(216, 0, 166);
  text-decoration: none;
  font-size: 12px;
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
}
.social-tag {
  background-color: rgb(255, 119, 119);
  padding: 5px;
  margin: 0;
  border-radius: 5px;
  height: 12px;
  width: 12px;
}
.social-tag:hover {
  opacity: 75%;
  transition: 0.3s ease;
}
.repo-tag:hover {
  opacity: 75%;
  transition: 0.3s ease;
}
`