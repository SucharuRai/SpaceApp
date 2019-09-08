<template>
  <div class="hello" style="font-family:calibri;font-size:10px">
    <h1 style="color:aqua">{{ msg }}</h1>
    <div class="infoTile" style="color:white">
            <p><strong>
                A rocket is a missile, spacecraft, aircraft or other vehicle that obtains thrust from a rocket engine. Rocket engine exhaust is formed entirely from propellant carried within the rocket before use. Rocket engines work by action and reaction and push rockets forward simply by expelling their exhaust in the opposite direction at high speed, and can therefore work in the vacuum of space.
            </strong></p>
    </div>
    <div style="color:aqua"><h2>UPCOMING LAUNCHES</h2></div>

  <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div v-on:click="openNasa()"
                                target="_blank">
                    <div class="tile">
                        <div class="wrapper">
                            <div class="header">
                            NASA
                            <div class="banner-img">
                            <img src="\static\NASA.jpg" alt="Image 1">
                            </div>

                            <div class="dates">
                                <div class="start">
                                <strong>Click to Open</strong>                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="tile">
                    <div v-on:click="openSpacex()"
                                target="_blank">
                        <div class="wrapper">
                            <div class="header">SPACEX</div>

                            <div class="banner-img">
                            <img src="\static\SPACEX.jpg" alt="Image 1">
                            </div>

                            <div class="dates">
                                <div class="start">
                                <strong>Click to Open</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="tile">
                    <div v-on:click="openIsro()"
                                target="_blank">
                        <div class="wrapper">
                            <div class="header">ISRO</div>

                            <div class="banner-img">
                                <img src="\static\ISRO.webp" alt="Image 1">
                            </div>

                            <div class="dates">
                                <div class="start">
                                <strong>Click to Open</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="tile">
                    <div v-on:click="openRoscosmos()"
                                target="_blank">
                    <div class="wrapper">
                        <div class="header">ROSCOSMOS</div>

                        <div class="banner-img">
                            <img src="\static\ROSCOSMOS.jpg" alt="Image 1">
                        </div>

                        <div class="dates">
                            <div class="start">
                                <strong>Click to Open</strong>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="tile">
                    <div v-on:click="openEsa()"
                                target="_blank">
                    <div class="wrapper">
                        <div class="header">EuropeanSpaceAgency</div>

                        <div class="banner-img">
                            <img src="\static\ESA.png" alt="Image 1">
                        </div>

                        <div class="dates">
                            <div class="start">
                                <strong>Click to Open</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

  <div class="container-fluid">
        <div class="row">
            
        </div>
    </div>
    <div class="pad"><h2 class="about"><div v-on:click="openPorts()"
                                target="_blank"><a> Spaceports all over the World
                                </a></div></h2></div>
    <div class="pad"><h2 class="about"><div v-on:click="openAbout()"
                                target="_blank"><a> KNOW MORE
                                </a></div></h2></div>
  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:"Rocket Launch Information"
    }
  },
  methods:{
      openNasa(){
          var self=this;
          this.$router.push({
              name:'nasa'
          })
      },
      openSpacex(){
          var self=this;
          this.$router.push({
              name:'spacex'
          })
      },
      openIsro(){
          var self=this;
          this.$router.push({
              name:'isro'
          })
      },
      openRoscosmos(){
          var self=this;
          this.$router.push({
              name:'roscosmos'
          })
      },
      openEsa(){
          var self=this;
          this.$router.push({
              name:'esa'
          })
      },
      openPorts(){
          var self=this;
          this.$router.push({
              name:'spaceports'
          })
      },
       openAbout(){
          var self=this;
          this.$router.push({
              name:'about'
          })
      }
  }
}
</script>
<style>
body {
  background-color: black;
  color: white;
}
/*	Reset & General
---------------------------------------------------------------------- */
* { margin: 0px; padding: 0px; }
.infoTile{
	width: 100%;
    color: black;
    font-size: 20px;
	background:black;
	border-radius:5px;
	box-shadow:0px 2px 3px -1px rgba(151, 171, 187, 0.7);
	float:left;
  	transform-style: preserve-3d;
  	margin: 10px 5px;
    padding: 10px;
}

.tile{
	width: 100%;
	background:black;
	border-radius:5px;
	box-shadow:0px 2px 3px -1px rgba(151, 171, 187, 0.7);
	float:left;
  	transform-style: preserve-3d;
  	margin: 10px 5px;

}

.header{
	border-bottom:1px solid #ebeff2;
	padding:19px 0;
	text-align:center;
	color:#59687f;
	font-size:600;
	font-size:19px;	
	position:relative;
}

.banner-img {
	padding: 5px 5px 0;
}

.banner-img img {
	width: 100%;
  height: 150px;
	border-radius: 5px;
}

.dates{
	border:1px solid #ebeff2;
	border-radius:5px;
	padding:20px 0px;
	margin:10px 20px;
	font-size:16px;
	color:#5aadef;
	font-weight:600;	
	overflow:auto;
}
.dates div{
	float:left;
	width:50%;
	text-align:center;
	position:relative;
}
.dates strong{
	display:block;
	color:#adb8c2;
	font-size:11px;
	font-weight:700;
}
.pad{
    padding: 5%
}
.about:hover {
    color: red
}
</style>

