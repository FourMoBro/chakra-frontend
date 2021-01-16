import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { Box, Radio, Button} from "@chakra-ui/react"

import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SubmitButton,
  SwitchControl,
  TextareaControl
} from "formik-chakra-ui"

function FormikContainerChakra () {
  const dropdownOptions = [    
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ]
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkbox1: '',
    checkboxOptions: [""],
    
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required-custom'),
    description: Yup.string().required('This TextArea need some input'),
    // selectOption: Yup.string().required('Required'),
    radioOption: Yup.string(),
    checkboxOptions: Yup.array().min(0),
    // birthDate: Yup.date().required('Required').nullable()
  })
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, values, errors }) => (
      <Form>       
        <Box borderWidth={1} px={4} w='full' maxW='500px' borderRadius={4} textAlign='center' boxShadow='lg'>
            <InputControl type= "email" name="email" label="Email" />
            <TextareaControl name="description" label="Description" />
            <SelectControl name="selectOption" label="Select one"
              selectProps={{ placeholder: "Select one option"}}>
                {dropdownOptions.map(option => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.key}
                    </option>
                  )
                })}
            </SelectControl>
            <RadioGroupControl name="radioOption" label="Radio Selections" >
                {radioOptions.map(option => {
                  return (
                    <Radio key={option.value} value={option.value}>
                      {option.key}
                    </Radio>
                  )
                })}
            </RadioGroupControl>
            <CheckboxSingleControl name="checkbox1">
              Receive SPAM?
            </CheckboxSingleControl>
            <CheckboxContainer name="checkboxOptions" label="Select one, many or none">
                {checkboxOptions.map(option => {
                  return (
                    <CheckboxControl key={option.value} id={option.value} name={option.key}
                     value={option.value} >
                      {option.key}
                    </CheckboxControl>
                  )
                })}
            </CheckboxContainer>
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
        </Box> 
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainerChakra