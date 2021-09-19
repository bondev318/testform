import React, { Component } from 'react'
import favicon from '../img/favicon.ico'
// import bg3hq from '../img/bg3hq.jpg'
import './Form.css'
import {HiUser} from "react-icons/hi"
import { FcGoogle } from "react-icons/fc";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {Button, Form} from 'reactstrap';


class Form3HQ extends Component {
    render() {
    return (
        <Router>
            <div className="background-lg-3hq">
                {/* <img className="bg-lg-3hq" src={bg3hq}/> */}
                <Form className="login-form3hq">
                    <span><img className="icon-img" src={favicon} alt="icon"/></span>
                    <h2 className="text-center">Chào mừng đến với 3HQ</h2>
                    <Button className="btn-lg-sdt btn-dark btn-block"> <HiUser/>Sử dụng số diện thoại</Button>
                    <Button className="btn-lg-gg btn-dark btn-block"> <FcGoogle/>Tiếp tục với Google</Button><br/>
                    <div className="text-tk">Bạn chưa có tài khoản?<NavLink to="/signup" className='link-dk' >Đăng ký</NavLink></div>
                </Form>
            </div>
            {/* Nội dung */}
            {/* <Route path="/" exact component={Form3HQ}></Route> */}
            {/* <Route path="/signup" exact component={FormSignUP}></Route> */}
        </Router>
    );
    }
}

export default Form3HQ
