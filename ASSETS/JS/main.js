const app = new Vue({
    el: "#app",

    data: {

        logo: 'https://www.boolean.careers/images/misc/logo.png',

        newTask: '',
        /* completeTask: '',
        counter: 0, */

        tasks: [
            'Learn HTML',
            'Learn CSS',
            'Learn JS'
        ]
    },
    methods: {

        addTask() {
            this.tasks.push(this.newTask)
            this.newTask = ''
        },

        removeTask(index) {
            console.log('Remove task n. ' + index)
            this.tasks.splice(index, 1)
        },

        confirmTask(index, array) {
            
            console.log('confirm ' + index);
            this.tasks.splice(index, 1)
            /* this.tasks.push(array) */
            
            /* console.log(counter); */
            /* this.tasks.push('completeTask')

            console.log(completeTask) */
        }

    }
});

/* var x = [];
x = confirmTask()
 */