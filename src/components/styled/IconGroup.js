import styled from 'styled-components'

export const IconGroup = styled.div`
display: flex;
justify-content: ${(props) => (props.header ? 'flex-end' : 'center')};
margin-bottom: 1em;
`