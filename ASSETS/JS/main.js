const app = new Vue({
    el: "#app",

    data: {

        logo: 'https://www.boolean.careers/images/misc/logo.png',

        newTask: '',
        completeTasks: [
            'ciao'
        ],

        tasks: [
            'Do something',
            'Do else',
            'Do something else'
        ]
    },
    methods: {

        addTask() {
            if (this.newTask.length > 3 ) { 
                    this.tasks.push(this.newTask)
                    this.newTask = '',
                    console.log('Qui' + this.completeTask);
                } else{
                    alert('Il testo inserito è troppo breve')
                }
        },

        removeTask(index) {
            console.log('Remove task n. ' + index)
            this.tasks.splice(index, 1)
        },

        confirmTask(index) {
            this.tasks.splice(index, 1)
            alert('Hai completato un task')
        },
    }
});
