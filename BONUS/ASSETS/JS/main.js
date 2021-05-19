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
                    this.newTask = '';
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

        reload(index) {
            this.tasks.push(this.completeTasks[index])
            this.completeTasks.splice(index, 1) 
        },

        fishOut(index) {
            this.tasks.push(this.deleteTasks[index])
            this.deleteTasks.splice(index, 1)
        },

        clearAll() {
            this.deleteTasks = []
        }
    }
});
