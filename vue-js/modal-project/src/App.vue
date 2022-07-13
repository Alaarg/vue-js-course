<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome ....</p>
    <!-- <input  type="text" ref="name" /> -->
    <!-- <button @click="handleClick">Click me</button> -->
    <teleport to=".modal" v-if="showModal">
      <Modal theme="" @close="togglemodole">
        <template v-slot:links>
          <!-- v-slot is use to create a slot in the component. -->
          <a href="#">sign up now </a>
          <a href="#"> more Info</a>
        </template>
        <h1>Ahmad Alaarg</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Modal>
    </teleport>
    <teleport  to=".modal"  v-if="showModalTow">
      <Modal  @close="togglemodoleTow">
        <template v-slot:links>
          <!-- v-slot is use to create a slot in the component. -->
          <a href="#">sign up now </a>
          <a href="#"> more Info</a>
        </template>
        <h1>Modale Tow </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Modal>
    </teleport>
    <button @click="togglemodole">Show Modal</button>
    <button @click="togglemodoleTow">Show Modal</button>
    <!-- alt click is used to trigger the event when the user clicks on the alt button. -->
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Hello Vue!",
      showModal: false,
      showModalTow: false,
    };
  },        
  methods: {
    handleClick() {
      console.log(this.$refs.name.value); // this is the value of the input
      //   this.$refs.name.classList.add('red'); // this is the input element
      //  this.$refs.name.focus(); // this is the input element
    },
    togglemodole() {
      this.showModal = !this.showModal;
    },
    togglemodoleTow() {
      this.showModalTow = !this.showModalTow;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
h1 {
  font-weight: bold;
  font-size: 40px;
}
</style>
