<template>
    <div>
         <div class="left-side-personal">
            <div class="box-personal"> 
    
               <div class="sub-personal"> "We promise to help you to overcome your issues and to focus on a better life."</div>
            </div>     
               <div class="intro-personal">Help us to identify personal or mental issues that you have. So, mark your issues from following list</div>
                    
                 
            <div class="checklist-personal">
               <input type="checkbox" id="checking1" class="check-personal" value="anger">Anger<br/>
               <input type="checkbox" id="checking2" class="check-personal" value="depression">Depression<br/>
               <input type="checkbox" id="checking3" class="check-personal" value="anxiety">Anxiety<br/>
               <input type="checkbox" id="checking4" class="check-personal" value="eating problems">Eating problems<br/>
               <input type="checkbox" id="checking5" class="check-personal" value="loneliness">Loneliness<br/>
               <input type="checkbox" id="checking6" class="check-personal" value="Personality disorders">Personality disorders<br/>
               <input type="checkbox" id="checking7" class="check-personal" value="Sleeping problems">Sleeping problems<br/>
               <input type="checkbox" id="checking8" class="check-personal" value="Stress">Stress<br/>
               <input type="checkbox" id="checking9" class="check-personal" value="Drug abuse">Drug abuse<br/>
               <input type="checkbox" id="checking10" class="check-personal" value="Suicidal feeling">Suicidal feeling<br/>
               <input type="checkbox" id="checking11" class="check-personal" value="Family problems">Family problems<br/>
               <input type="checkbox" id="checking12" class="check-personal" value="Money">Money<br/>
               <input type="checkbox" id="checking13" class="check-personal" value="Dissociative disorders">Dissociative disorders<br/>
               <input type="checkbox" id="checking14" class="check-personal" value="Self harm">Self harm<br/>
            </div>
           
         </div>
         <div class="right-side-personal" data-aos="fade-left" data-aos-duration="2000" >
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

.left-side-personal{
    width: 70%;
    
    margin-top: 50px;
float: left;
padding-top: 70px;
    
}
.right-side-personal{
    width:29%;
    
    margin-left: 1%;
    margin-top: 50px;
    background-color: chocolate;
    padding-top: 70px;

    float: right;
}
.box-personal{
    width: 100%;
    background-image: url('/assets/images/bg3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 30px;

}
.sub-personal{
    
    text-align: center;
    font-style: italic;
    font-weight: bolder;
    font-size: 5vmin;
    font-family: Comic Sans MS;
    color :white;
    text-shadow: 2px 3px brown;
    
  }
  .checklist-personal{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3vmin;
    padding-left: 33%;
    line-height: 40px;
  }
@media screen and (max-width:680px){
.left-side-personal{
    width: 100%;
}
.right-side-personal{
    display: none;
}

}
.intro-personal{
    text-align: center;
 font-size: 3vmin;
 font-weight: bold;
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 
}
.check-personal{
    margin-right: 7px;
}

</style>