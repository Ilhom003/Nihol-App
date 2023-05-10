import React from 'react'
import { Wrapper } from './style'
import { Dropdown, Modal } from 'antd';
import useDropDownApi from "../../Generic/DropdownApi";
import UserModal from './UserModal';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthUser, useSignOut } from 'react-auth-kit';
import LanguageModal from './LanguageModal';

const Navbar = () => {
    const authedUser = useAuthUser()
    const { navbarDropDown } = useDropDownApi()
    const { confirm } = Modal;
    const signOut = useSignOut();
    const navigate = useNavigate()

    const logOutHandler = () => {
        return confirm({
            title: 'Warning',
            content: 'Are you sure?',
            okText: 'Log out',
            okButtonProps: { danger: true },
            onOk() {
                signOut()
                navigate('/login')
            },
        });
    };
    return (
        <>
            <Wrapper>
                <UserModal />
                {/* <LogoutModal/> */}
                <LanguageModal />
                <Wrapper.Left>
                    <Wrapper.Title>NIHOL</Wrapper.Title>
                </Wrapper.Left>
                <Wrapper.Right>
                    <Dropdown placement="bottomRight" menu={{
                        items: navbarDropDown({ logOutHandler }),
                    }}
                        trigger={['click']}>
                        <Wrapper.Avatar>{authedUser().name[0].toUpperCase()}</Wrapper.Avatar>
                    </Dropdown>
                </Wrapper.Right>
            </Wrapper>
            <Outlet />
        </>
    )
}

export default Navbar