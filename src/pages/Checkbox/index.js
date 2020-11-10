
import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from './components/common/Checkbox'


const index = () => {

      return (
          <div>
              <Checkbox
                onChange={e => {
                  console.log('isChecked', e.target.checked)
                      }}>
                  Acepto </Checkbox><a href='https://www.wolox.com.ar/'>Términos y Condiciones</a>
            
            
          </div>
        
      );
  }
  export default index;