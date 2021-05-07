<template>
  <body class=" font-body">
    <div class="gridLayout">
      <header class="page-header">
        <div class="flex   justify-end  items-center h-full">
          <div class=" text-2xl text-white  mr-5 ">
            สุนทร ป้องแสนสี
          </div>
          <button
            class="block h-16 w-16  rounded-full overflow-hidden border-2 border-white outline-none mr-5 "
            @click="toggleDropdown($event)"
            href="/"
            ref="btnDropdownRef"
          >
            <img
              class="h-full w-full object-cover"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              alt="user"
            />
          </button>
          <div
            class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
            ref="popoverDropdownRef"
            v-bind:class="{
              hidden: !dropdownPopoverShow,
              block: dropdownPopoverShow,
            }"
            style="min-width: 12rem"
          >
            <a
              href="#pablo"
              class="text-lg  py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-orangeSuper"
            >
              <i class="fas fa-cog text-gray-500 px-2"></i>
              Setting
            </a>
            <a
              href="#pablo"
              class="text-lg py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-orangeSuper "
            >
              <i class="far fa-question-circle  text-blue-600 px-2"></i>
              Help
            </a>

            <div class="h-0 my-2 border border-solid border-blueGray-100" />
            <a
              href="#pablo"
              class="text-lg py-2 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-orangeSuper "
            >
              <i class="fas fa-sign-out-alt text-red-500 px-2"></i>
              Logout
            </a>
          </div>
        </div>
      </header>
      <aside class="page-leftbar pt-10 ">
        <div class="h-full w-full  bg-white    ">
          <ul class="flex flex-col list-none  ">
           
            
            <!-- -------------------------test----------------------- -->

            <li class="items-center ">
              <router-link
                id="router"
                to="/farmtest"
                class="text-black hover:text-orangeSuper text-2xl  py-3 font-bold block border-l-4 border-black hover:border-l-4 hover:border-orangeSuper mt-10  uppercase"
              >
                <i class="fas fa-house-user  ml-4 mr-2 text-2xl"></i>

                Home test</router-link
              >
            </li>
            <li class="items-center">
              <router-link
                id="router"
                :to="{ name: 'overviewstest' }"
                class="text-black hover:text-orangeSuper text-2xl uppercase py-3 font-bold block border-l-4 border-black hover:border-l-4 hover:border-orangeSuper mt-5"
                @click="dropdown"
              >
                <i class="fas fa-list-alt  ml-4 mr-2 text-2xl"></i>
                Overviews test
                <span
                  :class="[
                    isActive 
                      ? 'fas fa-caret-down first text-green-600 relative transform rotate-180 duration-500'
                      : 'fas fa-caret-down first text-green-600 relative transform  duration-500 -rotate-1',
                  ]"
                ></span>
              </router-link>

              <!-- dropdown -->
              <ul
                :class="[
                  isActive  ? 'hidden duration-500 ' : ' block duration-500',
                ]"
                v-for="(farm) in farmData"
                :key="farm.id"
              >
                <li class="items-center ">
                  <router-link
                    id="router"
                    :to="{ name:'pagefarmtest' ,params :{ id:farm.id}}"
                    class="text-black hover:text-orangeSuper text-2xl uppercase py-3 font-bold block border-l-4 border-black hover:border-l-4 hover:border-orangeSuper mt-5"
                    @click="dropdownNode(farm.id) ,(ID = farm.id)"
                  >
                    <i class=" ml-12 mr-2 text-2xl "></i>
                    farm {{ farm.id }}
                    <span
                      :class="[
                        (isActiveNode &&  ID == farm.id)
                          ? 'fas fa-caret-down first text-green-600 relative transform  duration-500 -rotate-1'
                          : 'fas fa-caret-down first text-green-600 relative transform rotate-180 duration-500',
                          
                      ]"
                    ></span>
                  </router-link>

                  <!-- DropdownNode -->
                  <ul
                    v-for="(node, index, key) in farm.node"
                    :key="key"
                    :class="[
                      (isActiveNode &&  ID == farm.id)
                        ? ' block duration-500'
                        : 'hidden duration-500 ',
                        
                    ]"
                  >
                    <li class="items-center ">
                      <router-link
                        id="router"
                        to="/farm/node"
                        class="text-black hover:text-orangeSuper text-2xl uppercase py-3 font-bold block border-l-4 border-black hover:border-l-4 hover:border-orangeSuper mt-5"
                      >
                        <i class=" ml-12 mr-2 text-2xl "></i>
                        node {{ index + 1 }}
                      </router-link>
                    </li>
                  </ul>
                  <!-- ---------------------------- -->
                </li>
              </ul>
            </li>
            <li class="items-center">
              <router-link
                id="router"
                to="/organization"
                class="text-black hover:text-orangeSuper text-2xl uppercase py-3 font-bold block border-l-4 border-black hover:border-l-4 hover:border-orangeSuper mt-5"
              >
                <i class="fas fa-user-plus  ml-4 mr-2 text-2xl"></i>
                Organization</router-link
              >
            </li>


            <!-- ------------------------------------------------------------- -->
          </ul>
        </div>

        <!-- <div id="navSide">
          <router-link to="/">
            <div class="LayoutSide ">
              <img src="./assets/logo.png" class="h-10  w-10" alt="" />
              <p>Home</p>
            </div>
          </router-link>
          <router-link to="/about">
            <div class="LayoutSide">
              <img src="./assets/logo.png" class="h-10  w-10" alt="" />
              <p>Overviews</p>
            </div>
          </router-link>
          <router-link to="/Organization">
            <div class="LayoutSide">
              <img src="./assets/logo.png" class="h-10  w-10" alt="" />
              <p>Organization</p>
            </div></router-link
          >
        </div> -->
      </aside>
      <aside class="page-logo bg-white">
        <div class="content ">
          <img
            src="./assets/supercrops.png"
            class="w-24 h-24 ml-auto mr-auto mt-4 mb-4 object-cover"
            alt=""
          />
        </div>
      </aside>
      <main class="page-main">
        <!-- <div class="h-full w-full border-orangeSuper border-8">
          
        </div> -->
        <transition>
           <router-view></router-view>
        </transition>
       
      </main>
      <footer class="page-footer">
        <div class="flex justify-center items-center h-full">
          <div class=" text-lg text-white ">
            Copyright © 2021-2025 Create by KITFORWARD
          </div>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
