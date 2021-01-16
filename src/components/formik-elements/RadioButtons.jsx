import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

import { Stack, Radio, RadioGroup } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from "@chakra-ui/react"

function RadioButtons (props) {
  const { label, name, options, ...rest } = props
  return (
    // <div className='form-control'>
    //   <label>{label}</label>
    //   <Field name={name} >
    //     {({ field }) => {
    //       return options.map(option => {
    //         return (
    //           <React.Fragment key={option.key}>
    //             <input
    //               type='radio'
    //               id={option.value}
    //               {...field}
    //               {...rest}
    //               value={option.value}
    //               checked={field.value === option.value}
    //             />
    //             <label htmlFor={option.value}>{option.key}</label>
    //           </React.Fragment>
    //         )
    //       })
    //     }}
    //   </Field>
    //   <ErrorMessage component={TextError} name={name} />
    // </div>
    <Field name={name} {...rest}>
      {({field, form}) =>(
        <FormControl as="fieldset" isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel as="legend">{label}</FormLabel>
          <RadioGroup>
            <Stack spacing={4} direction="row">
            {options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <Radio key={option.value} id={option.value} {...field}{...rest}
                value={options.value} checked={field.value === option.value} />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }
            </Stack>
          </RadioGroup>
          <FormHelperText>Select one of these radios</FormHelperText>
        </FormControl>
      )}
    </Field>
  )
}

export default RadioButtons