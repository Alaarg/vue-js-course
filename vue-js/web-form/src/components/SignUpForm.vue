<template>
  <div>
    <form @submit.prevent="handelSubmit">
      <label>Email</label>
      <input type="email" required v-model="email" />
      <label>Password</label>
      <input type="password" required v-model="password" />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
      <label>Role : </label>
      <select v-model="role">
        <option value="developoer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>I agree to the terms and conditions</label>
      </div>

      <label> skills </label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div class="submit">
        <button type="submit">Submit</button>

      </div>
    </form>

    <p>email :{{ email }}</p>
    <p>password : {{ password }}</p>
    <p>Role : {{ role }}</p>
    <p>Terms : {{ terms }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "ahmad@email.com",
      password: "",
      role: "designer",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handelSubmit() {
      this.passwordError =
        this.password.length > 5
          ? ""
          : "password must be at least 6 characters";

      if (!this.passwordError) {
        // console log all data
        console.log("email", this.email);
        console.log("password", this.password);
        console.log("role", this.role);
        console.log("skills", this.skills);
        console.log("terms", this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
label {
  color: #aaa;
  font-size: 14px;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 5px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  padding: 7px 25px;
  margin: 5px 4px 0 0;
  border-radius: 14px;
  background: #ddd;
  color: #555;
  font-size: 15px;
  font-weight: bold;
  user-select: none;
}
.pill:hover {
  cursor: pointer;
}
button {
  display: block;
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #2c3e50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.submit {
  margin-top: 20px;
}
.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>