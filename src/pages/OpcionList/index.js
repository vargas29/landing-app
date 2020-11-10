
import React, { useState } from 'react';
import DropDown from "./componente/DropDown";
import Countrys from "../../common/countrys.json"
import States from "../../common/state.json"
import styled from 'styled-components';

const Field = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  input {
    width: 100%;
  }

  label {
    font-size: 0.82rem;
    margin-bottom: 5px;
  }
`;
const Index = ({ onselect }) => {
    
    const listPais = Countrys;
    
    const [listProvincia, setListProvincia] = useState('');
    
    const [isOpen,setIsOpen]= useState(false);

    const onClicked = valor => {
       setIsOpen(true)
       let pais,provincia;
  
       if(valor.id_country){
        Countrys.filter(element => {
          provincia =valor.name
          if(element.id == valor.id_country)
          pais =element.name
          return element.name
        });  
       }
       
      let listProvincias =States.filter(element => element.id_country == valor.id);   
      setListProvincia(listProvincias)
      onselect(pais,provincia)
      };
     
    const titlePais ="Pais"
    return (
        <div>
        <Field>
            <DropDown  titleList={titlePais} onClicked={onClicked}  options= {listPais}/> 
            <DropDown options={listProvincia} onClicked={onClicked} titleList={'provincia'}/>
        </Field>            
        </div>

        
      
    );
}
export default Index;