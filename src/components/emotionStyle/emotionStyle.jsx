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
  margin-left: 1.5rem;
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
`;
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
export const NotFoundH = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 10%;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 2.4rem;

  height: 1.8rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: var(--color-red);
  color: var(--color-background-900);
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-red-dark);
  }
`;
export const AddButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-text);
  border: none;
  border-radius: 10rem;
  font-size: 1.4rem;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-primary-light);
  }
`;
export const EditButton = styled.button`
  width: 80%;
  padding: 1.2rem;
  border: 1px solid var(--color-primary-light);
  border-radius: 1rem;
  background-color: var(--color-primary);
  font-size: 1.5rem;
  &:hover {
    background-color: var(--color-primary-light);
  }
`;
export const BackButton = styled.button`
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  height: 3.2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  color: black;
  box-shadow: 1px 1px 1px 1px rgba(157, 155, 157, 0.996);
  font-family: sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: gray;
    transition: background-color 0.3s;
  }
`;
export const BackCButton = styled.button`
  padding: 0.5rem;
  margin-top: 1rem;
  margin-left: 2rem;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  color: black;
  box-shadow: 1px 1px 1px 1px rgba(157, 155, 157, 0.996);
  font-size: 2rem;
  cursor: pointer;
  width: 4rem;
  &:hover {
    background-color: gray;
    transition: background-color 0.3s;
  }
`;
export const Box = styled.div`
  width: 100rem;
  max-width: 150rem;
  background-color: var(--color-background-500);
  border-radius: 0.9rem;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    width: 0;
    background: var(--color-background-900);
  }
`;
