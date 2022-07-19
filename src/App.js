import { useState } from "react"
import './App.css';
import Planets from "./components/Planets"
import People from "./components/People"
import styled from "styled-components"
/*import { ReactQueryDevtools } from '@tanstack/react-query-devtools'*/

function App() {
  
  let Button = styled.button`
  background-color: transparent;
  padding: 8px 12px;
  border-radius: 10px;
  border: 2px solid yellow;
  color: yellow;
  margin-right: 20px;
  outline: none;
  `
  
  let Header = styled.header`
    width: 100vw;
    padding: 15px;
    text-align: center;
    
    h3{
      color: yellow;
      margin:10px auto;
    }
  `
  
  let Body = styled.div`
  text-align: center;
  overflow-x: hidden;
  margin-bottom: 20px;
  
  & > div{
    margin: 0 auto;
  }
  `
  
  
  
  const [page, setPage] = useState("planets")
  
  return (
    <Body>
      <Header>
        <h3>Star Wars Info</h3>
      </Header>
      <div>
      <Button onClick = {() => setPage("planets")}>
        Planets
      </Button>
       <Button onClick = {() => setPage("people")}>
        People
      </Button>
      </div>
      
      {
        page === "planets" ? <Planets /> : <People />
      }
      
    </Body>
  );
}

export default App;
