import { Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {switchProfileModalVisibility} from '../../../redux/ModalSlice'

const UserModal = () => {
    const {profileModalVisibility}= useSelector(state=> state.modal)
    const dispatch = useDispatch()
    
    return (
        <Modal title='Profile' okText="Save" okButtonProps={{disabled: true}} open={profileModalVisibility}  onCancel={()=> dispatch(switchProfileModalVisibility())}>
            <h1>Modal</h1>
        </Modal>
    )
}

export default UserModal