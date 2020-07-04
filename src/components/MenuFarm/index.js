/* eslint-disable react/prop-types */
import React from 'react'

import { Button } from  './styles'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { } from '../../utils'

export const MenuFarm = props => {
    const { anchorEl, handleClose, handleClick, Farms } = props
  
    return (
        <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        id="customized-menu-farm"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
        <MenuItem disabled>
            Escolha a propriedade desejada a baixo.
        </MenuItem>
    {
        Farms && Farms.map(farm=>{
            return(
                <MenuItem >
                    <Button colorInvert onClick={()=>handleClick(farm)}>{farm.name}</Button>
                </MenuItem>
            )
        })
    }
    </Menu>
  )
}
