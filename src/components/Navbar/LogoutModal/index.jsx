import { Modal } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {switchLogoutModalVisibility} from '../../../redux/ModalSlice'
import { useSignOut } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

const LoginModal = () => {
    const {logoutModalVisibility} = useSelector(state=> state.modal);
    const dispatch = useDispatch()
    const signOut = useSignOut();
    const navigate = useNavigate()
    const logout =()=>{
      signOut();
      navigate('/login')
  }

  return (
    <Modal  title='Warning'   onOk={()=>logout()} okText='Log out' open={logoutModalVisibility} onCancel={()=>dispatch(switchLogoutModalVisibility())} maskStyle={{}} >
        Are you sure?
    </Modal>
  )
}

export default LoginModal