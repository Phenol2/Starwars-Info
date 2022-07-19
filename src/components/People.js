import { useQuery } from "react-query"
import Person from "./Person"
import styled from "styled-components"



let Title = styled.h1`
        color: white;
`


const fetchApi = async () => {
    let res = await fetch('https://swapi.dev/api/people/')
    
    return res.json()
  }
  

const People = () => {
  
  
  
const {data, error, isError, isLoading } = useQuery('people', fetchApi)

if(isLoading){
        return <div>Loading...</div>;
    }
if(isError){
        return <div>Error! {error.message}</div>
    }
    
console.log(data.results)
return (
   <div>
        <Title>People</Title>
        {
            data.results.map((post, index) => {
                return <Person {...post}/>
            })
            
        }
    
   </div>
  )
}

export default People;