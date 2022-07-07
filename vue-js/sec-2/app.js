const app = Vue.createApp({
  //   template: "hello world",
  data() {
    return {
      url: "https://www.aaarg.com/",
      showBooks: false,
      books: [
        { name: "Book 1", author: "John Doe", cover: "./assets/1.jpg" ,isFave: false },
        { name: "Book 2", author: "John Doe", cover: "./assets/2.jpg" ,isFave: true },
        { name: "Book 3", author: "John Doe", cover: "./assets/3.jpg" ,isFave: false },

      ],
      users: [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Bob", age: 20 },
      ],
    };
  },
  methods: {},
});

app.mount("#app");
