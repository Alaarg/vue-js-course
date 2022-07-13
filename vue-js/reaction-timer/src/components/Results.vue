<template>
  <div>
    <p>Reaction Time {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    this.rank = this.score;
    console.log(this.rank);
    if (this.rank < 250) {
      this.rank = "You Are Faster Than A Ninja!";
    } else if (this.rank < 350) {
      this.rank = "Good";
    } else if (this.rank < 500) {
      this.rank = "Slow ";
    } else {
      this.rank = "You're a terrible person";
    }
    console.log(this.rank);
  },
};
</script>

<style>
.rank {
  font-size: 1.5em;
  color: #0faf87;
  font-weight: bold;
}
</style>