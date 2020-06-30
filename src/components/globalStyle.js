import styled from 'styled-components'



const  colors  = {
    pink900: "#DE0C4B",
    pink800: "#FF5776",
    blue900: "#01163E",
    blue800: "#323B69",
    blue700: "#0086CB",
    blue600: "#5CB5FE",
    yellow900: "#FCCC00",
    yellow800: "#FFFF50",
    lilac900: "#7A1FA0",
    lilac800: "#AD52D2",
    purple900: "#6600F7",
    purple800: "#A248FF",
    grey600: "#CCCBCB",
    grey500: "#EEEEEE",
    grey400: "#FFFFFF",
    green100: "#89D747",
    red100: "#DD4646",
    white100: "#FFFFFF"
}

export const theme = {
    colors:colors
}


export const Text = styled.div`
  ${({ color }) => (color ? `color: ${color};` : `color : ${theme.colors.blue900};`)}
  ${({ bold }) => (bold ? `font-family: CenturyGothicBold;` : `font-family: CenturyGothic;`)}
  
  ${({ size }) => (size ? `font-size: ${size};` : ``)}
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : ``)}
  ${({ align }) => (align ? `text-align: ${align};` : ``)}
  ${({ display }) => (display ? `display: ${display};` : `display: block;`)}
  
  
  /* margins */
  ${({ margin }) => (margin ? `margin: ${margin};` : ``)}

  ${({ mTop }) => (mTop ? `margin-top: ${mTop};` : ``)}
  ${({ mLeft }) => (mLeft ? `margin-left: ${mLeft};` : ``)}
  ${({ mRight }) => (mRight ? `margin-right: ${mRight};` : ``)}
  ${({ mBottom }) => (mBottom ? `margin-bottom: ${mBottom};` : ``)}

  /* more props */
  ${({ overflow }) => (overflow ? `overflow: ${overflow};` : ``)} 
  ${({ textOverflow }) => (textOverflow ? `text-overflow: ${textOverflow};` : ``)} 
  ${({ whiteSpace }) => (whiteSpace ? `white-space: ${whiteSpace};` : ``)}
  ${({ cursor }) => (cursor ? `cursor: ${cursor};` : ``)} 
  
`
