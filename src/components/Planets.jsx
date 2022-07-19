import { useState } from "react"
import { useQuery } from "react-query"
import Planet from "./Planet"
import styled from "styled-components"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"



let Title = styled.h1`
        color: white;
`

let Button = styled.button`
  background-color: transparent;
  padding: 8px 12px;
  border-radius: 10px;
  border: 2px solid yellow;
  color: yellow;
  margin-inline: 20px;
  outline: none;
  `
  
  let Page = styled.span` 
      color: yellow;
      font-size: 12px;
      font-weight: bold;
  `



const Planets = () => {
  const [page, setPage]  = useState(1)
  
  const fetchApi = async (page) => {
    let res = await fetch(`https://swapi.dev/api/planets?page=${page}`)
    
    return res.json()
  }
  
  
  
const {
    isLoading,
    isError,
    error,
    data,
    isPreviousData,
  } = useQuery(['planets', page], () => fetchApi(page), { keepPreviousData : true })

if(isLoading){
        return <div>Loading...</div>
    }
if(isError){
        return <div>Error! {error.message}</div>
    }
    
  console.log(data)
return (
   <div>
        <Title>Planets</Title>
        {
            data.results.map((post, index) => {
                return <Planet {...post}/>
            })
        }
        
     
      <Button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 0}
      >
        <AiFillCaretLeft />
      </Button>{' '}
      
       <Page> {page}</Page>
      <Button
        onClick={() => {
          if (!isPreviousData) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData}
      >
        <AiFillCaretRight />
      </Button>
      {/*isFetching ? <span> Loading...</span> : null}{' '*/}

   </div>
  )
}

export default Planets;