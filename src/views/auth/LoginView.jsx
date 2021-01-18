import React from 'react'
import axiosInstance from '../../utils/axios'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import { Box, Button, Text} from "@chakra-ui/react"
import { InputControl } from "formik-chakra-ui"

const LoginView = () => {

    const initialValues = {
        email: '',
        password: '',  
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required-custom'),
        password: Yup.string().required('Required'),
    })
    
    const handleOnSubmit = values => {
        axiosInstance
            .post(`token/obtain/`, {
                company_id: values.company_id,
                password: values.password,
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access_token');
                // navigate('/');  
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
        })
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
        >
      {({ handleSubmit, values, errors }) => (
      <Form>       
        <Box borderWidth={1} px={4} w='full' maxW='500px' borderRadius={4} textAlign='center' boxShadow='lg'>
            <Box>
                <Text>Sign in</Text>
            </Box>
            <InputControl type= "email" name="email" label="Email" />
            <InputControl name="password" label="Password" />
            <Button type="submit">Sign In</Button>
        </Box>
        </Form>
    )}
    </Formik>
    )
}

export default LoginView
