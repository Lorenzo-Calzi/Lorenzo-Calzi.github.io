const app = new Vue({
    el: "#app",

    data: {

        logo: 'https://www.boolean.careers/images/misc/logo.png',

        newTask: '',
        completeTask: 'prova',

        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ]
    },
    methods: {

        addTask() {
            this.tasks.push(this.newTask)
            this.newTask = '',
            console.log('Qui' + this.completeTask);
            
        },

        removeTask(index) {
            console.log('Remove task n. ' + index)
            this.tasks.splice(index, 1)
        },

        confirmTask(index) {
            
            console.log('confirm ' + index);
            this.tasks.splice(index, 1)
            return(alert('Ho completato una task'))
            /* this.tasks.push(this.completeTask) */
            /* this.completeTask.push(this.tasks) */
        }

    }
});