//import Navbar from "./components/Navbar";
// import Dropdown from './components/Dropdown'
import { createPopper } from "@popperjs/core";
export default {
  name: "home",
  
  data() {
    return {
      isActive: true,
      isActiveNode: true,
      isActiveNode2: true,
      dropdownPopoverShow: false,
      farmData: [],
      ID:""
    };
  },
  methods: {
    dropdown() {
      this.isActive = !this.isActive;
    },
    dropdownNode(id) {
      this.isActiveNode = !this.isActiveNode;
      console.log(id)
    },
    dropdownNode2() {
      this.isActiveNode2 = !this.isActiveNode2;
    },
    toggleDropdown: function(event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-end",
        });
      }
    },
  },
  mounted() {
    fetch("http://localhost:3000/Soontorn")
      .then((res) => res.json())
      .then((data) => (this.farmData = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.gridLayout {
  display: grid;
  height: 100vh;
  grid-template-columns: 280px 1fr 1fr;
  grid-template-rows: 125px auto auto 40px;
  grid-template-areas:
    "logo header header"
    "leftbar main main"
    "leftbar main main"
    "leftbar footer footer";
}

.page-header {
  grid-area: header;
  background-color: #03256c;
}
.page-logo {
  grid-area: logo;
  background-color: #e9ebee;
}

.page-leftbar {
  grid-area: leftbar;
  /* background-color: #e9ebee; */
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.page-main {
  grid-area: main;
  background-color: #e9ebee;
}

.page-footer {
  grid-area: footer;
  background-color: #03256c;
}

/* .content {
  color: #242424;
  background-color: #f25fff;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
} */
/* nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
} */

/* #navSide {
  padding: 30px;
} */
/* #navSide a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
} */

/* #navSide a .LayoutSide {
  font-size: 2rem;
  display: flex;
  justify-items: flex-end;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border-left-width: 4px;
  border-left-color: black;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: 0.5rem;
  padding-left: 2rem;
}
#navSide .LayoutSide :hover {
  color: #fb4f14;
} */

/* #navSide .router-link-exact-active .LayoutSide {
  border-left-width: 4px;
  border-left-color: #fb4f14;
  color: #fb4f14;
} */
/* #navSide a.router-link-exact-active {
  color: white;
  background-color: crimson;
} */

/* #Sidecontent .router-link-exact-active div {
  border-left-color: #fb4f14;
  color: #fb4f14;
} */
.page-leftbar div ul li .router-link-exact-active {
  border-left-color: #fb4f14;
  color: #fb4f14;
}
</style>
