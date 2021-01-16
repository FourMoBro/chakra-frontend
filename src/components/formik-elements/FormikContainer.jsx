import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


import { Box, Flex, Button } from "@chakra-ui/react"

function FormikContainer () {
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
    checkboxOption: [],
    birthDate: null
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required-custom'),
    description: Yup.string().required('This TextArea need some input'),
    // selectOption: Yup.string().required('Required'),
    // radioOption: Yup.string().required('Required'),
    // checkboxOption: Yup.array().required('Required'),
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
      {formik => (
        <Form>
          <Flex minHeight='100vh' w='full' align='center' justify='center'>
            <Box borderWidth={1} px={4} w='full' maxW='500px' borderRadius={4} textAlign='center' boxShadow='lg'>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl
                control='textarea'
                label='Description'
                name='description'
              />
              <FormikControl
                control='select'
                label='Drop Down Options Label'
                name='selectOption'
                options={dropdownOptions}
              />
              <FormikControl
                control='radio'
                label='Radio Button Options Label'
                name='radioOption'
                options={radioOptions}
              />
              <FormikControl
                control='checkbox'
                label='Checkbox Options Label'
                name='checkboxOption'
                options={checkboxOptions}
              />
              <FormikControl
                control='date'
                label='Pick a date'
                name='birthDate'
              />
              <Button type='submit'disabled={!formik.isValid}>Submit</Button>
              </Box> 
            </Flex>
            
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer