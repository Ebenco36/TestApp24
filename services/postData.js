export function postData(type, userData){
    /*
    this.state = {
        token:"",
    }
    */
    let BaseURL = `https://yaplyapi.herokuapp.com/api/v1/`
    let querystring = require('querystring')
    //let bearer = this.state.token;
    let token;
    if(localStorage.getItem('user_token')){
      token = localStorage.getItem('user_token');
    }
    else{
        token = '';
    }

    return new Promise((resolve, reject)=>{
        fetch(BaseURL+type,{
            method:`POST`,
            body:querystring.stringify(userData),
            headers: {
                'x-api-key': '829839283923',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': token,
              }
        })
        .then(res => res.json())
        .then(
          (result) => {
            resolve(result)
            /*
            this.setState({
              isLoaded: true,
              items: result.items
            });
            */
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error)
            reject(error)
            /*
            this.setState({
              isLoaded: true,
              error
            });

            */
          }
        )
    })
}

