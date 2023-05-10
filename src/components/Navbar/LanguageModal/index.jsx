import { Modal, Segmented } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchLanguageModalVisibility } from '../../../redux/ModalSlice'
import useSegmentedAPI from '../../../Generic/SegmentedAPI';
import  i18n  from 'i18next';

const LanguageModal = () => {
    const [localeState, setLocaleState] = useState('')
    const { languageModalVisibility } = useSelector(state => state.modal);
    const { segmentedLanguage } = useSegmentedAPI()
    const dispatch = useDispatch()
    const onCancel = () => dispatch(switchLanguageModalVisibility())
    const switchLanguage = () => {
        i18n.changeLanguage(localeState);
        localStorage.setItem('locale', localeState);
        return onCancel()
    }
    return (
        <Modal title='Change language' okText='Change' open={languageModalVisibility} onOk={switchLanguage} onCancel={onCancel}>
            <Segmented
                onChange={(e) => setLocaleState(e)}
                defaultValue={'uzLotin'}
                style={{ marginTop: '20px' }}
                block
                options={segmentedLanguage()}
            />
        </Modal >
    )
}

export default LanguageModal