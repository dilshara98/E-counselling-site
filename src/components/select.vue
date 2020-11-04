<template>
    <div class="type">
        <div class="typeofimage" data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="50" transition-duration="1500">
          <router-link to="/select/personal"> <img class="counsel1" src="@/assets/images/2.jpg"><br/></router-link>
            <div class="img1">Counselling for personal , mental issues</div>
           <router-link to="/select/relationship"> <img class="counsel2" src="@/assets/images/3.jpg"><br/></router-link>
            <div class="img2">Counselling for relationship</div>
           <router-link to="/select/academic"> <img class="counsel3" src="@/assets/images/academic.jpg"><br/></router-link>
            <div class="img3">Counselling for academics</div>
          </div>
          <router-view></router-view>
      </div>
</template>
<script>

export default {
    
}
</script>
<style>
.typeofimage img{
    width:50%;
    height: 300px;
    padding: 30px;
    display: block;
    margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  box-shadow: 1px 7px 15px 2px crimson;
}


.img1{
    top: 150px;
    width:40%;
}
.img2{
    top:500px;
}
.img3{
    top:800px;
}
.img2, .img3, .img1 {
    font-size: 3vw;
    left:30%;
    position: absolute;
   font-style: italic;
   text-shadow: 2px 3px chocolate;
   color: #980000;
   font-family: Comic Sans MS;
}
.bg{
    background-color:mintcream;
}


</style>