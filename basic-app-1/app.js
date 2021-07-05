const app = Vue.createApp({
    data: function() { // 'data() {}' is the same notation, but more modern
        return {
            testMessage1: 'Learn Vue!',
            testMessage2: 'Master Vue!',
            testHtml: '<h2>Master Vue!</h2>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        testOutput() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.testMessage1;
            } else {
                return this.testMessage2;
            }
        },
        outputHtml() {
            return this.testHtml;
        }
    }
});
app.mount('#user-goal');