const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    // computed properties are used to output some data which will be recalculated
    // every time the dependencies of properties are changed
    fullname() {
      // Vue saves dependencies of computed proeprties (e.g. this.name)
      // and recalculates computed property only when dependencies 
      // are changed to improve the performance
      console.log('fullname call');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Vasyliev';
    }
  },
  methods: {
    // Only call methods in the view when you want to recalculate it
    // every time something is changed on the page OR to handle events
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('outputFullName call');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Vasyliev';
    }
  }
});

app.mount('#events');
