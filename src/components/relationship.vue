<template>
    <div>
    <div class="left-side-relationship">
 <div class="box-relationship"> 
    
    <div class="sub-relationship"> "We promise to help you to overcome your issues and to focus on a better life."</div></div>
         <div class="intro-relationship">Help us to identify relationship issues that you have. So, mark your issues from following list</div>
         
      
 <div class="checklist-relationship">
    <input type="checkbox" id="check1" class="check-relationship" value="Trust">Trust issues<br/>
    <input type="checkbox" id="check2" class="check-relationship" value="Arguments & conflicts">Arguments & conflicts<br/>
    <input type="checkbox" id="check3" class="check-relationship" value="Communicating poorly">Communicating poorly<br/>
    <input type="checkbox" id="check4" class="check-relationship" value="Dealing with feeling of jealosy">Dealing with feeling of jealosy<br/>
    <input type="checkbox" id="check5" class="check-relationship" value="Medding of parents">Medding of parents<br/>
    <input type="checkbox" id="check6" class="check-relationship" value="Violating personal boundaries">Violating personal boundaries<br/>
    <input type="checkbox" id="check7" class="check-relationship" value="Fights about ex-partners">Fights about ex-partners<br/>
    <input type="checkbox" id="check8" class="check-relationship" value="Cheating">Cheating<br/>
    <input type="checkbox" id="check9" class="check-relationship" value="Disrespect & dishonest">Disrespect & dishonest<br/>

 </div>
</div>
<div class="right-side-relationship" data-aos="fade-left" data-aos-duration="2000" >
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

.left-side-relationship{
    width: 70%;
    
    margin-top: 50px;
float: left;
    
}
.right-side-relationship{
    width:29%;
    
    margin-left: 1%;
    margin-top: 50px;
    background-color: chocolate;
    
    float: right;
}
.box-relationship{
    width: 100%;
    background-image: url('/assets/images/bg3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;

}
.sub-relationship{
    
    text-align: center;
    font-style: italic;
    font-weight: bolder;
    font-size: 5vmin;
    font-family: Comic Sans MS;
    color :white;
    text-shadow: 2px 3px brown;
    
  }
  .checklist-relationship{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3vmin;
    padding-left: 33%;
    line-height: 40px;
  }
@media screen and (max-width:680px){
.left-side-relationship{
    width: 100%;
}
.right-side-relationship{
    display: none;
}

}
.intro-relationship{
    text-align: center;
 font-size: 3vmin;
 font-weight: bold;
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 
}
.check-relationship{
    margin-right: 7px;
}


</style>