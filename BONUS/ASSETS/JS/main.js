const app = new Vue({
    el: "#app",

    data: {

        logo: 'https://www.boolean.careers/images/misc/logo.png',

        newTask: '',

        completeTasks: [
            
        ],

        deleteTasks: [
            
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

        removeTask(index, task) {
            this.tasks.splice(index, 1)
            this.deleteTasks.push(task)
        },

        confirmTask(index, task) {
            this.tasks.splice(index, 1)
            this.completeTasks.push(task)
        },

        reload(index, task) {
            this.tasks.splice(index, 1)
            /* this.tasks.push(task) */
        }
    }
});
