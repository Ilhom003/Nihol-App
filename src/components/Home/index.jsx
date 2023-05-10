import React from 'react'
import Card from '../../Generic/Card'
import { Title } from '../../Generic/Style'
import { Wrapper } from './style'
import all_users from '../../assets/images/all_users.svg'
import half_time from '../../assets/images/half_time.svg'
import end_time from '../../assets/images/end_time.svg'
import empty_place from '../../assets/images/empty_place.svg'
import report from '../../assets/images/empty_place.svg'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const navigateHandler = (path) => navigate(path)
    return (
        <Wrapper>
            <Title>{t("home_page.section_title")}:</Title>
            <Wrapper.CardContainer>
                <Card onClick={() => navigateHandler('/all-users')} image={all_users} title={t('home_page.card_title_allUsers')} />
                <Card onClick={() => navigateHandler('/half-time')} image={half_time} title={t('home_page.card_title_halfTIme')} />
            </Wrapper.CardContainer>
            <Wrapper.CardContainer>
                <Card onClick={() => navigateHandler('/time-up')} image={end_time} title={t('home_page.card_title_timeUp')} />
                <Card onClick={() => navigateHandler('/building-types')} image={empty_place} title={t('home_page.card_title_emptyPlaces')} />
            </Wrapper.CardContainer>
            <Title>{t('home_page.report_title')}:</Title>
            <Card onClick={() => navigateHandler('/report')} image={report} title={t('home_page.card_title_report')} />
        </Wrapper>
    )
}

export default Home