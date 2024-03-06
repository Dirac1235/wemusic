import styled from "@emotion/styled";
const Nav = styled.nav` 
    margin-top:30px;
    margin-right:10px;
    border: black solid 2px;
    border-radius: 10px;
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
`
const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:end;
`
const P = styled.p`
    padding:15px;
    font-weight: bold;
    font-size: 20px;
    margin-right:20px;

`


function NavBar() {
    return(
        <Nav>
            <Div>
                <P>Profile</P>
                <P>Log Out</P>
            </Div>
        </Nav>
    )
}
export default NavBar;