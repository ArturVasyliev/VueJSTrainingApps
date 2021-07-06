const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    reset(num) {
      this.counter = num;
    },
    setName(event, param) {
      this.name = event.target.value + ' ' + param;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      //event.preventDefault(); // good option to prevent reloading of the page on form submit
      alert('Submitted!');
    },
  }
});

app.mount('#events');
