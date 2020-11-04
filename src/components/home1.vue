<template>
   


 <div class="top-home">
     
    <img class="top_image" src="@/assets/images/1.jpg">
<div class="heading-home">
  <div class="name-home">
   
free mind
</div>
<div class="subname-home">be happy, be healthy</div>
</div>
<!--word rotater-->
<div class="rotation">
  
  <span>
    enjoy<br/>
    happy<br/>
    relax<br/>
  </span>
</div>



<div class="get-start"><b-button class="button-home" href="/login" pill variant="success">Get start</b-button></div>

<div class="quote-about" data-aos="fade-right" data-aos-duration="1000">
 <p class="purpose"> If you suffer from any problem regarding mental, personal, relationship or academic, this is the better place to meet best counsellors for your issues.
</p>
</div><br/><br/>
<div class="working" data-aos="fade-up" data-aos-duration="900">
  <section class="title" data-aos="fade-up" data-aos-duration="1000" >
    How get your counselling?
  </section>
  <section class="number1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
    <h1 class="steps">Registration</h1>
    <p class="detail-step">First you have to register for getting service </p>
    <img class="step-img" src="@/assets/images/regicon.png">
  </section>
  <img  class="arrow" src="@/assets/images/arrowicon.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
  <section class="number2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
    <h1 class="steps">select your problem type</h1>
    <p class="detail-step">You can select counselling type according to yourproblem. So there are 3 category like counselling for mental & personal issues,counselling for relationship issues, counselling for academic issues </p>
    <img class="step-img" src="@/assets/images/selecttype.png">
  </section>
  <img  class="arrow" src="@/assets/images/arrowicon.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
  <section class="number3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
    <h1 class="steps">mark your problems in given checklist</h1>
     <p class="detail-step">we have list some issues according to the category.You should mark your issues</p>
    <img class="step-img" src="@/assets/images/questionicon.png">
  </section>
  <img  class="arrow" src="@/assets/images/arrowicon.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
  <section class="number4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
    <h1 class="steps">select counsellor according to ypur preference</h1> 
    <p class="detail-step">you have answer some question according to your prefer. And you can select one counsellor from your prefer counsellor list.</p>
    <img class="step-img" src="@/assets/images/selecticon.png">
  </section>
  <img  class="arrow" src="@/assets/images/arrowicon.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
  <section class="number5"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">
    <h1 class="steps">start chatting</h1>
     <p class="detail-step">After sending request ,counsellor will make a notificication to start your chat.</p>
    <img class="step-img" src="@/assets/images/msgicon.png">
  </section>
</div>
<home-slideshow></home-slideshow>
<div class="card text-center wow bounceInLeft" data-wow-delay=".25s"><h1>this is </h1></div>
 <div class="container-home">

  <div class="row" >
 <div class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6  text-center">
<img src="@/assets/images/degree.png" class="mx-auto d-block img-fluid">
<h5>Students of university</h5>
<p>All the students of university can register and get your services for your mental health</p>
 </div>
 <div class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6  text-center">
  <img src="@/assets/images/money.png" class="mx-auto d-block img-fluid">
  <h5>Free</h5>
  <p>Our services are free for all registered university students</p>
</div>
<div class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6  text-center">
  <img src="@/assets/images/people.png" class="mx-auto d-block img-fluid">
  <h5>Best counsellors</h5>
  <p>We have best counsellors who are specialists for particular fields</p>
</div>
<div class=" col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6  text-center">
  <img src="@/assets/images/clock.png" class="mx-auto d-block img-fluid"> 
  <h5>24 available</h5> 
  <P>You can login and schedule counselling session ata any time of the day</P>  
</div>
  </div>
</div>

<home-footer></home-footer>
 </div>
 
</template>
<script>
import footer from './footer.vue'
import slideshow from './slideshow1.vue'
export default {
    components :{
      'home-footer' : footer,
      'home-slideshow' : slideshow
    }
}
 
