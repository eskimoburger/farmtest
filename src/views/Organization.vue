<template>
  <div class=" flex flex-col">
    <div class=" flex justify-center mt-6 ">
      <div class=" block  h-44 w-44 rounded-full bg-gray-700 overflow-hidden ">
        <img
          src="../assets/logofarm.jpg"
          class=" w-full h-full object-cover "
          alt="logofarm"
        />
      </div>

      <div class="text-black font-bold text-6xl p-8 ">
        Farm Name : {{ farmname }}
      </div>
    </div>

    <div
      class="  w-3/6 text-center  text-5xl  bg-white ml-auto mr-auto mt-20 p-5 rounded-2xl shadow-2xl "
    >
      <p class="">Admin Users : {{ adminUsers.length }}</p>
      <p>Editor Users : {{ editorUsers.length }}</p>
      <p>View Users : {{ viewUsers.length }}</p>
      <p>Total Users : {{ farmUsers.length }}</p>
    </div>

    <div class="flex  flex-wrap gap-4 w-full justify-center mt-20 mb-20  ">
      <div
        v-for="{ id, name, role, profile } in farmUsers"
        :key="id"
        class="w-2/6   bg-blueSea text-center  rounded-3xl text-3xl  p-8  text-white  space-y-4 "
      >
        <div
          class="w-32 h-32  ml-auto mr-auto overflow-hidden rounded-full"
          v-if="profile == ''"
        >
          <img
            src="../assets/person.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="w-32 h-32  ml-auto mr-auto overflow-hidden rounded-full "
          v-else
        >
          <img :src="profile" alt="" class="w-full h-full object-cover" />
        </div>

        <div class="font-bold text-5xl">{{ name }}</div>
        <div>Role : {{ role }}</div>

        <button
          class=" bg-orangeSuper text-3xl p-2 shadow-2xl rounded-2xl mr-5 w-36"
          @click="deleteFarmUser(id), deleteUserIMG(profile)"
        >
          Remove
        </button>
        <button
          @click="(showEdit = true), (ID = id), getUser(id)"
          class=" bg-orangeSuper text-3xl p-2 shadow-2xl rounded-2xl mr-5 w-36"
        >
          Edit
        </button>
      </div>

      <div
        class=" flex items-center  justify-center w-2/6   bg-blueSea text-center  rounded-3xl text-3xl  p-8  text-white  space-y-4  "
      >
        <button
          @click="showAdd = true"
          class="w-52 h-52   bg-orangeSuper p-10 rounded-full shadow-2xl"
        >
          <img src="../assets/add.svg" alt="add" class="" />
        </button>
        <!----------------------- Modal ------------------------------>
        <div>
          <vue-final-modal
            v-model="showAdd"
            classes="flex justify-center items-center"
            content-class="flex flex-col text-white  bg-blueSea p-8 rounded-2xl"
          >
            <div class="flex justify-end ">
              <button
                @click="showAdd = false"
                class=" w-10 h-10 rounded-full bg-red-600 fas fa-times"
              ></button>
            </div>
            <div class="text-center   text-3xl  p-5  text-white  ">
              <div class="font-bold text-5xl">Create Users</div>
            </div>
            <div class="flex justify-center">
              <div
                class="block h-32 w-32 rounded-full border-white  overflow-hidden outline-none "
                v-if="imageData === undefined && showImageData.length > 0"
              >
                <img
                  src="../assets/person.png"
                  alt=""
                  class=" w-full h-full object-cover "
                />
              </div>
              <div
                class="block h-32 w-32 rounded-full border-white  overflow-hidden outline-none "
                v-else-if="showImageData.length > 0"
              >
                <img
                  :src="showImageData"
                  alt=""
                  class=" w-full h-full object-cover "
                />
              </div>
              <div
                class="block h-32 w-32 rounded-full border-white  overflow-hidden outline-none "
                v-else
              >
                <img
                  src="../assets/person.png"
                  alt=""
                  class=" w-full h-full object-cover "
                />
              </div>
            </div>

            <div class=" relative mb-2 ">
              <div class="absolute text-white text-bold" style="left:40%">
                change
              </div>

              <input
                ref="inputfile"
                type="file"
                @change="onUploadV2"
                class="w-full h-full opacity-0"
                accept="image/*"
              />
            </div>

            <form @submit.prevent="onSubmit(), resetRef(), (showAdd = false)">
              <div class=" flex  justify-between ">
                <p class="text-4xl">Username</p>
                <input
                  v-model="username"
                  class="text-black p-2 rounded-xl w-7/12"
                  type="text"
                  placeholder="Enter Username!!"
                />
              </div>
              <div class=" flex  justify-between mt-3 ">
                <p class="text-4xl">Password</p>
                <input
                  v-model="password"
                  class="text-black p-2 rounded-xl w-7/12"
                  type="text"
                  placeholder="Enter Password!!"
                />
              </div>
              <div class=" flex  justify-between mt-3 ">
                <p class="text-4xl">Name</p>
                <input
                  v-model="form.name"
                  class="text-black p-2 rounded-xl w-7/12"
                  type="text"
                  placeholder="Enter Name!!"
                />
              </div>
              <div class=" flex  justify-between mt-3  ">
                <div class="text-4xl">Role</div>
                <select
                  class="text-black p-2 rounded-xl w-7/12"
                  v-model="form.role"
                  required
                >
                  <option disabled value="">Please select one</option>
                  <option>Admin </option>
                  <option>Editor</option>
                  <option>View</option>
                </select>
              </div>

              <div class="flex justify-center mt-10">
                <button
                  type="submit"
                  class=" bg-green-500 text-3xl text-black font-bold p-2 shadow-2xl rounded-2xl mr-5 w-36"
                >
                  <i class="far fa-save text-blue-700"></i>
                  Save
                </button>
              </div>
            </form>
          </vue-final-modal>
        </div>
        <!-- ---------------------------- -->

        <!-- ------------------ModalEdit----------------- -->

        <div>
          <vue-final-modal
            v-model="showEdit"
            classes="flex justify-center items-center"
            content-class="flex flex-col text-white  bg-blueSea p-8 rounded-2xl"
          >
            <div class="text-center   text-3xl  p-8  text-white   ">
              <div class="font-bold text-5xl">Edit Users</div>

              <div class="w-32 h-32  ml-auto mr-auto mt-5">
                <img
                  src="../assets/person.png "
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                change
              </div>
            </div>
            <form @submit.prevent="updateUser(ID)">
              <div class=" flex  justify-between mt-3 ">
                <p class="text-4xl">Name</p>
                <input
                  v-model="formEdit.name"
                  class="text-black p-2 rounded-xl w-7/12"
                  type="text"
                />
              </div>
              <div class=" flex  justify-between mt-3  ">
                <div class="text-4xl">Role</div>
                <select
                  class="text-black p-2 rounded-xl w-7/12"
                  v-model="formEdit.role"
                  required
                >
                  <option disabled value="">Please select one</option>
                  <option>Admin </option>
                  <option>Editor</option>
                  <option>View</option>
                </select>
              </div>

              <div class="flex justify-center mt-5">
                <button
                  @click="showEdit = false"
                  type="submit"
                  class=" bg-green-500 text-3xl text-black font-bold p-2 shadow-2xl rounded-2xl mr-5 w-36"
                >
                  <i class="far fa-save text-blue-700"></i>
                  Edit
                </button>
                <button
                  @click="showEdit = false"
                  class=" bg-white text-3xl text-black font-bold p-2 shadow-2xl rounded-2xl mr-5 w-36"
                >
                  <i class="fas fa-ban text-red-500"></i>

                  Cancle
                </button>
              </div>
            </form>
          </vue-final-modal>
        </div>

        <!-- ------------------------------------------------------ -->
      </div>
    </div>

    <!-- ----------------------------Test---------------------------- -->
    <!-- <input type="file" @change="onUploadV2" accept="image/*" />
    <div>
      <br />
      <p>
        Progress: {{ uploadValue.toFixed() + "%" }}
        <progress :value="uploadValue" max="100"></progress>
      </p>
      <div class="shadow  bg-white mt-2 w-25%">
        <div
          class="bg-red-600 text-xs leading-none py-1 text-center text-white "
          :style="{ width: uploadValue.toFixed() + '%' }"
        >
          {{ uploadValue.toFixed() + "%" }}
        </div>
      </div>
    </div>
    <div
      class="block h-16 w-16 rounded-full border-white  overflow-hidden outline-none "
    >
      <img :src="picture" alt="" class=" w-full h-full object-cover " />
    </div>

    <div
      class="block h-16 w-16 rounded-full border-white  overflow-hidden outline-none "
      v-if="showImageData.length > 0"
    >
      <img :src="showImageData" alt="" class=" w-full h-full object-cover " />
    </div>

    <div :class="{ hidden: hide, block: !hide }">
      <button
        class=" w-1/12 bg-green-600 border-2 border-black text-2xl py-2 text-white"
        @click="onUpload"
      >
        Test
      </button>
    </div>

    <form @submit.prevent>
      <input type="text" name="username" placeholder="Name" />
      <input type="file" />

      <button>Submit</button>
    </form> -->

    <!-- --------------------------------------------------------------------------------------- -->

    <!-- <button class=" bg-yellow-600 w-6/12 " @click="deleteUserIMG">Test</button> -->
  </div>
