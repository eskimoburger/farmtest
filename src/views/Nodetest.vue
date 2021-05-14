<template>
  <div class="  text-3xl flex flex-col gap-5 mx-8 my-8 ">
    <div class="flex justify-between bg-white  rounded-2xl  ">
      <div class="flex ">
        <img
          src="../assets/node.png"
          class="p-3"
          width="100"
          height="100"
          alt=""
        />
        <div class="text-black font-bold flex  items-center ">
          Node {{ nodeid }} in Farm {{ id }}
        </div>
      </div>
      <div class="text-gray-600 font-bold  p-8 ">
        Create : {{ nodeData.create }}
      </div>
    </div>

    <div class="flex justify-between flex-wrap gap-5 ">
      <!-- ---------------- condition ------------------ -->

      <div
        class="  flex items-center px-5 space-x-5  bg-white rounded-2xl"
        v-if="statusData"
      >
        <div
          class=" w-10 h-10 bg-green-500 rounded-full border-b-4 border-r-4  border-green-300 "
        ></div>
        <p class="text-black font-bold  ">Online</p>
      </div>
      <div
        class="  flex items-center px-5 space-x-5  bg-white rounded-2xl"
        v-else
      >
        <div
          class=" w-10 h-10 bg-red-500 rounded-full border-b-4 border-r-4  border-red-700   "
        ></div>
        <p class="text-black font-bold  ">Offline</p>
      </div>

      <!-- --------------------------------------------- -->
      <div class="text-gray-600 font-bold  p-8 bg-white rounded-2xl ">
        Update every : 5min
      </div>
      <div class="text-gray-600 font-bold  p-8 bg-white rounded-2xl ">
        Update Time : {{ nodeData.updatetime }}
      </div>
    </div>

    <div class=" flex flex-wrap gap-10">
      <div class="text-black font-bold  p-8  bg-white rounded-2xl ">
        <i class="fas fa-thermometer-three-quarters text-red-500"></i>
        Temperature : {{ nodeData.temp }}
      </div>
      <div class="text-black font-bold  p-8  bg-white rounded-2xl ">
        <img
          src="../assets/humidity.svg "
          alt="ec"
          class=" w-10  h-10   inline-block "
        />
        Humidity : {{ nodeData.humi }}
      </div>

      <div class="text-black font-bold  p-8  bg-white rounded-2xl ">
        <img
          src="../assets/moisture-wicking-fabric.svg "
          alt="mt"
          class=" w-10  h-10   inline-block "
        />
        Moisture : {{ nodeData.mois }}
      </div>

      <div class="text-black font-bold  p-8  bg-white rounded-2xl ">
        <img
          src="../assets/hydro-power.svg "
          alt="ec"
          class=" w-10  h-10   inline-block "
        />
        EC : {{ nodeData.ec }}
      </div>

      <div class="text-black font-bold  p-8  bg-white rounded-2xl ">
        <i class="far fa-sun text-yellow-400"></i>
        Light : {{ nodeData.light }}
      </div>
    </div>

    <div class=" flex flex-wrap gap-5 justify-center  text-2xl     ">
      <div
        v-for="(relay, index) in nodeData.relay"
        :key="index"
        class=" w-25%  text-black font-bold  p-8  bg-white rounded-2xl  "
      >
        <div class="flex justify-between text-3xl">
          <p>Relay {{ index + 1 }}</p>

          <div class="flex space-x-5">
            <p>Status</p>
            <label for="toggle" class="flex items-center cursor-pointer">
              <div class="relative">
                <input type="checkbox" id="toggle" class="sr-only" />

                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

                <div
                  class="dot absolute left-1 top-1 bg-red-500 w-6 h-6 rounded-full transition"
                ></div>
              </div>

              <div class="ml-3 text-gray-700 font-medium"></div>
            </label>
          </div>
        </div>
        <div class="flex justify-between mt-3">
          <p>On / Off on Time</p>
          <label for="toggle" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggle" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div
                class="dot absolute left-1 top-1 bg-red-500 w-6 h-6 rounded-full transition"
              ></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium"></div>
          </label>
        </div>
        
        <div class="flex flex-col space-y-2  mt-2">
          <p>Time 1 : ON</p>
          <div class="flex space-x-5  ">
            <input type="date" class="border-black border-2 p-1 rounded-xl" />
            <input type="time" class="border-black border-2 p-1 rounded-xl" />
          </div>
          <p>Time 1 : OFF</p>
          <div class="flex space-x-5  ">
            <input type="date" class="border-black border-2 p-1 rounded-xl" />
            <input type="time" class="border-black border-2 p-1 rounded-xl" />
          </div>
        </div>
        <div class="flex flex-col space-y-2  mt-2">
          <p>Time 2 : ON</p>
          <div class="flex space-x-5  ">
            <input type="date" class="border-black border-2 p-1 rounded-xl" />
            <input type="time" class="border-black border-2 p-1 rounded-xl" />
          </div>
          <p>Time 2 : OFF</p>
          <div class="flex space-x-5  ">
            <input type="date" class="border-black border-2 p-1 rounded-xl" />
            <input type="time" class="border-black border-2 p-1 rounded-xl" />
          </div>
        </div>
        

        <div class="flex justify-between mt-2">
          <p>On / Off on Data</p>
          <label for="toggle" class="flex items-center cursor-pointer">
            <div class="relative">
              <input type="checkbox" id="toggle" class="sr-only" />

              <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

              <div
                class="dot absolute left-1 top-1 bg-red-500 w-6 h-6 rounded-full transition"
              ></div>
            </div>

            <div class="ml-3 text-gray-700 font-medium"></div>
          </label>
        </div>
        <div class="flex flex-col space-y-8">
          <p>Min</p>
          <Slider v-model="minValue" class=" " />
          <p>Max</p>
          <Slider v-model="maxValue" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  props: ["id", "nodeid"],
  data() {
    return {
      nodeData: [],
      statusData: false,
      minValue: 30,
      maxValue: 38,
    };
  },
  components: { Slider },

  watch: {
    //from
    $route(to, from) {
      console.log("to", to.params);
      console.log("from", from.params);

      if (to.params.id == undefined) {
        console.log("No params FarmID");
      }
      if (to.params.nodeid == undefined) {
        console.log("No params NodeID");
      } else {
        console.log(to.params.id);
        console.log(to.params.nodeid);
        fetch("http://localhost:3000/Soontorn/" + to.params.id)
          .then((res) => res.json())
          .then((data) => {
            this.nodeData = data.node[this.nodeid - 1];
            console.log(data.node[this.nodeid - 1]);
            //console.log(" number " + data.node.length);
          })

          .catch((err) => console.log(err.message));
      }
    },
  },

  mounted() {
    fetch("http://localhost:3000/Soontorn/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(" number " + data.node.length);
        console.log(data.node[this.nodeid - 1]);
        this.nodeData = data.node[this.nodeid - 1];

        console.log(this.id);
        console.log(this.nodeid);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
