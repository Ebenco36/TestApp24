import React, {Component} from 'react';
import Link from 'next/link'
import {postData} from '../../services/postData'
import {Redirect} from 'react-router-dom'
class Register extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email:"",
        username:'',
        password:'',
        verify_redirect_url:'',
        redirect:false
      }
      this.register = this.register.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        

        
        if(localStorage.getItem('user')){
            window.location.href = '/dashboard'
        }
        else{
            console.log('Nothing')
        }
    }


    register(){
        this.setState({redirect:true});
       postData('register', this.state).then((result)=>{
         let response = result;
         if(response._meta){
             let status = response._meta;
             if( status.success == true && status.status_code == 200 || status.status_code == 201){
                sessionStorage.setItem('user', JSON.stringify(response.data))
                sessionStorage.setItem('user_token', status.token)
                localStorage.setItem('user', JSON.stringify(response.data))
                localStorage.setItem('user_token', status.token)
                this.setState({redirect:false});
                window.location.href = '/verify'
            }
             else{
                 console.log(status);
             }

         }
         console.log(response)
       })
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
      this.setState({verify_redirect_url:'verify'});
      console.log(this.state)
    }

    
    render () {

    const mystyle = {
		display: this.state.redirect == false ? "none" : "block",
	};
    if(this.state.redirect == false){
    return (
      <div className="IndexPage__container hk-wrapper hk-vertical-nav">
      
      <div className="preloader-it" style={mystyle}>
          <div className="loader-pendulums"></div>
      </div>

	<div className="hk-wrapper">
        <div className="hk-pg-wrapper hk-auth-wrapper">
            <header className="d-flex justify-content-end align-items-center">
                <div className="btn-group btn-group-sm">
                    <a href="#" className="btn btn-outline-secondary">Help</a>
                    <a href="#" className="btn btn-outline-secondary">About Us</a>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 pa-0">
                        <div className="auth-form-wrap pt-xl-0 pt-70">
                            <div className="auth-form w-xl-30 w-lg-55 w-sm-75 w-100">
                                {/*
									<a className="auth-brand text-center d-block mb-20" href="#">
										<img className="brand-img" src="/img/logo-light.png" alt="brand"/>
									</a>*/}
                                <form action="javascript:void(0)">
                                    <h1 className="display-4 mb-10 text-center">Sign up for free</h1>
                                    <p className="mb-30 text-center">Create your account and start your free trial today</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="username" name="username"   onChange={this.onChange}/>
                                    </div>
                                        
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" name="password" type="password" onChange={this.onChange}/>
                                    </div>
                                    
                                    <div className="custom-control custom-checkbox mb-25">
                                        <input className="custom-control-input" id="same-address" type="checkbox" checked/>
                                        <label className="custom-control-label font-14" for="same-address">I have read and agree to the <a href=""><u>term and conditions</u></a></label>
                                    </div>
                                    <button className="btn btn-pink btn-block" type="submit" onClick={this.register}>Register</button>
                                    
                                    <p className="text-center">Already have an account? <a href="/login">Sign In</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    )
    }
    else{
        return (<Redirect to={'/verify'}/>)
    }
}

}

export default Register