<template>
  <form>
    <label>Email</label>
    <input type="email" required />
  </form>
</template>

<script>
export default {};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
input {
  font-size: 1.2em;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
label {
  font-size: 1.2em;
  display: block;
  color: #aaa;
  margin:25px 0 15px;
  }
</style>