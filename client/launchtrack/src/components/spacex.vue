<template>
    <div class="hello" style="font-family:calibri;font-size:10px;color:white">
        <h2 style="color:aqua"><strong>{{msg}}</strong></h2>
        <div class="infoTile"><strong>
            <p>
                Space Exploration Technologies Corp., also known as SpaceX, is a private US aerospace manufacturer and space transportation services company.
            </p>
            <p>
                SpaceX reusable launch system development program: in December 2015, a Falcon 9 successfully accomplished a propulsive vertical landing. This was the first such achievement by a rocket for orbital spaceflight.In April 2016, with the launch of CRS-8, SpaceX successfully vertically landed the first stage on an ocean drone ship landing platform. In May 2016, in another first, SpaceX again landed the first stage, but during a significantly more energetic geostationary transfer orbit mission.In March 2017, SpaceX became the first to successfully re-launch and land the first stage of an orbital rocket.
            </p>
            <p>
              In September 2016, CEO Elon Musk unveiled the Interplanetary Transport System, a privately funded initiative to develop spaceflight technology for use in crewed interplanetary spaceflight. In 2017, Musk unveiled an updated configuration of the system, now named Starship and Super Heavy, which is planned to be fully reusable and will be the largest rocket ever on its debut, currently scheduled for the early 2020s.
            </p>
              <h3><p style="color:aqua">ACHIEVEMENTS</p></h3>
              <div style="text-align:left">
                 <p> •	The first privately funded liquid-fueled rocket to reach orbit (Falcon 1 flight 4 on September 28, 2008)</p>
<p>•	The first privately developed liquid-fueled rocket to put a commercial satellite in orbit (RazakSAT on Falcon 1 flight 5 on July 14, 2009)</p>
<p>•	The first private company to successfully launch, orbit, and recover a spacecraft (Dragon capsule on COTS demo flight 1 on December 9, 2010)</p>
            <p>•	The first private company to send a spacecraft to the International Space Station (Dragon C2+ on May 25, 2012)</p>
<p>•	The first private company to send a satellite into geosynchronous orbit (SES-8 on Falcon 9 flight 7 on December 3, 2013)</p>
<p>•	The first landing of an orbital rocket's first stage on land (Falcon 9 flight 20 on December 22, 2015)</p>
<p>•	The first landing of an orbital rocket's first stage on an ocean platform (Falcon 9 flight 23 on April 8, 2016)</p>
<p>•	The first relaunch and landing of a used orbital rocket stage (B1021 on Falcon 9 flight 32 on March 30, 2017) </p>
<p>•	The first controlled flyback and recovery of a payload fairing (Falcon 9 flight 32 on March 30, 2017) </p>
<p>•	The first reflight of a commercial cargo spacecraft. (Dragon C106 on CRS-11 mission on June 3, 2017) </p>

</div>
            <p style="color:red">FORMED: 2002</p>
<p style="color:red">HEADQUARTERS: Hawthorne, California </p>
<p style="color:red">FOUNDER: ELON MUSK</p>
       </strong> </div>
       <h2 style="color:aqua"><strong>{{msg1}}</strong></h2>
       <div class="infoTile"><strong>
              <p>
                <a href="https://en.wikipedia.org/wiki/SpaceX_rocket_engines">Rocket Engines</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Falcon_(rocket_family)">Falcon launch vehicles</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/SpaceX_Dragon">Dragon capsules</a>
              </p>
        </strong>
        <div class="infoTile"><strong>
              <h2 style="color:aqua"><strong>{{msg2}}</strong></h2>

        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="item in data" v-bind:key="item">
                    <div class="tile">
                        <div class="wrapper">
                            <div class="header">
                            {{item.name}}
                            <div class="banner-img">
                            <img src="\static\SPACEX.jpg" alt="Image 1">
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
                </div>
        </div>
        </strong></div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'spacex',
  data () {
    return {
      msg:"SPACEX(Space Exploration Technologies Corp.)",
      msg1:"SPACECRAFT AND FLIGHT HARDWARE",
      msg2:"UPCOMING LAUNCHES",
      data: []
    }
  },
  mounted() {
    var self = this
    axios.get("http://localhost:8000/launches/getSpaceX").then((res) => {
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