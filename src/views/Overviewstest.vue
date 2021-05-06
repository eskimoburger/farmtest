<template>
  <div v-for="farm in farmData" :key="farm.id">
    <div class="flex flex-wrap gap-5 flex-row text-4xl  justify-center my-8   ">
      <div
        class="w-5/12  bg-white p-6 rounded-3xl shadow-2xl hover:text-white hover:bg-orangeSuper cursor-pointer"
      >
        <div class="flex justify-between mb-7 ">
          <p class="font-extrabold">Farm {{ farm.id }}</p>
          <p class="  ">Create : {{ farm.create }}</p>
        </div>
        <div class=" ml-7 text-2xl ">
          <p>Number Node : {{ farm.node.length }}</p>
          <p>Number Parameter : {{ farm.parameter }}</p>
          <p>Number Dashboard : {{ farm.dashboard }}</p>
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
          <p>Farm Name : {{ farm.farmname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overviewtest",
  data() {
    return {
      farmData: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Soontorn")
      .then((res) => res.json())
      .then((data) => (this.farmData = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
