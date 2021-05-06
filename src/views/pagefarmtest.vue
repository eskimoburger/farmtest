<template>
  <div v-if="farmData">
    <div class="m-8 rounded-3xl">
      <div class="flex flex-col ">
        <div class="flex justify-between   ">
          <div class="text-black font-bold text-6xl p-8 ">
            Farm {{farmData.id}} : {{farmData.farmname}}
          </div>
          <div class="text-gray-600 font-bold text-6xl p-8 ">
            Dashboard
          </div>
        </div>
        <div class="flex  justify-between flex-wrap mt-20    ">
          <div class=" relative  text-xl  text-white sm:text-3xl md:text-3xl  ">
            <img
              src="../assets/farm1_copy.png"
              alt="farm1"
              class=" h-auto rounded-3xl "
            />

            <div>
              <vue-final-modal
                v-model="showNode1"
                classes="flex justify-center items-center"
                content-class="bg-blueSea rounded-3xl "
              >
                <div class=" flex flex-col text-white    ">
                  <div class=" flex space-x-80  text-4xl    p-5 rounded-t-3xl ">
                    <p class=" text-6xl">Node1</p>
                    <div class=" space-x-5">
                      <router-link
                        to="/farm/node"
                        class="bg-orangeSuper rounded-2xl px-5 py-1"
                      >
                        Edit
                      </router-link>

                      <button
                        @click="showNode1 = false"
                        class="fas fa-times text-red-500 "
                      ></button>
                    </div>
                  </div>
                  <div class=" p-5  text-white space-y-3">
                    <p>Update Time : xx-xx-xxxx</p>
                    <p>Create : XXXX-XX-XX</p>
                    <p>Create : XXXX-XX-XX</p>
                    <p>Temp : XX</p>
                    <p>Humi : XX</p>
                    <p>Light : XX</p>
                    <p>Mois : XX</p>
                    <p>EC : XX</p>
                    <p>Relay 1 : ON or OFF</p>
                    <p>Relay 2 : ON or OFF</p>
                    <p>Relay 3 : ON or OFF</p>
                    <p>On/Off on Time : On or Off</p>
                    <p>On/Off on Data : On or Off</p>
                  </div>
                </div>
              </vue-final-modal>

              <button
                class="absolute  bg-gray-900  left-22% top-60% rounded-lg p-1 "
                @click="showNode1 = true"
              >
                Node 1
              </button>
            </div>
            <div>
              <vue-final-modal
                v-model="showGateway"
                classes="flex justify-center items-center"
                content-class="modal-content"
              >
                <span class="modal__title ite"></span>
                <div class="modal__content">
                  <p>
                    Gateway
                  </p>
                </div>
              </vue-final-modal>

              <button
                class="absolute  top-22% left-2/4 bg-green-600 rounded-lg p-1"
                @click="showGateway = true"
              >
                Gateway
              </button>
            </div>

            <div>
              <vue-final-modal
                v-model="showNode2"
                classes="flex justify-center items-center"
                content-class="modal-content"
              >
                <span class="modal__title ite"></span>
                <div class="modal__content">
                  <p>
                    Node2
                  </p>
                </div>
              </vue-final-modal>

              <button
                class="absolute  top-2/4 left-70% bg-blue-600 rounded-lg p-1"
                @click="showNode2 = true"
              >
                Node 2
              </button>
            </div>

            <div>
              <vue-final-modal
                v-model="showNode3"
                classes="flex justify-center items-center"
                content-class="modal-content"
              >
                <span class="modal__title ite"></span>
                <div class="modal__content">
                  <p>
                    Node 3
                  </p>
                </div>
              </vue-final-modal>

              <button
                class="absolute  top-30% left-80% bg-blue-600 rounded-lg p-1"
                @click="showNode3 = true"
              >
                Node 3
              </button>
            </div>
          </div>

          <div
            class=" flex flex-col  text-2xl p-8 bg-white rounded-3xl w-2/6 "
          >
          <div class="flex justify-center text-4xl font-bold mb-10" >
              <p>Detail Farm</p>
          </div>
            
            <p>ประเภทพืช : {{farmData.planttype}}</p>
            <p>ปลูกเมื่อ : {{farmData.whenplanted}}</p>
            <p>วันที่จะต้องเก็บเกี่ยว : {{farmData.harvestdate}}</p>
            <!-- <div v-for="( item ,index )in farmData.fertilizertype" :key="index">
                <p>ประเภทปุ๋ย :</p>

            </div> -->
            
            <p>….</p>
            <p>….</p>
            
            <p>จำนวน : {{farmData.number}}</p>
            <p>ยอดเก็บเกี่ยว : {{farmData.harvest}}</p>
            <p>ราคาขาย : {{farmData.price}} บาท</p>
            <p>ราคาในท้องตลาด (Web Scrap) : {{farmData.marketprice}} บาท</p>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["id"],
  data: () => ({
    showModal: false,
    showNode1: false,
    showNode2: false,
    showNode3: false,
    showGateway: false,
    farmData: null,
   
  }),
  methods: {
    
  },
  watch: {
    $route(to, from) {
      console.log("to", to.params);
      console.log("from", from.params);
      if (to.params.id == undefined){
          console.log("Nodata")
      }else
      fetch("http://localhost:3000/Soontorn/" + to.params.id)
        .then((res) => res.json())
        .then((data) => (this.farmData = data))
        .catch((err) => console.log(err.message));

    },
  },
  mounted() {
    fetch("http://localhost:3000/Soontorn/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.farmData = data))
      .catch((err) => console.log(err.message));

    
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
