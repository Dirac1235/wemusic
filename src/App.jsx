import styled from '@emotion/styled'
import NavBar from './components/fragments/NavBar'
import SideBar from './components/fragments/SideBar'
const Button = styled.button`
padding: 10px;
background-color: lightblue;
font-size: 15px;
border-radius: 4px;
color: black;
font-weight: bold;
&:hover {
  color: white;
}
`
const Container = styled.div`

  display:grid;
  grid-template-rows:50px auto;
  grid-template-columns:200px 200px 200px;

`

function App() {

  return (
    <Container>
      
      <NavBar />
      <SideBar />
    </Container>
  )
}

export default App
