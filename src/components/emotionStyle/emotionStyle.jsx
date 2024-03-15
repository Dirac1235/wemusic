import styled from "@emotion/styled";

export const DetailsDiv = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
`;
export const DetailsSection = styled.header`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
export const DetailsOverview = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: var(--color-background-100);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;
export const DetailsOverviewH = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 0.4rem;
  line-height: 1.1;
`;
export const LoaderP = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 4.8rem;
`;
export const SummaryDiv = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
`;
export const SummaryH = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
`;
export const NumResultsP = styled.p`
justify-self: end;
font-size: 1.8rem;
`
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const LogoSpan = styled.span`
  font-size: 3.2rem;
`;
export const LogoH = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;
`;
export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: var(--color-primary);
  border-radius: 0.9rem;
`;