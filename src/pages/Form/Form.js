import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import DropDown from "../OpcionList"
import Checkbox from "../Checkbox"
import axios from 'axios';
import { useHistory } from "react-router-dom";

const StyledBody = styled.body`
display: flex;
align-items: center;
flex-direction: column; 
justify-content: center;
width: 100%;
min-height: 100%;
padding: 20px;
background: rgba(darken($primary,40%), 0.85);
`
const DivFrom = styled.div`
  display: grid;
  border-radius: 2px 2px 5px 5px;
  border.none
  padding: 10px 20px 20px 20px;
  width: 90%;
  max-width: 520px;
  background: #ffffff;
  position: relative;
  padding-bottom: 80px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const StyledForm = styled.form`
  display: grid;
  border-radius: 2px 2px 5px 5px;
  border.none
  padding: 10px 20px 20px 20px;
  width: 90%;
  max-width: 520px;
  background: #ffffff;
  position: relative;
  padding-bottom: 80px;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.3);
  
  grid-gap: 1rem;
  padding: 1rem;
  margin-top: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const Field = styled.div`
  input {
    box-shadow: 0 2px 3px rgba(0,0,0,0.15);
    argin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0,0,0,0.15);
    font-weight: 500;

    border-color: transparent;
  }

  label {
    font-size: 0.82rem;
    margin-bottom: 5px;
    color: #3faffa;
  }

  display: block;
    padding: 15px 10px;
    margin-bottom: 10px;
    transition: border-width 0.2s ease;
    border-radius: 2px;
    color: #ccc;
    
    &+ i.fa {
        color: #fff;
      font-size: 1em;
      position: absolute;
      margin-top: -47px;
      opacity: 0;
      left: 0;
      transition: all 0.1s ease-in;
    }
    
    &:focus {
      &+ i.fa {
        opacity: 1;
        left: 30px;
      transition: all 0.25s ease-out;
      }
      outline: none;
      color: #444;
      border-color: transparent;
      border-left-width: 35px;
    }
    
`;

const Button = styled.button`

background: blue;
color: #fff; 
display: block;
border: none;

  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  grid-column: 1 / -1;
  hover{
    color: #1883ba;
    background-color: #ffffff;
  }
`;


const Form = ({ onRegister }) => {
  
  const history = useHistory();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [pais,setPais]= useState('');
  const [provincia,setProvincia]=useState('')
  const [data, setData] = useState('');
  const [token, setToken] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [passComp, setPassComp] = useState('');
  function resetFields() {
    setName("");
    setLastname("")
    setId("")
    setPass("")
    setEmail("")
    setPhone("")
    setError(false)
    setErrorEmail(false)
    onRegister();
   //Resetear cokies          
    document.cookie = "person=null; max-age=0;";
    console.log(document.cookie )
  }

  const onselect=(paisSend,provinciaSend)=>{
   setPais(paisSend)
   setProvincia(provinciaSend)
  }

  async function onRegister (person) {
    const response = await axios.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup', person);

    let dataToken = await response.data.token
    
    setToken(dataToken)

    localStorage.setItem('token', dataToken);
  };

  const saveLocaStorage = ({ person  })  => {
    localStorage.setItem('person', person);
 
  };

  
  function saveCookie () {
  let err=(error || errorEmail)?true:false;

    if(err) return;
    const person = { name, lastname, id, email,pais,provincia,pass,phone };
    const  data = `person=${JSON.stringify(person)}`;

    (async function(){
      await  onRegister(person);
    })()

    saveLocaStorage({ person : data })
    history.push('/List');

  }

  return (
    <StyledBody>
        <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        saveCookie();
      }}>

        <DivFrom>
        <Field>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        value={name}
        maxLength="30"
        required  onChange={(e) => setName(e.target.value)}
      />
      </Field>
      <Field>
      <label htmlFor="lastname">Apellidos</label>
      <input
        type="text"
        name="lastname"
        maxLength="30"
        value={lastname}
        required  onChange={(e) => setLastname(e.target.value)}
      />
      </Field>
      
      <Field>
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        name="email"
        value={email}
        required  
        onChange={(e) => {
          const re = /\S+@\S+\.\S+/;
          setErrorEmail(!re.test(e.target.value));
          setEmail(e.target.value)
        }}
      />
      {errorEmail? <span>El correo es invalido</span>:""}
      </Field>
      <Field>
      <label htmlFor="username">teléfono</label>
      <input
        type="number"
        name="phone"
        maxLength={10}
        min="2"
        value={phone}
        required onChange={(e) => setPhone(e.target.value)}
        
      />
      </Field>  
      <Field>
        
      <label htmlFor="password">Constraseña</label>
      <input
        type="password"
        name="pass"
        maxLength="6"
        value = {pass}
       required 
       onChange={(e) => { 
        setError(null)
        setPass(e.target.value)
        setPassComp('')
        let regex = new RegExp("[a-zA-Z][0-9]")

        if(e.target.value.length == 6){
          setError(!(regex.test(e.target.value))
          )
        }
       }
     }
        />
      {error? <span>caracteres alfanumericos</span>:""}
      </Field>


      <Field>
      <label htmlFor="username">Repetir Constraseña</label>
      <input
        type="password"
        maxLength="6"
        value={passComp}
        required 
        onChange={(e) => { 
          let passEqu = e.target.value
          setPassComp(e.target.value)
          setErrorPass(null)
       if (passEqu.length == 6){
         if(passEqu !==pass)
         setErrorPass(true)
        }
       }
        
        }
        
      />
            {errorPass? <span>La contraseña no son iguales</span>:""}
      </Field>
        </DivFrom>
        

        <DropDown onselect={onselect} required />
      
        <Checkbox/>
  
      <Button  type="submit" >Save</Button>
      
        <Button type="button"  
      onClick={(e) => {
        e.preventDefault();
        resetFields();
      }}>Reset</Button>
     

 
    </StyledForm>
    </StyledBody>
    

       
  );
};

export default Form;
