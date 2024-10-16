class Queue {
    constructor() {
        this.queue = [];  
    }

    addPlayer(player) {
        this.queue.push(player);
        console.log(`${player} has joined the queue.`);
    }

    removePlayer() {
        if (this.queue.length > 0) {
            return this.queue.shift();  
        } else {
            console.log('Queue is empty.');
            return null;
        }
    }

    getFirstPlayer() {
        return this.queue.length > 0 ? this.queue[0] : null;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    displayQueue() {
        console.log('Current queue:', this.queue);
    }
}
