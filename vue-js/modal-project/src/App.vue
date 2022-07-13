<template>
<div>

<h1>{{title}}</h1>
<!-- <input  type="text" ref="name" /> -->
<!-- <button @click="handleClick">Click me</button> -->

<Modal/>``
</div>
</template>

<script>
import Modal from './components/Modal.vue'


export default {
  name: 'App',
components : {Modal},
data() {
    return {
      title: 'Hello Vue!'
    }
  }, 
  methods: {
    handleClick() {
         console.log(this.$refs.name.value); // this is the value of the input
     //   this.$refs.name.classList.add('red'); // this is the input element
    //  this.$refs.name.focus(); // this is the input element
    }
  }
}
</script>

<style>
h1{
  font-weight: bold;
  font-size: 60px;

}
</style>
