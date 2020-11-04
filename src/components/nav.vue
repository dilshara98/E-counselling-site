<template>

   <nav class="navbar navbar-dark bg-dark">

    <a class="navbar-brand"><img class="navicon" src="@/assets/images/logoicon.png">Free mind</a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link active" to="/">Home </router-link>
        <router-link class="nav-item nav-link " to="/login">Login </router-link>
        <router-link class="nav-item nav-link " to="/signup">Signup </router-link>
        <router-link class="nav-item nav-link " to="/about">About </router-link>
      </div>
    </div>
  </nav>

</template>
<script>
export default {
  
}
</script>
<style>
.navbar-brand{
     color: coral;
     font-family: cooper Black;
 }
 .navbar{
     position: fixed;
     width:100%;
     top:0px;
     z-index: 9999;
 }
 .navicon{
     width:47px;
     height:47px;
 }
</style>