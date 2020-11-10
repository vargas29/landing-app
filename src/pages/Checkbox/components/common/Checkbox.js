import React from 'react'
import IconCheck from '../../icons/IconCheck'
import { Container, Input, Marker, Label } from '../common/styled/Checkbox'

function Checkbox({ children, ...rest }) {
  return (
    <Container>
      <Input type="checkbox" {...rest} required />
      <Marker>
        <IconCheck />
      </Marker>
      <Label>{children}</Label>
    </Container>
  )
}

export default Checkbox
