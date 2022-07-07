const app = Vue.createApp({
  //   template: "hello world",
  data() {
    return {
      showBooks: false,
      title: "The book name ",
      author: "John Doe",
      age: 30,
      offset_X: 0,
      offset_Y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handelEvent(event, data) {
      console.log(event.type, data);
      //   if(event.type === "click"){
      //     alert("clicked");
      //   }
    },
    handleMouseMove(event) {
      this.offset_X = event.offsetX;
      this.offset_Y = event.offsetY;
      console.log(offset_X, offset_Y );
    },
  },
});

app.mount("#app");
