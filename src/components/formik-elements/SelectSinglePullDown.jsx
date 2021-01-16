import React from 'react'
import { Field } from 'formik'


import { FormControl, FormLabel, Select } from "@chakra-ui/react"

function SelectSinglePullDown (props) {
  const { label, name, options, ...rest } = props
  return (

    <Field name={name} {...rest}>
      {({field, form}) =>(
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel>{label}</FormLabel>
          <Select id={name} {...rest} placeholder="Pull Down for Options">
            {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
            })}
          </Select>
        </FormControl>
      )}
    </Field>

  )
}

export default SelectSinglePullDown