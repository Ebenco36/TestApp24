import React, {Component} from 'react';
import Link from 'next/link'
import {Redirect } from 'react-router-dom'
import {postData} from '../../services/postData'
import { History } from 'history';
//import 'localstorage-polyfill';
//import { LocalStorage } from "node-localstorage";
 
//global.localStorage = new LocalStorage('./scratch');

class Verify extends Component {
    constructor(props, context) {

      super(props, context)
      this.state = {
        verification_code:"",
		token:"",
		user:""
		
      }
      this.verify = this.verify.bind(this);
      this.onChange = this.onChange.bind(this);

      this.getUsername = this.getUsername.bind(this);
    }

    componentDidMount(){
        
        if(localStorage.getItem('user')){
            let user_data = localStorage.getItem('user');
			let token_user = localStorage.getItem('user_token');
			this.setState({
				token:token_user,
				user: user_data
			});
            this.getUsername();
        }
        else{
            console.log('Nothing')
        }
    }

    verify(){
       postData('verify-code', this.state).then((result)=>{
         const {history} = this.props
         let response = result;
         if(this.state.token){
            let token = this.state.token
            if(response._meta.status_code == 200 && response._meta.success == true){
                let message = response._meta.message;
                location.href = '/dashboard'
            }else{
                if(response._meta && response._meta.error){
                    
                    alert("Message: "+ response._meta.error.message)
                    location.href = '/login'
                }
                
            }
        }
        else{
            console.log('Nothing')
        }
         console.log(response)
       })
    }

    getUsername(){
        var data = this.state.user
		if(data != "" && data != 'undefined'){
        //console.log(JSON.parse(data)
			return JSON.parse(data).email;
		}
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
      console.log(this.state)
    }
    
    render () {

        var email = this.getUsername() ? this.getUsername(): '';
    return (
      <div className="IndexPage__container hk-wrapper hk-vertical-nav">
      {/* <!--
      <div className="preloader-it">
          <div className="loader-pendulums"></div>
      </div>
      -->
      */}

	<div className="hk-wrapper">
    <div className="hk-pg-wrapper hk-auth-wrapper">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 pa-0">
                        <div className="auth-form-wrap pt-xl-0 pt-100">
                            <div className="auth-form w-xl-25 w-sm-50 w-100">
                                <form action="javascript:void(0)">
                                    <div className="d-block avatar avatar-lg mx-auto mb-20">
                                        <img src="/img/avatar3.jpg" alt="user" className="avatar-img rounded-circle"/>
                                    </div>
                                    <h1 className="display-6 mb-10 d-flex align-items-end justify-content-center">{email}
                                        <span className="d-20 d-flex align-items-center justify-content-center border border-1 border-light-40 rounded-circle ml-10">
                                            <i className="zmdi zmdi-lock text-light-40 font-12"></i>
                                        </span>
                                    </h1>
    <p className="mb-30 text-center">{email}</p>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input onChange={this.onChange} name="verification_code" className="form-control filled-input bg-white" placeholder="passcode" type="text"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><span className="feather-icon"><i data-feather="arrow-right"></i></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={this.verify} className="btn btn-success">Verify</button>
                                    </div>

                                    <div className="form-group">
                                        <a href="/login" className="btn btn-pink ">Login</a>
                                    </div>
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
}

export default Verify