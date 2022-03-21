import React from 'react'
import { ButtonSector } from './styles'

const OperatingButton: React.FC = ({ children }) => {
  return(
    <ButtonSector>
      {children}
    </ButtonSector>
  )
}

export default OperatingButton