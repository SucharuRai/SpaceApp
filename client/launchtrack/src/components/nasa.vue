<template>
    <div class="hello" style="font-family:calibri;font-size:10px;color:white">
        <h2 style="color:aqua"><strong>{{msg}}</strong></h2>
        <div class="infoTile"><strong>
            <p>
                The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research.
            </p>
            <p>
                NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science.Since its establishment, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion Multi-Purpose Crew Vehicle, the Space Launch System and Commercial Crew vehicles. The agency is also responsible for the Launch Services Program which provides oversight of launch operations and countdown management for unmanned NASA launches.
            </p>
            <p>
                NASA science is focused on better understanding Earth through the Earth Observing System;advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft missions such as New Horizons; and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated programs.
            </p>
            <p style="color:red">FORMED: JULY 29,1958</p>
<p style="color:red">HEADQUARTERS: Two Independence Square, Washington, D.C.,United States</p>
<p style="color:red">MOTTO: FOR THE BENEFIT OF ALL</p>
       </strong> </div>
       <h2 style="color:aqua"><strong>{{msg1}}</strong></h2>
       <div class="infoTile"><strong>
              <p>
                <a href="https://en.wikipedia.org/wiki/North_American_X-15">X-15 rocket plane (1959–1968)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Project_Mercury">Project Mercury (1958–1963)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Project_Gemini">Gemini (1961–1966)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Skylab">Skylab (1965–1979))</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Apollo%E2%80%93Soyuz_Test_Project">Apollo–Soyuz Test Project (1972–1975)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Space_Shuttle_program">Space Shuttle program (1972–2011)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/International_Space_Station">International Space Station (1993–present)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Commercial_Resupply_Services">Commercial programs (2006–present)</a>
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Artemis_program">Artemis program (2017–present)</a>
              </p>
              </strong></div>
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
                            <img src="\static\NASA.jpg" alt="Image 1">
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
</template>

<script>
import axios from "axios";
export default {
  name: 'nasa',
  data () {
    return {
      msg:"National Aeronautics and Space Administration(NASA)",
      msg1:"Space flight programs",
      msg2:"UPCOMING LAUNCHES",
      data: []
    }
  },
  mounted() {
    var self = this
    axios.get("http://localhost:8000/launches/getNASA").then((res) => {
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