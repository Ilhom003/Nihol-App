import React from 'react'
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux'
import { AuthProvider } from 'react-auth-kit';

const Wrapper = ({ children }) => {
    return (
        <ConfigProvider>
            <AuthProvider authType='cookie' authName='_auth' cookieDomain={window.location.hostname} cookieSecure={window.location.protocol === 'https:'} >
                <BrowserRouter>
                    <Provider store={store}>
                        {children}
                    </Provider>
                </BrowserRouter>
            </AuthProvider>
        </ConfigProvider>
    )
}

export default Wrapper