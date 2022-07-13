<template>
    <div class="backdrop" @click.self="closeModel">
      <div class="modal" :class="{ sale: theme === 'slae' }">
        <!-- <h1>{{header}}</h1>
                <p>{{text}}</p> -->
        <slot>defult content </slot>
        <div class="actions">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModel() {
      this.$emit("close");
      // emit to create an event like a props from the parent
    },
  },
};
</script>
<style  >
/* scoped is used to style the component in the same way as the parent component. */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
  text-align: center;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
h1 {
  color: #03cfb4;
  border: none;
  padding-bottom: 10px;
}
.modal.sale {
  background: crimson;
  color: #fff;
}
.modal.sale h1 {
  color: #fff;
}

.modal.sale p {
  color: #fff;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 4px;
  margin: 10px;
}
</style>