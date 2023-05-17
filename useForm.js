import { useState } from "react";

export const useForm = ( initialForm = {}) => {
    const [formState, setFormState] = useState({
        
      });
    
      const onInputChange = ({ target }) => {
        const { name,value } = target;
        setFormState({
          ...formState,
          [ name ]: value
        })
    
      }
      // const onResetForm = () => {
      //   setFormState({
      //     username: '',
      //     email: '',
      //     password: ''
      //   })
      // }
      const onResetForm = () => {
        setFormState( initialForm );
      }
  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
