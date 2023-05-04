import React from 'react'
import Card from '../../Generic/Card'
import { Title } from '../../Generic/Style'
import { Wrapper } from './style'
import all_users from '../../assets/images/all_users.svg'
import half_time from '../../assets/images/half_time.svg'
import end_time from '../../assets/images/end_time.svg'
import empty_place from '../../assets/images/empty_place.svg'
import report from '../../assets/images/empty_place.svg'
const Home = () => {
    return (
        <Wrapper>
            <Title>Sections:</Title>
            <Wrapper.CardContainer>
                <Card image={all_users} title={'All users'} />
                <Card image={half_time} title={'Half time'} />
            </Wrapper.CardContainer>
            <Wrapper.CardContainer>
                <Card image={end_time} title={'Time up'} />
                <Card image={empty_place} title={'Empty places'} />
            </Wrapper.CardContainer>
            <Title>Reports:</Title>
            <Card image={report} title={'Report'} />
        </Wrapper>
    )
}

export default Home