import styled from 'styled-components';

export const OuterWrapper = styled.div`
background-color: ${(props) => (props.primary ? '#ff777729;' : 'rgba(255, 119, 119, 0.06)')};
width: 100vw;
`;