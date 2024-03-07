
import styled from "@emotion/styled"
import Weeknd from "../../assets/weeknd.jpeg"
const Card = styled.div`
 border:solid black 1px;
 max-width:300px;
 max-height:300px;
 border-radius:10px;
`
const Img = styled.img`
    width:100%;
    height:85%;
    border-radius:10px 10px 0px 0px;
`

function MusicCard() {
    return(
        <Card>
            <Img src={Weeknd} alt="" />
            <p> Hello World!</p>
        </Card>
    )

}
export default MusicCard