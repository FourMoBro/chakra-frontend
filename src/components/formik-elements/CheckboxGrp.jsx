import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from "@chakra-ui/react"

function CheckboxGrp (props) {
  const { label, name, options, ...rest } = props
  return (
    // <div className='form-control'>
    //   <label>{label}</label>
    //   <Field name={name}>
    //     {({ field }) => {
    //       return options.map(option => {
    //         return (
    //           <React.Fragment key={option.key}>
    //             <input
    //               type='checkbox'
    //               id={option.value}
    //               {...field}
    //               {...rest}
    //               value={option.value}
    //               checked={field.value.includes(option.value)}
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
          <CheckboxGroup>
            <Stack spacing={4} direction="row">
            {options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <Checkbox key={option.value} id={option.value} {...field}{...rest}
                value={options.value} checked={field.value === option.value} />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }
            </Stack>
          </CheckboxGroup>
          <FormHelperText>Select one of these radios</FormHelperText>
        </FormControl>
      )}
    </Field>
  )
}

export default CheckboxGrp