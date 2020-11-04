<template>
    <div>
    <div class="left-side-academic">
 <div class="box-academic"> 
    
    <div class="sub-academic"> "We promise to help you to overcome your issues and to focus on a better life."</div><br/><br/>
   </div>  
    <div class="intro-academic">Help us to identify relationship issues that you have. So, mark your issues from following list</div>
         
      
 <div class="checklist-academic">
    <input type="checkbox" id="checklist1" class="check-academic" value="Exam fear">Exam fear<br/>
    <input type="checkbox" id="checklist2" class="check-academic" value="Lack of english knowledge">Lack of english knowledge<br/>
    <input type="checkbox" id="checklist3" class="check-academic" value="Problem of selecting a career">Problem of selecting a career<br/>
    <input type="checkbox" id="checklist4" class="check-academic" value="Exam stress">Exam stress<br/>
    <input type="checkbox" id="checklist5" class="check-academic" value="Stress because of the previous low grades">Stress because of the previous low grades<br/>
    <input type="checkbox" id="checklist6" class="check-academic" value="Lack of motivation">Lack of motivation<br/>
    <input type="checkbox" id="checklist7" class="check-academic" value="Unemployment & worry about future">Unemployment & worry about future<br/>
    <input type="checkbox" id="checklist8" class="check-academic" value="Scarcity of the resources">Scarcity of the resources<br/>
   

 </div>
</div>
<div class="right-side-academic" data-aos="fade-left" data-aos-duration="2000" >
   <p>d yudy ydyuwduw ydwu yudwwwwwwwww </p><p>d yudy ydyuwduw ydwu yudwwwwwwwww </p><p>d yudy ydyuwduw ydwu yudwwwwwwwww </p>
   <p>d yudy ydyuwduw ydwu yudwwwwwwwww </p><p>d yudy ydyuwduw ydwu yudwwwwwwwww </p>
   <p>d yudy ydyuwduw ydwu yudwwwwwwwww </p>
   <p>d yudy ydyuwduw ydwu yudwwwwwwwww </p><p>d yudy ydyuwduw ydwu yudwwwwwwwww </p><p>d yudy ydyuwduw ydwu yudwwwwwwwww </p>
   <p>d yudy ydyuwduw ydwu yudwwwwwwwww </p>
   <p>d yudy ydyuwduw ydwu yudwwwwwwwww </p>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
body{
    margin: 0px;
padding: 0%;
border: 0px;
}

.left-side-academic{
    width: 70%;
    
    margin-top: 50px;
float: left;
    
}
.right-side-academic{
    width:29%;
    
    margin-left: 1%;
    margin-top: 50px;
    background-color: chocolate;
    
    float: right;
}
.box-academic{
    width: 100%;
    background-image: url('/assets/images/bg3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;

}
.sub-academic{
    
    text-align: center;
    font-style: italic;
    font-weight: bolder;
    font-size: 5vmin;
    font-family: Comic Sans MS;
    color :white;
    text-shadow: 2px 3px brown;
    
  }
  .checklist-academic{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3vmin;
    padding-left: 33%;
    line-height: 40px;
  }
@media screen and (max-width:680px){
.left-side-academic{
    width: 100%;
}
.right-side-academic{
    display: none;
}

}
.intro-academic{
    text-align: center;
 font-size: 3vmin;
 font-weight: bold;
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 
}
.check-academic{
    margin-right: 7px;
}


</style>