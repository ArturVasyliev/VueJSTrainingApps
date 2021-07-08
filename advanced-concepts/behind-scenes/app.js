const app = Vue.createApp({
  data() {
    // Vue tracks all properties returned from data.
    // It wraps all properties with Proxies (scroll down) to track all changes.
    // Then it finds the places where the property is used on the view and updates them (not the whole view)
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // It's possible to get some element from the view by 'ref'
      // This is a good option when you want to get the data from some element once,
      // without using default property tracking (using Proxy behind the scenes)
      console.dir(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount("#app");

// It's possible to have more than 1 app attached to the view.
// But you can't access the data from one in another.
// Consider them as stand-alone apps.
const app2 = Vue.createApp({
  // Template can be defined not only in the markup, but in here:
  template: `
  <p>{{ number }}</p>
  `,
  data() {
    return {
      number: 5,
    };
  },
});

app2.mount("#app2");

// ----JS is not reactive by default----
let message = "Hello";
let longMessage = message + " World!";
console.log(longMessage); // 'Hello World!'
message = "Hello!!!";
console.log(longMessage); // still 'Hello World!'

// ----Proxies are used to achieve reactivity----
const data = {
  message: "Hello!",
  longMessage: "Hello World!",
};
const handler = {
  // triggered when any property of proxy is set
  set(target, key, value) {
    console.log("target: ");
    console.log(target); // data object inside proxy
    console.log("key: " + key); // 'message'
    console.log("value: " + value); // 'Hello!!!!!'
    if (key === "message") {
      target.longMessage = value + " World!";
      target.message = value;
    }
  },
};
const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!!!";
console.log(proxy.longMessage);
