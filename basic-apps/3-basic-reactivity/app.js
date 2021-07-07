const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname2: '',
      lastname: ''
    };
  },
  watch: {
    // When 'name' data property is changed, this watch will be called
    // The logic is similar to computed field, but computed field can have
    // more than one dependency, and a watcher is attach to a single property.
    // So the fullname2 will be updated only when 'name' is changed.
    // We can add a watcher for 'lastname' but there will be code duplication.
    name(value, oldValue) {
      if(value === ''){
        this.fullname2 = '';
      }
      else{
        this.fullname2 = value + ' ' + this.lastname;
      }
    },
    // If you want to validate the value of some property and change it - you can use watcher.
    // You can trigger timers, send HttpRequests or persist data in watchers
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout (function(){
          that.counter = 0;
        }, 2000)
      }
    }
  },
  computed: {
    // computed properties are used to output some data which will be recalculated
    // every time the dependencies of properties are changed. Are not used for event-binding
    fullname() {
      // Vue saves dependencies of computed proeprties (e.g. this.name)
      // and recalculates computed property only when dependencies 
      // are changed to improve the performance
      console.log('fullname call');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + this.lastname;
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
