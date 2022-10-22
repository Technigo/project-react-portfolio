/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components'
import { OuterWrapper } from './OuterWrapper';
import moviesImage from '../images/project-movies.PNG';
import happyThoughtsImage from '../images/project-happy-thoughts.png';
import surveyImage from '../images/project-survey.PNG';
import musicImage from '../images/project-music.PNG';

const OtherProjects = () => {
	return (
		<OuterWrapper primary>
			<FeaturedMoviesStyler className="innerwrapper">
				<h3>Featured projects</h3>
				{/* -------------PROJECT MOVIES ------------------*/}
				<div className="project-flex-wrapper">
					<div className="project-flex-child1">
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
							<p>HTML</p>
							<p>CSS</p>
							<p>React</p>
							<p>API</p>
							<p>JSX</p>
							<a href="https://github.com/Petrasoderstrom1612/project-movies" target="_blank" className="repo-tag" rel="noreferrer"><p>GitHub</p>
							</a>
						</div>
					</div>
					{/* -------------PROJECT SURVEY ------------------*/}
					<div className="project-flex-child2">
						<a href="https://star-survey.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="project-image-group">
								<img src={surveyImage} alt="start survey project" />
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
							<p>HTML</p>
							<p>CSS</p>
							<p>REACT</p>
							<a href="https://github.com/Petrasoderstrom1612/project-survey" target="_blank" className="repo-tag" rel="noreferrer">
								<p>GitHub</p>
							</a>
						</div>
					</div>
				</div>
			</FeaturedMoviesStyler>
			<FeaturedMoviesStyler className="innerwrapper">
				{/* -------------PROJECT MUSIC ------------------*/}
				<div className="project-flex-wrapper">
					<div className="project-flex-child1">
						<a href="https://spotify-alike-app.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="project-image-group">
								<img src={musicImage} alt="music releases project" />
								<div className="project-overlay">
									<h5 className="project-overlay-title" aria-hidden="true">
											Project music releases
									</h5>
								</div>
							</div>
						</a>
						<h5 className="project-title" aria-hidden="true">Project movies</h5>
						<p className="project-paragraph">
						A responsive website using data from Spotify to show album and single releases.The user can hover over an album to get into the list of songs in order to play them.
						</p>
						<div className="tag-wrapper">
							<p>HTML</p>
							<p>CSS</p>
							<p>REACT</p>
							<p>API</p>
							<a href="https://github.com/Petrasoderstrom1612/project-music-releases" target="_blank" className="repo-tag" rel="noreferrer"><p>GitHub</p>
							</a>
						</div>
					</div>

					<div className="project-flex-child2">
						<a href="https://happy-thoughts-alias-twitter.netlify.app/" target="_blank" rel="noopener noreferrer">
							<div className="project-image-group">
								<img src={happyThoughtsImage} alt="happy thoughts project" />
								<div className="project-overlay">
									<h5 className="project-overlay-title" aria-hidden="true">
									Twitter alike app
									</h5>
								</div>
							</div>
						</a>
						<h5 className="project-title" aria-hidden="true">Twitter alike app</h5>
						<p className="project-paragraph">
						A react app with useState and useEffect together with an api simulating Twitter. The user can write posts and like others.
						</p>
						<div className="tag-wrapper">
							<p>HTML5</p>
							<p>CSS</p>
							<p>REACT</p>
							<p>API</p>
							<p>JSX</p>
							<a href="https://github.com/Petrasoderstrom1612/project-happy-thoughts" target="_blank" className="repo-tag" rel="noreferrer">
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

/* const ProjectWrapperStyler = styled.div`
margin-left: 2vw;
margin-right: 2vw;` */

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
  bottom: 0;
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
	justify-content: center;
	width: 100%;
}

.tag-wrapper p {
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: bold;
  background-color: rgb(216, 0, 166);
  text-decoration: none;
  font-size: 10px;
  line-height: 10px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
}
.repo-tag {
	text-decoration: none;
}
.repo-tag:hover {
  opacity: 75%;
  transition: 0.3s ease;
}
}
/* -----------IPAD---------- */
@media (min-width: 668px) {
	img {
  width: 30vw;
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
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
	width: 30vw;
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
	justify-content: center;
	margin-left: 3%;
	margin-right: 3%;
 
}
.tag-wrapper p {
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: bold;
  background-color: rgb(216, 0, 166);
  text-decoration: none;
  font-size: 1rem;
  line-height: 10px;
  padding: .5rem;
  margin: 3px;
  border-radius: 5px;
	
}
.repo-tag {
	text-decoration: none;
}

.repo-tag:hover {
  opacity: 75%;
  transition: 0.3s ease;
	text-decoration: none;
}

.project-flex-wrapper{
	display: flex;
	/* justify-content: center; */
}
.project-flex-child1{
	width: 48%;
	margin-left:1%;
	margin-right:1%;
}

.project-flex-child2{
	width: 50%
}

}

@media (min-width: 1024px) {
}
`