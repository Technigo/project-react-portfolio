import React from 'react';
import styled from 'styled-components'
import { OuterWrapper } from './OuterWrapper';
import moviesImage from '../images/project-movies.PNG';
import happyThoughtsImage from '../images/project-happy-thoughts.png';

const OtherProjects = () => {
	return (
		<OuterWrapper primary>
			<FeaturedMoviesStyler className="innerwrapper">
				<div className="project-grid-wrapper">
					<div className="project-grid-child1">
						<a href="https://movie-catalogue-project.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="project-image-group">
								<img src={moviesImage} alt="movies" />
								<div className="project-overlay">
									<h5 className="project-overlay-title" aria-hidden="true">
											Project movies
									</h5>
								</div>
							</div>
						</a>
						<h5 className="project-title" aria-hidden="true">Project movies</h5>
						<p className="project-paragraph">
									Imdb alike website where you can see description of movies and their raiting.
						</p>
						<div className="tag-wrapper">
							<p>HTML5</p>
							<p>CSS</p>
							<p>JavaScript</p>
							<p>React</p>
							<a href="https://github.com/Petrasoderstrom1612/project-movies" target="_blank" className="repo-tag" rel="noreferrer"><p>GitHub</p>
							</a>
						</div>
					</div>

					<div className="project-grid-child2">
						<a href="https://star-survey.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="project-image-group">
								<img src={happyThoughtsImage} alt="start survey" />
								<div className="project-overlay">
									<h5 className="project-overlay-title" aria-hidden="true">
										Survey
									</h5>
								</div>
							</div>
						</a>
						<h5 className="project-title" aria-hidden="true">Survey</h5>
						<p className="project-paragraph">
								A survey form to be filled in with various input fields made in React.
						</p>
						<div className="tag-wrapper">
							<p>HTML5</p>
							<p>CSS</p>
							<p>REACT</p>
							<a href="https://github.com/Petrasoderstrom1612/project-survey" target="_blank" className="repo-tag" rel="noreferrer">
								<p>GitHub</p>
							</a>
						</div>
					</div>
				</div>
			</FeaturedMoviesStyler>
		</OuterWrapper>
	)
}

export default OtherProjects;

const FeaturedMoviesStyler = styled.div`
@media (min-width: 375px) and (max-width: 667px) {
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: 20% 80%;
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

.tag-wrapper {
  display: flex;
  flex-direction: row;
	justify-items: center;
 
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
}

@media (min-width: 668px) {
	img {
  width: 20vw;
  height: 250px;
  object-fit: cover;
  object-position: 20% 80%;
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
	width: 20vw;
}
.project-overlay:hover {
  background-color: transparent;
  color: transparent;
}
.project-overlay:hover .project-overlay-title {
  display: none;
}

.tag-wrapper {
  display: flex;
  flex-direction: row;
	justify-items: center;
 
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

.project-grid-wrapper{
	display: flex;
}
.project-grid-child1{
	width: 50%;
}

.project-grid-child1{
	width: 50%;
}
}

@media (min-width: 1024px) {
}
`