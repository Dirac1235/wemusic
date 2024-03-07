import styled from "@emotion/styled";
const Nav = styled.nav` 
    border: gray solid 2px;
    border-radius: 10px;
    max-height:50px;
    width:79vw;
    position: fixed;
    right:20px;
    grid-column:2 / 3;
`
const Div = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:end;
`
const P = styled.p`
    padding:15px;
    font-weight: bold;
    font-size: 15px;
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