</script>
<style>
.heading-home{
  top :80px;
  left:40px;
  position: absolute;
}
.name-home{
    font-family: cooper Black;
    font-size: 9vmax;
    color: #E4730C;
    text-shadow:  6px 10px 5px darkred;
   
   
}
.subname-home{
    font-family: Comic Sans MS;
    font-size: 6vmin;
    font-style: italic;
    color: tomato;
    text-shadow: 2px 3px  maroon;
   
   
}


.get-start{
  padding-left: 32%;
  top:500px;
  position: absolute;
  

}
.top_image{
  width: 100%;
  height: 600px;
  

  position: relative;
}
.button-home{
  padding:7px 7px;
  width:100%;
  font-size:3.4vmin;
  box-shadow: 0px 4px 7px 1px black;
  display: inline-block;
 position:absolute;
 

}
.button-home:active{
  transform: translateY(4px);
}
body{
    margin: 0px;
    padding: 0px;
  
}
.login-signup{
   
    position: absolute;
    top:60px;

}
.login-signup1{
    left:80%;
}
.rotation{
  position: absolute;
  height: 100px;
  line-height: 100px;
  font-size: 70px;
  top: 380px;
  display: inline-block;
  overflow: hidden;
  font-family: Imprint MT Shadow;
  font-weight: bolder;
  font-style: italic;
  text-shadow:  4px 5px 2px chartreuse;
text-align: center;
left: 30px;
  
 
}
.rotation span{
  animation: animate 10s ease infinite;
  position: relative;
  color:yellow;
}
@keyframes animate{
  0% {top:0}
  20% {top:0}
  25% {top:-100px}
  45% {top:-100px}
  50% {top:-200px}
  70%  {top:-200px}
  75% {top:-300px}
  95% {top:-300px}
  100% {top:0}
  
}
.quote-about{
  width: 80%;
  height:auto;
  border: mintcream;
  background-color: olivedrab;
  position: relative;
  padding: 20px;
  margin-top: 20px;
  margin-left: 10%;
  
  
  
 
}
.purpose{
  font-family: Segoe UI Semibold;
  font-style: italic;
  font-size: 4.3vmin;
  padding-left: 15%;
  padding-right: 15%;
  text-align:center;
  color:yellow;
  text-shadow:  1px 1px  silver;
 }


@media screen and (max-width:680px){
  .purpose{
    
    padding-left: 5%;
    padding-right: 5%;
    
    text-shadow: none;
   
   }
   .subname-home{
     text-shadow: none;
   }
   
   
}
.working{
  width:100%;
  position: relative;
  margin-top: 40px;
  background-color: lightblue;
  padding: 30px;
}
.icon{
  width:18%;
  height: 23%;

}
.step-img{
  display:inline-block ;
  width:30vmin;
  height:30vmin;
 
  
}
.number1, .number2, .number3, .number4, .number5{
text-align: center;


 
}
.steps{
  font-family: Cooper Black;
  font-size: 5vmin;
}

.title{
  text-align: center;
  font-weight: bold;
  font-size: 7vmin;
  font-family: Algerian;
  color:darkslateblue;
}
.arrow{
   
  height: 20vmin;
  width: 20vmin;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right:auto ;
}
.detail-step{
  
  padding-left: 10%;
  padding-right: 10%;
  font-size: 3.5vmin;
  font-family: Comic Sans MS;
  color: grey;
}
.grid{
  display: grid;
grid-template-columns: repeat(2, 1fr);

}
.col-12 img{
  width: 35%;
}
.container-home{
  margin-top: 30px;
}
.container-home .row{
  font-size: 4vmin;
  font-family: Candara;

}
.container-home .row h5{
  color: darkviolet;
  font-weight: 900;
  font-size: 3.4vmin;
}
.container-home .row p{
  color: darkslateblue;
  font-size: 3vmin;
}


</style>