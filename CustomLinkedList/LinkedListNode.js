

class LinkedListNode {

    /**
     *
     * @param value
     * @param next
     *
     * This constructor is initalized with a value and the next value
     */
    constructor(value,next = null) {
        /** @var LinkedListNode */
        this.value = value;
        this.next = next;
    }

    /**
     *
     * @param callback
     * @returns {*|string}
     */
    toString(callback){
        return callback? callback(this.value) : `${this.value}`;
    }
}

export default LinkedListNode;
