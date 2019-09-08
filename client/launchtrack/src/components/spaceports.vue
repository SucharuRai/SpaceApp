<template>
    <div class="hello" style="font-family:calibri;font-size:10px">
    <h1 style="color:aqua">{{ msg }}</h1>
    <p></p>
            <table>
            <tr>
                <th>Serial Number</th>
                <th>Spaceport</th>
                <th>Country</th>
            </tr>
            <tr v-for="(item, index) in data" v-bind:key="item"> 
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.country}}</td>
            </tr>
            </table>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'spaceports',
  data () {
    return {
      msg:"Spaceports",
      data: []
    }
  },
  mounted() {
    var self = this
    axios.get("http://localhost:8000/launches/getSpaceports").then((res) => {
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td{
  border: 1px solid #dddddd;
  color: white;
  font-size: 150%;
  text-align: left;
  padding: 10px;
}
th{
    font-size: 18px;
    color: blanchedalmond;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: grey;
}
</style>