</template>

<script>
import {
  useLoadFarmUsers,
  createFarmUser,
  deleteFarmUser,
  countAdminRole,
  countViewRole,
  countEditorRole,
  getFarmUser,
  updateFarmUser,
  storageFarmUsers,
} from "@/firebase";

import { reactive, ref } from "vue";
export default {
  name: "organization",
  data() {
    return {
      farmname: "สุนทรฟาร์ม",
      showAdd: false,
      selected: "",
      showEdit: false,
      ID: "",
      image: true,
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    showFarmUser() {
      console.log(this.role);
    },
    resetRef: function() {
      this.$refs.inputfile.value = null;
    },
  },
  setup() {
    const form = reactive({ name: "", role: "", profile: "" });
    const formEdit = reactive({ name: "", role: "" });
    const farmUsers = useLoadFarmUsers();
    const adminUsers = countAdminRole();
    const viewUsers = countViewRole();
    const editorUsers = countEditorRole();

    const onSubmit = async () => {
      await createFarmUser({ ...form });
      form.name = "";
      form.role = "";
      imageData.value = null;
      picture.value = null;
      showImageData.value = "";
      uploadValue.value = 0;
      form.profile = "";
    };

    const getUser = async (id) => {
      const user = await getFarmUser(id);
      console.log(user);
      formEdit.name = user.name;
      formEdit.role = user.role;
    };

    const updateUser = async (id) => {
      await updateFarmUser(id, { ...formEdit });
      //router.push("/");
      formEdit.name = "";
      formEdit.role = "";
    };

    /////////////////////
    const imageData = ref(null);
    const picture = ref(null);
    const uploadValue = ref(0);
    const hide = ref(true);
    const showImageData = ref("");

    const previewImage = (event) => {
      imageData.value = event.target.files[0];
      picture.value = null;
      uploadValue.value = 0;
      hide.value = false;
      console.log(imageData.value);
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          showImageData.value = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
      console.log(showImageData.value);
    };

    function onUpload() {
      const storageRef = storageFarmUsers
        .ref(`${imageData.value.name}`)
        .put(imageData.value);
      storageRef.on(
        `state_change`,
        (snapshot) => {
          uploadValue.value =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          uploadValue.value = 100;
          this.showAdd = false;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            picture.value = url;
            console.log(picture.value);
            form.profile = url;
          });
        }
      );
    }

    function onUploadV2(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          showImageData.value = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
      console.log(showImageData.value);
      const storageRef = storageFarmUsers
        .ref(`${event.target.files[0].name}`)
        .put(event.target.files[0]);

      storageRef.on(
        `state_change`,
        (snapshot) => {
          uploadValue.value =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          uploadValue.value = 100;
          this.showAdd = false;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            picture.value = url;
            console.log(picture.value);

            form.profile = url;
          });
        }
      );
    }
    const deleteUserIMG = (url) => {
      if(url==""){
        console.log("No img !!!")
      }else{
      const desertRef = storageFarmUsers.refFromURL(url);
      desertRef
        .delete()
        .then(function() {
          console.log("delete complete !!!!");
        })
        .catch(function(error) {
          console.log(error);
        });}
    };

    return {
      farmUsers,
      form,
      onSubmit,
      deleteFarmUser,
      adminUsers,
      viewUsers,
      editorUsers,
      getUser,
      formEdit,
      updateUser,
      previewImage,
      imageData,
      picture,
      uploadValue,
      onUpload,
      hide,
      showImageData,
      onUploadV2,
      deleteUserIMG,
    };
  },
};
</script>

<style></style>
