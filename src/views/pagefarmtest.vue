<template>
  <div v-if="farmData">
    <div class="m-8 rounded-3xl">
      <div class="flex flex-col ">
        <div class="flex justify-between   ">
          <div class="text-black font-bold text-6xl p-8 ">
            Farm {{ farmData.id }} : {{ farmData.farmname }}
          </div>
          <div class=" text-bold mt-8 uppercase ">
            <p
              class="text-2xl  font-bold  text-white bg-green-500  border-b-4 border-r-4 border-green-700  rounded uppercase py-2 px-4"
            >
              <i class="fas fa-sync"></i> refresh
            </p>
          </div>

          <a href="https://www.google.com">
            <div
              class="text-gray-600 font-bold text-6xl p-8 hover:text-orangeSuper "
            >
              Dashboard
            </div>
          </a>
        </div>
        <div class=" flex  justify-between   flex-wrap mt-20 gap-y-10     ">
          <div>
            <div
              class=" relative  text-xl  text-white sm:text-3xl md:text-3xl  "
            >
              <img
                src="../assets/farm1_copy.png"
                alt="farm123"
                class=" h-auto rounded-3xl "
              />

              <vue-final-modal
                v-model="showNode"
                classes="flex justify-center items-center"
                content-class="bg-white rounded-3xl "
              >
                <div class=" flex flex-col text-black">
                  <div class=" flex space-x-80  text-4xl    p-5 rounded-t-3xl ">
                    <p class=" text-6xl">Node {{ showNodeIndex }}</p>
                    <div class=" space-x-5">
                      <router-link
                        :to="{
                          name: 'testnode',
                          params: { id: id, nodeid: showNodeIndex },
                        }"
                        class="bg-orangeSuper rounded-2xl px-5 py-1"
                      >
                        Edit
                      </router-link>

                      <button
                        @click="showNode = false"
                        class="fas fa-times text-red-500 "
                      ></button>
                    </div>
                  </div>
                  <div class=" p-5  text-black space-y-3 ">
                    <p>Update Time : {{ nodeDataSetup.updatetime }}</p>
                    <p>Create : {{ nodeDataSetup.create }}</p>
                    <p>Temp : {{ nodeDataSetup.temp }}</p>
                    <p>Humi : {{ nodeDataSetup.humi }}</p>
                    <p>Light : {{ nodeDataSetup.light }}</p>
                    <p>Mois : {{ nodeDataSetup.mois }}</p>
                    <p>EC : {{ nodeDataSetup.ec }}</p>
                    <div v-for="(r, index) in nodeDataSetup.relay" :key="index">
                      <p>
                        Relay {{ index + 1 }} :
                        <span
                          :class="[
                            r.relay
                              ? ' text-green-600  font-bold'
                              : ' text-red-500 font-bold',
                          ]"
                        >
                          {{ r.relay ? "ON" : "OFF" }}
                        </span>
                      </p>
                    </div>

                    <p>On/Off on Time : {{ nodeDataSetup.status_on_time }}</p>
                    <p>On/Off on Data : {{ nodeDataSetup.status_on_data }}</p>
                  </div>
                </div>
              </vue-final-modal>

              <div v-if="farmData.gateway == true">
                <button
                  class="absolute  top-22% left-2/4 bg-green-600 rounded-lg p-2"
                >
                  gateway
                </button>
              </div>
              <div v-for="(node, index) in farmData.node" :key="index">
                <div v-if="index == 0">
                  <button
                    class="absolute  bg-blue-600  left-22% top-60% rounded-lg p-1"
                    @click="
                      (showNode = true),
                        (nodeDataSetup = farmData.node[index]),
                        (showNodeIndex = index + 1)
                    "
                  >
                    Node {{ index + 1 }}
                  </button>
                </div>
                <div v-if="index == 1">
                  <button
                    class="absolute  top-2/4 left-70% bg-blue-600 rounded-lg p-1"
                    @click="
                      (showNode = true),
                        (nodeDataSetup = farmData.node[index]),
                        (showNodeIndex = index + 1)
                    "
                  >
                    Node {{ index + 1 }}
                  </button>
                </div>
                <div v-if="index == 2">
                  <button
                    class="absolute  top-30% left-80% bg-blue-600 rounded-lg p-1"
                    @click="
                      (showNode = true),
                        (nodeDataSetup = farmData.node[index]),
                        (showNodeIndex = index + 1)
                    "
                  >
                    Node {{ index + 1 }}
                  </button>
                </div>
                <div v-if="index == 3">
                  <button
                    class="absolute  bg-blue-600 rounded-lg p-1"
                    style="top:40%; left:30% "
                    @click="
                      (showNode = true),
                        (nodeDataSetup = farmData.node[index]),
                        (showNodeIndex = index + 1)
                    "
                  >
                    Node {{ index + 1 }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class=" flex flex-col  text-2xl p-8 bg-white rounded-3xl w-2/6 ">
            <div class="flex justify-center text-4xl font-bold mb-10">
              <p>Detail Farm</p>
            </div>
            <div class=" ml-10 text-3xl space-y-3">
              <p>ประเภทพืช : {{ farmData.planttype }}</p>
              <p>ปลูกเมื่อ : {{ farmData.whenplanted }}</p>
              <p>วันที่จะต้องเก็บเกี่ยว : {{ farmData.harvestdate }}</p>
              <p>ประเภทของปุ๋ย</p>

              <div
                class="ml-8"
                v-for="(type, index) in farmData.fertilizertype"
                :key="index"
              >
                <p>- {{ type.type }}</p>
              </div>

              <p>จำนวน : {{ farmData.number }}</p>
              <p>ยอดเก็บเกี่ยว : {{ farmData.harvest }}</p>
              <p>ราคาขาย : {{ farmData.price }} บาท</p>
              <p>ราคาในท้องตลาด (Web Scrap) : {{ farmData.marketprice }} บาท</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link :to="{ name: 'testnode', params: { id: id, nodeid: 1 } }"
      >5555555</router-link
    >
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["id"],
  data: () => ({
    showNode: false,
    showGateway: false,
    farmData: null,
    nodeData: [],
  }),
  methods: {},
  watch: {
    //from 
    $route(to) {
      // console.log("to", to.params);
      // console.log("from", from.params);
      if (to.params.id == undefined) {
        console.log("Nodata");
      } else
        fetch("http://localhost:3000/Soontorn/" + to.params.id)
          .then((res) => res.json())
          .then((data) => {
           // console.log(" number " + data.node.length);
            this.farmData = data;
          })
          .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    fetch("http://localhost:3000/Soontorn/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.farmData = data;
        ///console.log(" number " + data.node.length);
        //console.log(data.node[0].relay);
      })
      .catch((err) => console.log(err.message));
  },
  setup() {
    const showNodeIndex = ref(0);
    const nodeDataSetup = ref([]);

    return { nodeDataSetup, showNodeIndex };
  },

  //   props: ["id"],
  //   mounted(){
  //       this.getdata()
  //   },
  //   methods: {
  //     getdata() {
  //         this.id
  //     },
  //   },
};
</script>

<style></style>
