<template>
    <div class="abot">
<div class="headingOfAbout">
<img  src="@/assets/images/about-bg.jpg">
<div class="mission">Our mission</div>
<div class="mission-details">Giving counselling for university students for their better life</div>
</div>
<div class="about" data-aos="fade-left" data-aos-duration="1000">
    <h5>About us</h5>
    <div class="contain-about">
        Free mind is an impact that improve mental health and giving better counselling for university students
    </div>
</div>
<div class="my-story">
    <div class="topName">My story</div>
    <div class="story-contain">
      <p>  As a university student, I suffer from many problems like exam stress, fear about future,
           financial issues. So, these issues cause me to illness of my mental health. Because of these mental
            health issues, sometimes I can't sleep well, eat well as well as pay attention on my academics.
             I have seen lotof my friends suffer from mental issues because of family problmes,
              financial issues, etc. I have some friends who give up their education, whose academics
               are go down because of not having proper instructions. If we get proper counselling, 
               I think we can overcome lot of problems.<br/><br/> In sri Lanka, there is no way to get counselling 
               for university students at university. So, I got idea if we can get counselling from online without going any where 
               with  the secure to our information. So, these reasons inspire me to create e- counselling system for university 
               students. I think this system will be a great help to all Sri Lankan university students for making 
               their future while facing problems that come to them through better counselling from specialists. 
               With the mentoring from the lecturers of My university I design this system.<br/><br/><br/>
               <img class="my-img" src="@/assets/images/bg3.jpg"> <img class="my-sign" src="@/assets/images/sign.png">

         </p>
    </div>
</div>
<app-footer></app-footer>
</div>

</template>
<script>
import footer from './footer.vue'
export default {
   components:{
       'app-footer': footer
   } 
}
</script>
<style>
.headingOfAbout img{
    width:100%;
    height:500px;

}
.mission{
    position: absolute;
    top: 150px;
    font-size: 6vmin;
    font-family:Comic Sans MS ;
     text-align: center;
   left:37%;
   font-size: 9vmin;
   top:250px;
   color:darkorange;
   font-weight: bold;
   text-shadow:  3px 7px 2px maroon;

   

}
.mission-details{
    position: absolute;
    top:330px;
    font-size: 5vmin;
    text-align: center;
    left: 20%;
    font-size: 5vmin;
    color: coral;
    text-shadow:1px 1px mediumvioletred;
}
.about{
     margin-left: 10%;
     width:80%;
     background-color: darkturquoise;
     height:auto;
     margin-top: 30px;
}
.about h5{
    text-align: center;
    font-size: 6vmin;
    font-family: Cooper Black;
    color: white;
}
 .topName{
     text-decoration: underline;
     text-align: center;
     font-size: 7vmin;
     font-weight: bold;
     font-family: Consolas;
     color: slateblue;
    
 }
 .about .contain-about{
     text-align: center;
     font-size: 3vmin;
     font-family: Comic Sans MS ;
     padding-bottom: 30px;
     color: cyan;
 }
 .my-story{
     border: 0px;
     margin-left: 20%;
     width: 60%;
     height: auto;
     text-align: justify;
     margin-top: 20px;
     color: darkblue;
     
     
 }
 .story-contain{
     font-size: 2.5vmin;
     font-family: Arial;
     
 }
 @media screen and (max-width:680px){
     .my-story{
margin-left: 10%;
width:80%;
     }
     .mission{
         left: 23%;
     }
     .mission-details{
         left: 0;
     }
     
 }
 .my-img{
     padding-left: 5%;
     width:180px;
     height: 180px;

 }
 .my-sign{
     padding-top: 30px;
     width:150px;
     height: 150px;
     
    
     
 }
</style>