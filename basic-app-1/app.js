const app = Vue.createApp({
    data: function() { // 'data() {}' is the same notation, but more modern
        return {
            testMessage: 'This is my test message'
        }
    }
});
app.mount('#user-goal');