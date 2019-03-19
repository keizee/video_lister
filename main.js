var app = new Vue({
  el: "#app",
  data: {
    showMessage: false,
    showChorus: false,
    message: "Greetings",
    newTitle: "",
    newUrl: "",
    videos: [
      {
        show: true,
        title: "Tsumugi Uta",
        url: "https://www.youtube.com/embed/fIfCzNIubbA"
      },
      {
        show: false,
        title: "2018",
        url: "https://www.youtube.com/embed/741Mt64oOLU"
      }
    ]
  },
  methods: {
    addVideo: function() {
      console.log("Adding video");
      var obj = {
        show: true,
        title: this.newTitle,
        url: this.newUrl
      };
      this.videos.push(obj);
    },
    deleteVideo: function(video) {
      var index = this.videos.indexOf(video);
      this.videos.splice(index, 1);
    }
  }
});
