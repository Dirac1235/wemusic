import styled from '@emotion/styled'
import NavBar from './components/fragments/NavBar'
import SideBar from './components/fragments/SideBar'
import MusicCard from './components/fragments/MusicCard'

const Container = styled.div`

  display:grid;
  grid-template-columns:20% 80%;
  grid-template-rows: 100px 560px;
  margin:5px;
  
`
const Div = styled.div`
  
  padding:0px;
  display:grid;
  grid-gap:50px;
  grid-template-columns: auto auto auto;
  grid-template-row: 200px auto auto auto;
  grid-column:2 / 3;
  grid-row: 2 / 5;
  max-height:600px;
  overflow-y: auto;

`

function App() {
  const cards = [];
  for (let i = 0; i < 10; i++) {
      cards.push(<MusicCard key={i} />);
  }
  return (
    <Container>
      <SideBar />
      <NavBar />
      <Div>
        {cards}
      </Div>
    </Container>
  )
}

export default App
