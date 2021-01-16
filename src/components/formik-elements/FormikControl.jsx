import React from 'react'
import BasicInput from './BasicInput'
import TextAreaStyled from './TextAreaStyled'
import SelectSinglePullDown from './SelectSinglePullDown'
import RadioButtons from './RadioButtons'
import CheckboxGrp from './CheckboxGrp'
//import PickADate from './PickADate'

import PickADate from './PickADate'
import SelectMultiPullDown from './SelectMultiPullDown'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <BasicInput {...rest} />
    case 'textarea':
      return <TextAreaStyled {...rest} />
    case 'select':
      return <SelectSinglePullDown {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGrp {...rest} />
    case 'date':
      return <PickADate {...rest} />
    default:
      return null
  }
}

export default FormikControl