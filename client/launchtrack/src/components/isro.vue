<template>
    <div class="hello" style="font-family:calibri;font-size:10px;color:white">
        <h2 style="color:aqua"><strong>{{msg}}</strong></h2>
        <div class="infoTile"><strong>
            <p>
                The Indian Space Research Organisation is the space agency of the Government of India headquartered in the city of Bengaluru. Its vision is to "harness space technology for national development while pursuing space science research and planetary exploration."The Indian National Committee for Space Research (INCOSPAR) was established in the tenure of Jawaharlal Nehru  under the Department of Atomic Energy (DAE) in 1962, with the urging of scientist Vikram Sarabhai recognizing the need in space research. INCOSPAR grew and became ISRO in 1969,also under the DAE. In 1972, Government of India setup a Space Commission and the Department of Space (DOS),bringing ISRO under the DOS. The establishment of ISRO thus institutionalized space research activities in India.It is managed by the DOS, which reports to the Prime Minister of India.
            </p>
            <p>
                ISRO built India's first satellite, Aryabhata, which was launched by the Soviet Union on 19 April 1975. ISRO subsequently developed two other rockets: the Polar Satellite Launch Vehicle (PSLV) for launching satellites into polar orbits and the Geosynchronous Satellite Launch Vehicle (GSLV) for placing satellites into geostationary orbits. ISRO sent a lunar orbiter, Chandrayaan-1, on 22 October 2008 and a Mars orbiter, Mars Orbiter Mission, on 5 November 2013, which entered Mars orbit on 24 September 2014, making India the first nation to succeed on its maiden attempt to Mars, and ISRO the fourth space agency in the world as well as the first space agency in Asia to reach Mars orbit. On 22 July 2019, ISRO launched its second lunar mission Chandrayaan-2, which consists of an orbiter, lander and rover, to study the distribution of lunar water and lunar geology.
            </p>
            <p style="color:red">FORMED: AUGUST 15,1969</p>
<p style="color:red">HEADQUARTERS: Bengaluru, Karnataka, India</p>
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
                            <img src="\static\ISRO.webp" alt="Image 1">
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
  name: 'isro',
  data () {
    return {
      msg:"Indian Space Research Organisation (ISRO)",
      msg1:"Space flight programs",
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