import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyCt12ZlwrbY0uhR8c-naoIKMrJ3gS7gOs8",
  authDomain: "intern2021-app.firebaseapp.com",
  projectId: "intern2021-app",
  storageBucket: "intern2021-app.appspot.com",
  messagingSenderId: "22286398275",
  appId: "1:22286398275:web:55174b74372bbedef935f6",
  measurementId: "G-T8VCPP7CF0",
};
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");
const farmUsersCollection = db.collection("farmUsers");

export const storageFarmUsers = firebase.storage();

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};





//FarmUsers

export const useLoadFarmUsers = () => {
  const farmUsers = ref([]);
  const close = farmUsersCollection
    .orderBy("name", "asc")
    .onSnapshot((snapshot) => {
      farmUsers.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  onUnmounted(close);
  return farmUsers;
};

export const createFarmUser = (user) => {
  return farmUsersCollection.add(user);
};

export const deleteFarmUser = (id) => {
  return farmUsersCollection.doc(id).delete();
};

export const countAdminRole = () => {
  const AdminRole = ref([]);
  const close = farmUsersCollection
    .where("role", "==", "Admin")
    .onSnapshot((snapshot) => {
      AdminRole.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  onUnmounted(close);
  return AdminRole;
};

export const countViewRole = () => {
  const ViewRole = ref([]);
  const close = farmUsersCollection
    .where("role", "==", "View")
    .onSnapshot((snapshot) => {
      ViewRole.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  onUnmounted(close);
  return ViewRole;
};
export const countEditorRole = () => {
  const EditorRole = ref([]);
  const close = farmUsersCollection
    .where("role", "==", "Editor")
    .onSnapshot((snapshot) => {
      EditorRole.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  onUnmounted(close);
  return EditorRole;
};

export const getFarmUser = async (id) => {
  const user = await farmUsersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateFarmUser = (id, user) => {
  return farmUsersCollection.doc(id).update(user);
};

export const previewImage = (event) => {
  const imageData =ref(null)
  imageData.value = event.target.files[0];
  console.log(imageData.value);
  return imageData
 
};


  



