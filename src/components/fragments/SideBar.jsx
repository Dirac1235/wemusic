import styled from "@emotion/styled"

const Nav = styled.nav`
    border: solid 2px gray;
    border-radius: 20px;
    max-width:100%;
    width:250px;
    height: 98vh;
    grid-column:1 / 2;
    grid-row: 1 / 3;
    position:fixed
`
const P = styled.p`
    padding:10px;
    border-bottom: 1px solid gray;
    font-weight: bold;
    font-size: 15px;
    margin:10px;
    
`
const Head = styled.p`
    margin:20px;
    font-size: 20px;
`
function SideBar() {

    return (
        <Nav>
            <Head>WeMusic</Head>
            <P>Home</P>
            <P>Search</P>
            <P>Playlist</P>

        </Nav>
    )
}
export default SideBar