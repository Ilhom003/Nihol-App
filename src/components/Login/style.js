import styled from "styled-components";
import { Input } from "antd";

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center ;
flex-direction: column;
background-color: #fff;
`;
Wrapper.Container = styled.div`
display: flex;
align-items: center;
justify-content: center ;
flex-direction: column;
width: fit-content;
margin: 0px auto;
`
Wrapper.Title = styled.div`
    margin-top: 20px;
    font-size: 30px;
    color: rgb(57, 56, 77);
`;
Wrapper.Description = styled.div`
    margin-top: 10px;
    color: rgb(178, 176, 184);
    text-align: center;
    width: 80%;
`
Wrapper.PhoneNumber = styled(Input)`
    .ant-input,.ant-input-group-addon{
        border: none;
        background: transparent;
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;
    height: 50px;
    background: rgb(250, 251, 254);
    outline: none;
    border: 1px solid rgb(240, 238, 247);
    border-radius: 12px;
    padding-left: 15px;
    color: rgb(89, 90, 98);

`;
Wrapper.Password = styled(Input.Password)`
    .ant-input{
        border: none;
        background: transparent;
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;
    height: 50px;
    background: rgb(250, 251, 254);
    outline: none;
    border: 1px solid rgb(240, 238, 247);
    border-radius: 12px;
    padding-left: 15px;
    color: rgb(89, 90, 98);
`;
Wrapper.Button = styled.div`
    margin-top: 50px;
    width: 80%;
    height: 50px;
    border: 1px solid rgb(240, 238, 247);
    border-radius: 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: rgb(255, 255, 255);
    padding: 0px 15px;
    background: rgb(48, 104, 204);
`