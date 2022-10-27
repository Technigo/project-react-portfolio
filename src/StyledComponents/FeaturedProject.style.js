import styled from 'styled-components';

export const FeatureLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 20px;
`;

export const FeaturedContainer = styled.section`
	width: 100vw;
	display: flex;
	background-color: rgb(238, 238, 238);
	flex-direction: column;
	justify-content: space-evenly;
`;

export const DetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
