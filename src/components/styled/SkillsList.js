import styled from 'styled-components'

export const SkillsDiv = styled.div`
margin: 0em auto;
max-width: 640px;
display: flex;
justify-content: space-evenly;
text-align: center;

& ul {
    list-style: none;
}

& li {
    padding: 0.1em;
}
& li:first-child {
    color: #112D4E;
    padding: 0.5em;
    border-radius: 1em;
    margin-bottom: 0.7em;  
}
`