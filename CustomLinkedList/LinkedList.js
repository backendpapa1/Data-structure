import LinkedListNode from "./LinkedListNode.js";

class LinkedList {

    /**
     * @param comparativeFunction
     */
    constructor(comparativeFunction) {
        this.head = null;
        this.tail = null;

        // this.com
    }

    /**
     *
     * @param value
     * @returns {LinkedList}
     */
    append(value){
        const newNode = new LinkedListNode(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }


        this.tail.next  = newNode;
        this.tail = newNode;

        return this;
    }

    /**
     *
     * @param value
     * @returns {LinkedList}
     */
    prepend(value){
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }
        return this;
    }


    /**
     *
     * @param value
     * @returns {boolean}
     */
    search(value){
        let headNode= this.head;
        while(headNode !== null && value !== headNode.value ){
            headNode = headNode.next;

            if (headNode && headNode.value == value){
                return true;
            }
        }

        return false;


    }


}


export default LinkedList;
