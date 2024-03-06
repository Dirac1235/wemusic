import styled from "@emotion/styled"

const Nav = styled.nav`
    border: solid 2px black;
    border-radius: 20px;
    max-width: 20%;
    margin:30px 1px 1px 10px;
    height: 90vh;
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start:1;
`
const P = styled.p`
    padding:10px;
    border-bottom: 1px solid gray;
    font-weight: bold;
    font-size: 20px;
    margin:20px;
`

function SideBar() {

    return (
        <Nav>
            <P>Home</P>
            <P>Playlist</P>
            <P>Profile</P>

        </Nav>
    )
}
export default SideBar