/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        }
        if (this.tail !== null) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    /** pop(): return & remove last item. */

    pop() {
        let curNode = this.head;
        while (!curNode.next == this.tail) {
            curNode = curNode.next;
        }
        let remove = curNode.next;
        this.tail = curNode;
        curNode.next = null;
        this.length--;
        return remove;
    }

    /** shift(): return & remove first item. */

    shift() {
        let curNode = this.head;
        let removed = curNode;
        this.head = curNode.next;
        this.length--;
        return removed;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        let curNode = this.head;
        while (idx > 0) {
            curNode = curNode.next;
            idx--;
        }
        if (!curNode.val) {
            return null;
        } else {
            return curNode.val;
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        let curNode = this.head;
        while (idx > 0) {
            curNode = curNode.next;
            idx--;
        }
        if (!curNode.val) {
            return null;
        } else {
            curNode.val = val;
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if (idx === 0) {
            this.unshift(val);
            return;
        }
        let curNode = this.head;
        while (idx > 1) {
            curNode = curNode.next;
            idx--;
        }
        if (!curNode.val) {
            return null;
        } else {
            let nxtNode = curNode.next;
            let newNode = new Node(val);
            curNode.next = newNode;
            newNode.next = nxtNode;
            this.length++;
        }
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (idx === 0) {
            this.shift();
            return;
        } else if (idx === this.length - 1) {
            this.pop();
            return;
        } else {
            let curNode = this.head;
            while (idx > 1) {
                curNode = curNode.next;
                idx--;
            }
            let nxtNode = curNode.next.next;
            let removed = curNode.next;
            curNode.next = nxtNode;
            this.length--;
            return removed;
        }
    }

    /** average(): return an average of all values in the list */

    average() {
        let curNode = this.head;
        let sum = this.head.val + this.tail.val;
        while (curNode.next) {
            sum + curNode.next.val;
        }
        let avg = sum / this.length;
    }
}

module.exports = LinkedList;
