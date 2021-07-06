const app = Vue.createApp({
    data: function() { // 'data() {}' is the same notation, but more modern
        return {
            testMessage1: 'Learn Vue!',
            testMessage2: 'Master Vue!',
            testHtml: '<h2>Master Vue!</h2>',
            vueLink: 'https://vuejs.org/',
            name: "Artur",
            age: 24,
            imageUrl: "https://static.wikia.nocookie.net/witcher/images/a/a0/Tw3_Geralt_of_Rivia_newest_render.png"
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
        },
        ageInFiveYears() {
            return this.age + 5;
        }
    }
});
app.mount('#user-goal');