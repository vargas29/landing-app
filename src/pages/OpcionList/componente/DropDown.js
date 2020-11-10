import React, { useState } from "react";
import styled from "styled-components";



const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

 const  DropDown =  ({ titleList,options, onClicked }) => {

  const list=options
console.log(titleList)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [valueId, setValueId] = useState();

  const toggling = () => {
  
    setIsOpen(!isOpen);
  }

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    
    let result = options.find(function (option) { 

      if (option.name ==value ){
      return option.id
      }
  }); 
 
    
    if (selectedOption){
     
      onClicked(result);
    }
    
   
  };


  return (
    <div>
      <DropDownContainer>
        <DropDownHeader 
         onClick={(e) => {
          e.preventDefault();
          toggling();
        }}
        >
          {selectedOption || titleList}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {list.map(option => (
                <ListItem onClick={onOptionClicked(option.name)}    key={Math.random()}>
                  {option.name} 
              
                </ListItem>
              )
              
              )}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
      
    </div>
     
    
  );
}
export default DropDown;