<template>
    <div class="hello" style="font-family:calibri;font-size:10px">
        <h2 style="color:aqua"><strong>{{msg}}</strong></h2>
        <div class="infoTile"><strong>
            <p>
                The European Space Agency is an intergovernmental organisation of 22 member states dedicated to the exploration of space. ESA's space flight programme includes human spaceflight (mainly through participation in the International Space Station program); the launch and operation of unmanned exploration missions to other planets and the Moon; Earth observation, science and telecommunication; designing launch vehicles; and maintaining a major spaceport, the Guiana Space Centre at Kourou, French Guiana. The main European launch vehicle Ariane 5 is operated through Arianespace with ESA sharing in the costs of launching and further developing this launch vehicle. The agency is also working with NASA to manufacture the Orion Spacecraft service module, that will fly on the Space Launch System.
            </p>
            <p style="color:red">FORMED: JULY 29,1958</p>
<p style="color:red">HEADQUARTERS: Two Independence Square, Washington, D.C.,United States</p>
<p style="color:red">MOTTO: FOR THE BENEFIT OF ALL</p>
       </strong> </div>
       <h2 style="color:aqua"><strong>{{msg1}}</strong></h2>
       <div class="infoTile"><strong>
        <h3> <p style="white">ACTIVITIES</p> </h3>
              <p>
                •	Observing the Earth
              </p>
              <p>
                •	Human Spaceflight
              </p>
              <p>
                •	Space Engineering & Technology
              </p>
              <p>
                •	Telecommunications & Integrated Applications
              </p>
              <p>
                •	Preparing for the Future
              </p>
              <p>
                •	Space for Climate
              </p>
              <h3> <p style="white">PROGRAMMES</p> </h3>
               <p>
                •	Copernicus Programme
              </p>
              <p>
                •	Cosmic Vision
              </p>
              <p>
                •	ExoMars
              </p>
              <p>
                •	FAST20XX
              </p>
              <p>
                •	Galileo
              </p>
              <p>
                •	Horizon 2000
              </p>
         </strong></div>
         <div class="infoTile"><strong>
              <h2 style="color:aqua"><strong>{{msg2}}</strong></h2>

        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="tile">
                        <div class="wrapper">
                            <div class="header">
                            ESA
                            <div class="banner-img">
                            <img src="\static\ESA.png" alt="Image 1">
                            </div>

                            <div class="dates">
                                <div class="start">
                                <strong>STARTS</strong>                                
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div></div>
        </strong></div>
    </div>
</template>

<script>
export default {
  name: 'esa',
  data () {
    return {
      msg:"EUROPEAN SPACE AGENCY(ESA)",
      msg1:"ACTIVITIES ANS PROGRAMMES",
      msg2:"UPCOMING LAUNCHES"
    }
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