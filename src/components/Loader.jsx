import styled from "@emotion/styled";

const LoaderP = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 4.8rem;
`;
export function Loader() {
  return <LoaderP >Loading...</LoaderP>;
}
