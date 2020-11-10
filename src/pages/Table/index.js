
import React, { useEffect, useState } from "react";
import List from "../List";

const Index = props => {
    let [tech, setTech] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [data,setData] =  useState([]);

    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
   
    // On initial render of component, fetch data from API.
    useEffect(() => {
      fetch(`http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs`)
        .then(response => response.json())
        .then(data => {setTech(data);
            setData(data)
          console.log("inicial",data)
        }
        );
  
      
    }, []);

    useEffect(() => {
       console.log(searchTerm)
        if(searchTerm){
            let list = ""
           list = data.filter(item =>{
                    let result = item.year
                    return  result.toLowerCase().includes(searchTerm.toLowerCase()) 
                }    
            );
            console.log(list)
            setTech(list);
        }else{
            console.log("n6")
            setTech(data);
        }
      }, [searchTerm]);
     
    return (
        <div>
  <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
            <List  searchResults={tech} />
        </div>
      
    );
}
export default Index;