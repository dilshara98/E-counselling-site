<template>
 <footer class="page-footer ">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
  
      <!-- Grid row -->
      <div class="row">
  
        <!-- Grid column -->
        <div class="col-md-6 mt-md-0 mt-3">
  
          <!-- Content -->
          <h5 class="text1">free mind</h5>
          <p class="subname">be happy, be healthy </p>
          <img  class="footericon" src="@/assets/images/logoicon.png">
         
  
        </div>
        <!-- Grid column -->
  
        <hr class="clearfix w-100 d-md-none pb-3">
  
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
  
          <!-- Links -->
          <h5 class="text2">More</h5>
  
          <ul class="list-unstyled">
            <li>
              <a routerLink="/about">About</a>
            </li>
            <li>
              <router-link to="/FAQs">FAQs</router-link>
            </li>
            <li>
             <router-link to="/terms  and conditions">Terms and conditions</router-link>
            </li>
            <li>
              <router-link to="/privacy policy">Privacy policy</router-link>
            </li>
          </ul>
  
        </div>
        <!-- Grid column -->
  
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">
  
          <!-- Links -->
          <h5 class="text3">Contacts us</h5>
  
          <ul class="list-unstyled">
            <li>+94 713 458 349</li>
            <li>+94 712 308 297</li>
            <li>susllanka@gmail.com</li>
          </ul>
  
        </div>
        <!-- Grid column -->
  
      </div>
      <!-- Grid row -->
  
    </div>
    <!-- Footer Links -->
  
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  
  </footer>
  <!-- Footer -->   
</template>
<script>
export default {
    
}
</script>
<style>
.page-footer{
    width: 100%;
    background-color: indigo;
    margin-top: 20px;
    padding-top: 30px;
}
 .text1{
    font-family: cooper Black;
    font-size: 9vmin;
    color: #E4730C;
    text-shadow: 2px 3px 2px   darkred;
}
.subname{
    font-family: Comic Sans MS;
    font-size: 4vmin;
    font-style: italic;
    color: tomato;
    text-shadow: 1px 2px  maroon;
   
   
}
.footericon{
    width:30%;
    height: 50%;
}
.text2{
    color:violet;
    font-size: 4vmin;
}
.list-unstyled a{
    color: white;
    line-height: 4.2vmin;
}
 .text3{
     color: wheat;
 }
 .text3 .list-unstyled{
     color: white;
 }
</style>