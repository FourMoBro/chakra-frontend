import React from 'react'
import { Field, ErrorMessage } from 'formik'

import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
// import TextError from './TextError'

function BasicInput (props) {
  const { label, name, ...rest } = props
  return (

    <Field name={name} {...rest}>
      {({field, form}) => (          
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} id={name} placeholder={name} />
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
              <FormHelperText>What should this say, if anything?</FormHelperText>  
            </FormControl>
        )
      }
    </Field>

  )
}

export default BasicInput