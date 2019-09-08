<template>
    <div class="hello" style="font-family:calibri;font-size:10px">
        <h2 style="color:aqua"><strong>{{msg}}</strong></h2>
        <div class="infoTile"><strong>
            <p>
                The Roscosmos State Corporation for Space Activities commonly known as Roscosmos is a state corporation responsible for the wide range and types of space flights and cosmonautics programs for the Russian Federation. The launch facilities used are Baikonur Cosmodrome in Kazakhstan (with most launches taking place there, both manned and unmanned), and Vostochny Cosmodrome being built in the Russian Far East in Amur Oblast.
            </p>
        <h2 style="color:aqua"><strong>{{msg1}}</strong></h2>
           <h3 style="color:red"><strong>{{msg2}}</strong></h3>
            <p>
                The Russian Space Agency is one of the partners in the International Space Station (ISS) program; it contributed the core space modules Zarya and Zvezda, which were both launched by Proton rockets and later were joined by NASA's Unity Module. The Rassvet module was launched aboard Space Shuttle Atlantis and will be primarily used for cargo storage and as a docking port for visiting spacecraft. The Nauka module is the last component of the ISS, due to be launched in November 2019. Roscosmos is furthermore responsible for expedition crew launches by Soyuz-TMA spacecraft and resupplies the space station with Progress space transporters.
            </p>
            <h3 style="color:red"><strong>{{msg3}}</strong></h3>
            <p>
               RKA operates a number of programs for earth science, communication, and scientific research. Future projects include the Soyuz successor, the Prospective Piloted Transport System, scientific robotic missions to one of the Mars moons as well as an increase in Lunar orbit research satellites.
            </p>
            <p>
              <p>•	Luna-Glob Moon orbiter with penetrators, planned in 2025</p>
<p>•	Venera-D Venus lander, planned in 2025</p>
<p>•	Fobos-Grunt Mars mission, lost in low Earth orbit in 2012</p>
            <p style="color:red">FORMED: FEB 25,1992</p>
<p style="color:red">HEADQUARTERS: Shchepkin Street 42, Moscow, Russia</p>  
       </strong> </div>
       <div class="infoTile"><strong>
              <h2 style="color:aqua"><strong>{{msg4}}</strong></h2>

        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="item in data" v-bind:key="item">
                    <div class="tile">
                        <div class="wrapper">
                            <div class="header">
                            {{item.name}}
                            <div class="banner-img">
                            <img src="\static\ROSCOSMOS.jpg" alt="Image 1">
                            </div>

                            <div class="dates">
                                <div class="start">
                                <strong>{{item.date}}</strong>                                
                                </div>
                                {{item.details}}
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div></div>              
        </strong>
       </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'roscosmos',
  data () {
    return {
      msg:"ROSCOSMOS (Russian: Роскосмос)",
      msg1:"CURRENT PROGRAMS",
      msg2:"ISS Involvement",
      msg3:"Science Programs",
      msg4:"UPCOMING LAUNCHES",
      data: []
    }
  },
  mounted() {
      var self = this
    axios.get("http://localhost:8000/launches/getRoscosmos").then((res) => {
      console.log(res.data)
      self.data = res.data.data
    })
  }
}
</script>

<style>
    body {
  background-color: black;
  color: white;
}

* { margin: 0px; padding: 0px; }
.infoTile{
	width: 100%;
  color: white;
    font-size: 20px;
	border-radius:5px;
	box-shadow:0px 2px 3px -1px rgba(151, 171, 187, 0.7);
	float:left;
  	transform-style: preserve-3d;
  	margin: 10px 5px;
    padding: 10px;
}
</style>