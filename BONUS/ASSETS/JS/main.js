const app = new Vue({
    el: "#app",

    data: {

        logo: '../BONUS/IMG/logo_boolean.png',

        newTask: '',

        completeTasks: [],

        deleteTasks: [],

        tasks: [
            'Andare In Palestra',
            'Fare La Spesa',
            'Rinnovare Spotify'
        ]
    },
    methods: {

        addTask() {
            if (this.newTask.length > 3 ) { 
                    this.tasks.unshift(this.newTask)
                    this.newTask = '';
                } else{
                    alert('Il testo inserito è troppo breve')
                }
        },

        removeTask(index, task) {
            this.deleteTasks.unshift(task)
            this.tasks.splice(index, 1)
        },

        confirmTask(index, task) {
            this.completeTasks.unshift(task)
            this.tasks.splice(index, 1)
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
            const destroy = confirm('Sei sicuro di voler svuotare il cestino?')
            if(destroy) {
                this.deleteTasks = []
            }
        }
    }
});
