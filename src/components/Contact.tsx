import React, { FC, useState } from 'react';
import { Typography, Input, Alert } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import Styled from 'styled-components';
import { FormInterface } from '../interfaces/interfaces';

const { TextArea } = Input;

const ContactBlock = Styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family:'Share Tech';
    color: #3098ff;
    background: black; 

`

const ContactForm = Styled.form`
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
    margin-left: 29%;
    width: 40%;
    label {
        margin-top: 2%;
    }
`

const Text = Styled(TextArea)`
    margin-bottom: 2%;
`

const initialState: FormInterface = {
    user_name: '',
    user_email: '',
    message: ''
}

const Contact: FC = () => {
    const [formData, setFormData] = useState(initialState)
    const [succ, setSucc] = useState(false)
    const [err, setErr] = useState(false)
    const { Title } = Typography;
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_yf78owp', 'contact_form', e.currentTarget, 'user_DvFCnI1bSO7lW4sHr75S4')
            .then(res => {
                console.log(res.text)
                setFormData(initialState)
                setSucc(true)
            }, (error) => {
                console.log(error.text)
                setErr(true)
            })
    }


    return (
        <ContactBlock>
            {succ ? <Alert message="Email Sent!" description="I will get back to you as soon as possible, thank you for your time!" type="success" showIcon closable style={{position: 'absolute', zIndex: 3, width: '30%', marginLeft: '35%', marginTop: '-15%'}}/> : <></>}
            {err ? <Alert message="Error" description="Seems emailjs is down, feel free to contact me directly at ruizajdev@gmail.com" type="error" showIcon closable style={{position: 'absolute', zIndex: 3, width: '30%', marginLeft: '35%', marginTop: '-15%'}}/> : <></>}
            <Title style={{marginTop: '2%', marginLeft:'42.5%'}}>Contact Me!</Title>
            <ContactForm className='contact-form' onSubmit={sendEmail}>
                <input type='hidden' name='contact_number'/>
                <label>Name</label>
                <Input size="large" prefix={<UserOutlined />} onChange={handleChange} value={formData.user_name} type='text' name='user_name'/>
                <label>Email</label>
                <Input size="large" prefix={<MailOutlined/>} onChange={handleChange} value={formData.user_email} type='email' name='user_email'/>
                <label>Message</label>
                <Text autoSize={{minRows: 15}} onChange={handleChange} value={formData.message} name='message'/>
                <input type='submit' value='Send'/>
            </ContactForm>
        </ContactBlock>
    )
}

export default Contact;