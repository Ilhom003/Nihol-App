import { Form, Modal, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchProfileModalVisibility } from '../../../redux/ModalSlice'
import { Wrapper } from './style'
import { useAuthUser } from 'react-auth-kit'

const UserModal = () => {
    const { profileModalVisibility } = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const authedUser = useAuthUser()

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'

    return (
        <Modal title='Profile' okText="Save" okButtonProps={{ disabled: true }} open={profileModalVisibility} onCancel={() => dispatch(switchProfileModalVisibility())}>
            <Wrapper>
                <Wrapper.Avatar>{authedUser().name[0].toUpperCase()}</Wrapper.Avatar>
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                    style={{
                        width: '100%',
                    }}
                >
                    <Form.Item label="Name">
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item label="Surname">
                        <Input placeholder="Enter your surname" />
                    </Form.Item>
                </Form>
            </Wrapper>
        </Modal>
    )
}

export default UserModal