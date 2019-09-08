<template>
    <div class="hello" style="font-family:calibri;font-size:10px">
        <strong>
        <h3 style="color:aqua"><strong>{{msg}}</strong></h3>
        <div class="infoTile">
            <p>
                A rocket works in the same manner as a balloon. Walls compress the air inside. Due to the compression, the air pushes back, balancing the pressure both in and out. Releasing the nozzle allows air to escape, which then propels the balloon forward away from the escaping air. Rockets use gas, either in liquid or solid form, to move forward.
            </p>
        </div>
        <h3 style="color:aqua"><strong>{{msg1}}</strong></h3>
        <div class="infoTile">
            <p>
                As the rocket leaves the gravitational pull of the Earth it will travel in a straight line as long as it is balanced. When it becomes pulled on by another gravitational source it will become unbalanced and curve its travel path. When a satellite orbits the Earth, the orbit remains constant and curved because it is unbalanced. The satellite must travel fast enough in that orbit to fight off friction. Friction would cause it to lose speed and fall back to Earth.
            </p>
        </div>
        <h3 style="color:aqua"><strong>{{msg2}}</strong></h3>
        <div class="infoTile">
            <p>
                A rocket's first stage gets the rocket out of the lower atmosphere, sometimes with the help of extra side boosters. Because the first stage must lift the entire rocket, its cargo (or payload), and any unused fuel, it's the biggest and most powerful section.The faster a rocket goes, the more air resistance it encounters. But the higher the rocket goes, the thinner the atmosphere gets. Combined, these two factors mean that the stress on a rocket rises and then falls during a launch, peaking at a pressure known as max q.
            </p>
            <p>
                Once the first stage has done its job, the rocket drops that portion and ignites its second stage. The second stage has a lot less to transport, and it doesn't have to fight through the thick lower atmosphere, so it usually has just one engine. At this point, rockets also let go of their fairings, the pointed cap at the rocket's tip that shields what the rocket is carrying—its payload—during the launch's first phase.
            </p>
        </div>
        <h3 style="color:aqua"><strong>{{msg3}}</strong></h3>
        <div class="infoTile">
            <p>
                A launch pad is a platform from which a rocket is launched, and they're found at facilities called launch complexes or spaceports. A typical launch pad consists of a pad and a launch mount, a metal structure that supports the upright rocket before it launches. Umbilical cables from the launch mount provide the rocket with power, cooling liquids, and top-up propellant before launch. The structure also helps shield the rocket from lightning strikes
            </p>
            <p>
                Different launch complexes have different ways of putting rockets on launch pads. At NASA's Kennedy Space Center, the space shuttle was assembled vertically and moved to the launch pad on a tank-like vehicle called a crawler. The Russian space program transports its rockets horizontally by train to the launch pad, where they're then lifted upright.
            </p>
            <p>
                Launch pads also have features that minimize damage from the rocket's launch. When a rocket first ignites, valves lining the launch pad spray hundreds of thousands of gallons of water into the air around the exhaust, which helps lessen the rocket's deafening roar. Trenches beneath the launch pad also direct the rocket's exhaust out and away from the craft, so the flames can't rise back up and engulf the rocket itself.
            </p>
        </div>
        <h3 style="color:aqua"><strong>{{msg4}}</strong></h3>
        <div class="infoTile">
            <p>
               There are many launch sites around the world, each with different pros and cons. In general, the closer a launch site is to the Equator, the more efficient it is. That's because the Equator moves faster than Earth's poles as the planet rotates, like the outer edge of a spinning record. Launch sites at higher latitudes more easily place satellites into orbits that pass over the poles.
            </p>
        </div>
        </strong>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg:"HOW A ROCKET WORKS",
      msg1:"WHAT HAPPENS TO A ROCKET IN SPACE",
      msg2:"STAGES OF A ROCKET LAUNCH",
      msg3:"LAUNCHPAD!!! What's That?",
      msg4:"WHERE ARE ROCKETS LAUNCHED?"
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