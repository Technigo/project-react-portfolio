import styled from 'styled-components';

export const AboutWrapper = styled.div`
  padding: 6%;
  padding-right: 5%;
  padding-left: 5%;
  background-color: var(--vivaMagentaDark);
@media (min-width: 900px) {
padding-left: 10%;
padding-right: 10%;
  }
@media (min-width: 1200px) {
padding-left: 16%;
padding-right: 16%;
  }
@media (min-width: 1500px) {
padding-left: 25%;
padding-right: 25%;
}
`;

export const Line = styled.span`
    width: 30px;
    border: 1px solid #337F96;
    display: inline-block;
    margin-bottom: 4px;
`;

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    background-color: #337F96;
    border-radius: 50%;
    display: inline-block;
`;

export const LinkedPrompt = styled.div`
display: flex;
justify-content: center;
`

export const LinkedBtn = styled.button`
background-color: transparent;
border: none;
font-size: 2rem;
img{
width: 60%;
}
&:hover{
  transform: scale(1.2);
  cursor: pointer;
}
`

export const About = styled.p`
  line-height: 1.9rem;
  font-size: 1.2rem;
  margin: 0 auto;
  color: #DCCFB4;

@media (min-width: 1200px) {
  line-height: 1.8rem;
  font-size: 1.3rem;
  }
@media (min-width: 1500px) {
  line-height: 2rem;
  font-size: 1.3rem;
}
`;
