import React, {Component} from 'react';
import Link from 'next/link'
import {Redirect} from 'react-router-dom'
import {postData} from '../../services/postData'
class dashboard extends Component {
    
    constructor(props) {
        super(props)
        
        this.logout = this.logout.bind(this);
      }
    

      componentDidMount(){

        if(!window.localStorage.getItem('user')){
            window.location.href = '/login'
        }
        else{
            console.log('Nothing')
        }
    }

      logout(){
          if(window.localStorage.getItem('user')){
            localStorage.removeItem("user");
            localStorage.removeItem("user_token");
            window.location.href = '/login'
          }
          else{
              alert("You cannot be here")
              window.location.href = '/login'
          }
      }
    render () {
    return (
      <div className="IndexPage__container hk-wrapper hk-vertical-nav">
    

	<div className="hk-wrapper">
    <div className="hk-pg-wrapper hk-auth-wrapper">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 pa-0">
                        <div className="auth-form-wrap pt-xl-0 pt-100">
                            <div className="auth-form w-xl-25 w-sm-50 w-100">
                                Welcome to your dashboard

                                <button onClick={this.logout} className="btn btn-link">Logout</button>
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

export default dashboard