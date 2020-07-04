import { useState, useEffect } from 'react'
import { asyncLocalStorage } from '../../utils'
import { showToast } from '../toast'

import { getAllFarms }  from '../../services/api'
import { TextareaAutosize } from '@material-ui/core'

export const useHeader = (goToPage, activePage, setActivePage, setIsLoading, handleFarmIdUpdate) => {
  const [showAddFarmModal, SetShowAddFarmModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateName, setUpdateName] = useState(false)
  const [farmName, setFarmName] = useState('');
  const [farmAnchorEl, setFarmAnchorEl] = useState(null);
  const [farms, setFarms] = useState([]);


  const getFarmData = async () =>{
    setIsLoading(true)
    const getData = async () => {
      const farmName = await asyncLocalStorage.getItem('FarmName')
      setFarmName([farmName])
      try {
        const token = await asyncLocalStorage.getItem('token')
        const farms = (await getAllFarms(token)).data.farms
        setFarms(farms)
        setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      showToast('Erro ao determinar fazendas do usuário')
      }
    }
    getData()
  }
  

  const handleClickMenu = event => {
    setFarmAnchorEl(null)
    setAnchorEl(event.currentTarget);
  };

  const handleClickMenuFarm = () => {
    if(farms.length===0){
      showToast('Usuário não possui fazendas cadastradas')
      return false
    }
    setFarmAnchorEl(anchorEl);
    setAnchorEl(null)
  };

  const handleClickItemFarm = async farm => {
    setIsLoading(TextareaAutosize)
    await asyncLocalStorage.setItem('FarmName',farm.name)
    handleFarmIdUpdate(farm.id)
    setFarmAnchorEl(null)
    setUpdateName(true)
    setIsLoading(false)
  };


  const handleCloseMenu = () => {
    setAnchorEl(null);
    };

    const handleCloseMenuFarm = () => {
      setFarmAnchorEl(null);
      };

  const handlePage = (path) => {
    setActivePage(path)
    goToPage(path)
  }
  
  const handleModal = option => {
    SetShowAddFarmModal(option)
    setAnchorEl(null)
  }


  useEffect(() => {
    getFarmData()
    setUpdateName(false)
  }, [updateName])


  return [handlePage,
     showAddFarmModal,
      handleModal,
      anchorEl,
      handleClickMenu,
      handleCloseMenu,
      farmName,
      farmAnchorEl,
      farms,
      handleClickMenuFarm,
      handleCloseMenuFarm,
      handleClickItemFarm
    ]
}
