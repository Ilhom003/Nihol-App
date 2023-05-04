import React from 'react'
import { Wrapper } from './style'
import { Dropdown } from 'antd';
import useDropDownApi from "../../Generic/DropdownApi";
import UserModal from './UserModal';
import { Outlet } from 'react-router-dom';
import LogoutModal from './LogoutModal';
import { useAuthUser } from 'react-auth-kit';

const Navbar = () => {
    const authedUser = useAuthUser()
    const { navbarDropDown } = useDropDownApi()
    return (
        <>
            <Wrapper>
                <UserModal />
                {/* <LogoutModal/> */}
                <Wrapper.Left>
                    <Wrapper.Title>NIHOL</Wrapper.Title>
                </Wrapper.Left>
                <Wrapper.Right>
                    <Dropdown placement="bottomRight" menu={{
                        items: navbarDropDown(),
                    }}
                        trigger={['click']}>
                        <Wrapper.Avatar>{authedUser().name[0].toUpperCase()}</Wrapper.Avatar>
                    </Dropdown>
                </Wrapper.Right>
            </Wrapper>
            <Outlet/>
        </>
    )
}

export default Navbar