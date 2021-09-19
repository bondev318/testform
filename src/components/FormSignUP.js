import React, { Component } from 'react'
import favicon from '../img/favicon.ico'
import bg3hq from '../img/bg3hq.jpg'
import './Form.css'
import {HiUser} from "react-icons/hi"
import { FcGoogle } from "react-icons/fc";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class FormSignUP extends Component {
    render() {
    return (
        <Router>
            <div className="background-lg-3hq">
                {/* <img className="bg-lg-3hq" src={bg3hq}/> */}
                <Form className="signup-form3hq">
                    <span><img className="icon-img" src={favicon} alt="icon"/></span>
                    <h2 className="text-center">Đăng ký tài khoản 3HQ</h2>
                    <Button className="btn-sg-sdt btn-dark btn-block"> <HiUser/>Sử dụng số diện thoại</Button>
                    <Button className="btn-sg-gg btn-dark btn-block"> <FcGoogle/>Tiếp tục với Google</Button><br/>
                    <div className="text-tk-dc">Bạn đã có tài khoản?<NavLink to="/" className='link-dn' >Đăng nhập</NavLink></div>
                </Form>
            </div>
        </Router>
    );
    }
}

export default FormSignUP

