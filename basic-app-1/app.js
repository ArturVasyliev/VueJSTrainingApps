const app = Vue.createApp({
    data: function() { // 'data() {}' is the same notation, but more modern
        return {
            testMessage: 'This is my test message',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        testOutput() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    }
});
app.mount('#user-goal');