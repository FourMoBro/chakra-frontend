import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

import { FormControl, TextArea, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'

function TextAreaStyled (props) {
  const { label, name, ...rest } = props
  return (
    // <div className='form-control'>
    //   <label htmlFor={name}>{label}</label>
    //   <Field as='textarea' id={name} name={name} {...rest} />
    //   <ErrorMessage component={TextError} name={name} />
    // </div>

    <Field name={name} {...rest}>
      {({field, form}) => (          
            <FormControl id={name} isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel>{label}</FormLabel>
              <TextArea {...field} id={name} placeholder={name} />
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>  
            </FormControl>
        )
      }
    </Field>
    
  )
}

export default TextAreaStyled