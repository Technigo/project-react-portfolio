import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: var(--mobile-y-padding);
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--section-x-padding);

    @media (min-width: 668px) {
        width: 40rem;
        align-items: flex-start;
    }
`;

export const Tag = styled.span`
    border: 2px solid var(--color-black);
    text-transform: uppercase;
    font-size: 0.650rem;
    font-weight: 600;
    padding: 6px 10px;
`;
