import React,{useState, useEffect} from "react";

function App(){

    const [isLoaded,setIsLoaded]=useState(false)
    const [dog, setDog]=useState("")
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            setIsLoaded(true);
            setDog(data.message)
            
        })

    },[]);

    if(!isLoaded) {return <p>Loading...</p>}
    return (
        <img alt="A Random Dog" src={dog}></img>
    )
    
   






}
export default App
