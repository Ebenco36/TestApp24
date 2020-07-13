import React, {Component} from 'react';
import {postData} from '../../services/postData'
import Link from 'next/link'
import { Redirect } from 'react-router';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:"",
	  password:'',
	  redirect:false
    }
    this.login = this.login.bind(this);
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


  login(){
	this.setState({redirect:true});
     postData('login', this.state).then((result)=>{
	   let response = result;
	   
       if(response._meta){
        let status = response._meta;
        if( status.success == true && status.status_code == 200 || status.status_code == 201){
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('user_token', status.token)
           this.setState({redirect:false});
           window.location.href = '/dashboard'
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
    console.log(this.state)
  }
  
  render () {

		const mystyle = {
			display: this.state.redirect == false ? "none" : "block",
		};
	

		
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
										<h1 className="display-4 text-center mb-10">Welcome Back :)</h1>
										<p className="text-center mb-30">Sign in to your account and enjoy unlimited perks.</p> 
										<div className="form-group">
											<input className="form-control" placeholder="Email" type="email" name="email" onChange={this.onChange}/>
										</div>
										<div className="form-group">
											<div className="input-group">
												<input className="form-control" placeholder="Password" name="password" type="password" onChange={this.onChange}/>
												<div className="input-group-append">
													<span className="input-group-text">
                            <span className="feather-icon">
                              <i data-feather="eye-off"></i>
                            </span>
                          </span>
												</div>
											</div>
										</div>
										<div className="custom-control custom-checkbox mb-25">
											<input className="custom-control-input" id="same-address" type="checkbox" checked/>
											<label className="custom-control-label font-14" for="same-address">Keep me logged in</label>
										</div>
										<button className="btn btn-pink btn-block" type="submit" onClick={this.login}>Login</button>
										<p className="font-14 text-center mt-15">Having trouble logging in?</p>
										
										<p className="text-center">Do have an account yet? <a href="/register">Sign Up</a></p>
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

export default Login