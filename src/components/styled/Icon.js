import styled from 'styled-components'

export const Icon = styled.img`
height: ${(props) => (props.header ? '30px' : '50px')};
max-width: auto;
margin: ${(props) => (props.header ? '0.3em' : '1.2em')}; 

&:hover {
    transform: translateY(-0.20em);
    cursor: pointer;
}

@media only screen and (min-width: 480px) {
    height: ${(props) => (props.header ? '30px' : '100px')};
    margin: {(props) => (props.header ? '0.3em' : '1.5em')}; 
}

@media only screen and (min-width: 770px) {
    height: ${(props) => (props.header ? '50px' : '100px')};
    margin: ${(props) => (props.header ? '1em' : '1.5em')};
}
`