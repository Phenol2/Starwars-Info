import styled from "styled-components"


let Wrapper = styled.div`
color: white;
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
padding: 20px 15px;
background-color: rgba(0, 0, 0, 0.6);
margin-block: 15px;
margin-inline: auto;
gap: 10px;

  & > div:nth-child(1){
    font-weight: bold;
    text-align: left;
    flex: 2;
  }
`

let Info = styled.div`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
    margin-block: 8px;
`

let Birth = styled.div`
    font-size: 11px;
    color: rgba(255, 255, 255, 0.8);
    flex: 1;
    text-align: right;
    line-height: 20px;
    font-weight: bold;
`


const People = ({ name, birth_year, gender }) => {
  return (
    <Wrapper>
          <div fw = "bold">
        <div>
      {
        name
      }
        </div>
        <Info>
        Gender:  <span>{gender}</span>
        </Info>
      </div>
      <Birth>
        Birth Year:  <span>{ birth_year }</span>
      </Birth>
    </Wrapper>
    )
}

export default People;