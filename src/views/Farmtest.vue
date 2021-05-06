<template>
  <div v-for="farm in farmData" :key="farm.id">
    <div class="m-8 rounded-3xl">
      <div class="flex flex-col ">
        <div class="flex justify-center   ">
          <div
            class=" block  h-44 w-44 rounded-full bg-gray-700 overflow-hidden "
          >
            <img
              :src="require(`../assets/${farm.img}`)"
              class=" w-full h-full object-cover "
              alt="logofarm"
            />
          </div>

          <div class="text-black font-bold text-6xl p-8 ">
            Farm Name : {{ farm.farmname }} {{ farm.id }}
          </div>
        </div>

        <div class="  bg-white mt-3 rounded-3xl  text-gray-900 shadow-2xl p-6 ">
          <div class="flex justify-between mb-4">
            <p class=" text-4xl font-bold">Customer Detail</p>
            <p class=" text-4xl text-gray-500 font-bold">
              Create : {{ farm.create }}
            </p>
          </div>

          <p class=" text-2xl ">Customer Name : {{ farm.customername }}</p>
          <p class=" text-2xl ">Package : {{ farm.package }}</p>
          <p class=" text-2xl ">Q’ty Users : {{ farm.quantityuser }}</p>
          <div class=" text-2xl">
            <p>
              Gateway :
              <span
                :class="[
                  farm.gateway
                    ? ' text-green-500 font-bold'
                    : ' text-red-500 font-bold',
                ]"
                >{{ farm.gateway ? "Yes" : "No" }}</span
              >
            </p>

            <p>
              Analytics :
              <span
                :class="[
                  farm.analytic
                    ? ' text-green-500 font-bold'
                    : ' text-red-500 font-bold',
                ]"
                >{{ farm.analytic ? "Yes" : "No" }}</span
              >
            </p>
            <p>
              Block Chain :
              <span
                :class="[
                  farm.blockchain
                    ? ' text-green-500  font-bold'
                    : ' text-red-500 font-bold',
                ]"
                >{{ farm.blockchain ? "Yes" : "No" }}</span
              >
            </p>
          </div>

          <p class=" text-2xl ">Expired Date : {{ farm.exp }}</p>
        </div>

        <div class="flex flex-col bg-white mt-12  rounded-3xl shadow-2xl p-6 ">
          <div class=" flex  justify-center mb-5">
            <p class=" block text-4xl font-bold ">
              Farm Detail
            </p>
          </div>

          <p class=" block text-4xl ">Number Node : {{ farm.node.length }}</p>
          <p class=" block text-4xl ">
            Number Parameter : {{ farm.parameter }}
          </p>
          <p class=" block text-4xl ">
            Number Dashboard : {{ farm.dashboard }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "farmtest",

  data() {
    return {
      farmData: [],
      imgData: "farm1icon.png",
    };
  },
  mounted() {
    fetch("http://localhost:3000/Soontorn")
      .then((res) => res.json())
      .then((data) => {
        this.farmData = data;
        //this.imgData = data[0].img;
        console.log(data[0].img);
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
