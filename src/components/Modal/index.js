/* eslint-disable react/prop-types */
import React from 'react'
import { CloseModal } from '../../icons/svgs/close-modal'

import { Overlay, Header, Body, Container, Title, CloseModalWrapper, Footer, Content } from './styles'

export const Modal = ({ isWithoutHeight, title, onDismiss, children, footer, width, radius }) => {
  return (
    <Overlay isWithoutHeight={isWithoutHeight}>
      <Container width={width} isWithoutHeight={isWithoutHeight} radius={radius}>
        <CloseModalWrapper id="close" onClick={onDismiss}>
          <CloseModal />
        </CloseModalWrapper>
        <Content>
          <Header>{title && <Title>{title}</Title>}</Header>
          <Body>{children}</Body>
          {footer && <Footer>{footer}</Footer>}
        </Content>
      </Container>
    </Overlay>
  )
}

Modal.defaultProps = {
  isWithoutHeight: false,
  footer: null
}

