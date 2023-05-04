import React from 'react'
import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';
import { MenuWrapper } from '../Style';
import { useDispatch } from 'react-redux';
import { switchProfileModalVisibility, switchLogoutModalVisibility } from '../../redux/ModalSlice'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';


const useDropDownApi = () => {

    const dispatch = useDispatch()
    const { confirm } = Modal;
    const signOut = useSignOut();
    const navigate = useNavigate()
    const logout =()=>{
        signOut();
        navigate('/login')
    }

    const showDeleteConfirm = () => {
        confirm({
          title: 'Warning',
          icon: <ExclamationCircleFilled />,
          content: 'Are you sure?',
          okText: 'Log out',
          okType: 'danger',
          cancelText: 'Cancel',
          onOk() {
            logout()
          },
          onCancel() {
            dispatch(switchLogoutModalVisibility())
          },
        });
      };
    const navbarDropDown = () => {
        return [
            {
                label: <MenuWrapper onClick={() => dispatch(switchProfileModalVisibility())} ><SettingOutlined /> Setting</MenuWrapper>,
                key: '0',
            },
            {
                label: <MenuWrapper><TranslationOutlined /> Change language</MenuWrapper>,
                key: '1',
            },

            {
                label: <MenuWrapper isDanger={true} onClick={() =>showDeleteConfirm()}><LogoutOutlined /> Log out</MenuWrapper>,
                key: '3',
            },
        ];
    }
    return { navbarDropDown }
}

export default useDropDownApi