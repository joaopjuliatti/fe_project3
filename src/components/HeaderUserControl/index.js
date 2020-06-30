// import React, { useContext } from 'react'
// import { theme } from '../globalStyle'

// import { Home } from '~/assets/svgs/Home'
// import { PlusIcon } from '~/assets/svgs/plus'

// import { TemplateContext } from '~/components/Template/context'

// import { Wrapper, ListButton, Container, BoxButton } from './styles'
// import { useHeader } from './hooks'

// export const HeaderUserControl = addNewMember => {
//   const { isMobile, goToPage, activePage, setActivePage } = useContext(TemplateContext)
//   const [handlePage] = useHeader(goToPage, activePage, setActivePage)

//   return (
//     <Wrapper>
//       <Container>
//         <ListButton single onClick={() => handlePage('home')}>
//           <Home />
//         </ListButton>
//         {addNewMember && (
//           <BoxButton active={activePage === 'user-control'} onClick={() => handlePage('usuario/criar-usuario', 'user-control')}>
//             <PlusIcon color={theme.colors.pink900} />
//             {!isMobile && 'Adicionar usuário'}
//           </BoxButton>
//         )}
//       </Container>
//     </Wrapper>
//   )
// }
