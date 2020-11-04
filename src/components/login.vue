<template>
    <div class="container-login" data-aos="zoom-in" data-aos-duration="1500"  >
         <div class="sub-container-login">
          <div class="top">sign in to continue your therapy journey to healthier, happier life</div>
            <div class="banner-img" >
               <picture>
                 <source media="(min-width:501px)" srcset="@/assets/images/4p.jpg">
                  
                    <img src="@/assets/images/4p.jpg">
                    
               </picture>
               
            </div>
            <div class="login-form">
              <div class="title">Login</div>
              <div class="login-details">
                 <input type="text" class="user" name="username" placeholder="Username" />
                 
                <input type="password" class="passwd" name="password" placeholder="Password" />
             
                <b-button  variant="primary" class="button-login">Log in</b-button>
    
            <span  class="gotosign"><label>Don't you have an account? </label><router-link to="/signup">Sign UP</router-link></span>
              </div>
            </div>
         </div>
       
    </div> 
    
</template>
<script>
export default {
    
}
</script>
<style>
.bg-img{
    background-color: palegoldenrod;
}
 *{
     margin: 0px;
     padding: 0px;
     box-sizing: border-box;
 } 
 .container-login{
     
     padding: 0 20px;

 } 
.sub-container-login{
    max-width: 600px;
    width: 100%;
    height: 400px;
    margin: 150px auto 0;
    display: flex;
    background-color:lightcyan;
    box-shadow: 0 0 5px 2px;
}
.sub-container-login .banner-img{
    width: 300px;
    height: 400px;

}
.banner-img img{
    width:100%;
    height: 100%;
}
.sub-container-login .login-form{
    
    padding: 30px;
    position: relative;
}

@media screen and (max-width:500px){
    .sub-container-login{
        flex-direction: column;
        max-width: 300px;
        height: auto;
        margin-top: 50px;
    }
    .sub-container-login .banner-img{
        height: 250px;
        width: 100%;
    }
    
    .sub-container-login .login-form{
        width: 100%;
        padding:20px 35px 0;
    }
    .title{
        margin-bottom: 20px;
        
    }
    .login-details{
        font-size: 12px;
    }
    
    
}
.top{
    position: absolute;
    text-align: center;
    padding: 50px;
    max-width: 250px;
    font-size: 4vmin;
    color:red;
}
.title {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 6vmin;
    color: darkslateblue;
    text-align: center;
}
.button-login{
    display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
    text-align: center;
    box-shadow: 0 6px 12px 1px darkslategrey;

}
.button-login:active{
    transform: translateY(4px);
}
.forget , .checking, .gotosign{
    
    font-size: 2vh;
}
.input-login{
    width: 240px;
}
.user, .passwd {
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 1px;
  width: 200px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #AAA;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
}

.user:focus,
.passwd:focus {
  border-bottom: 2px solid #16a085;
  color: #16a085;
  transition: 0.2s ease;
}


</style>