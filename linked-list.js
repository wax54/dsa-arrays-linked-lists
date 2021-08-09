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

  emptyListError = () => Error("List Is Empty!");
  
  isEmpty() {
    return !this.head;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);
    if(this.isEmpty()){
      //no list yet
      this.head = this.tail = node;
      this.length = 1;
    } else {
      //there is a list
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val);
    if(this.isEmpty()){
      //no list yet
      this.head = this.tail = node;
      this.length = 1;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let currNode = this.head;
    let val;
    if(this.isEmpty()){
      throw this.emptyListError();
    }
    else if(currNode === this.tail) {
      //1 item list
      val = currNode.val;
      this.head = this.tail = null;
    }else {
      while(currNode.next.next !== null){
        currNode = currNode.next;
      }
      //currNode.next is the last node
      val = currNode.next.val;
      this.tail = currNode;
      this.tail.next = null;
    }
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let val;
    if(this.isEmpty()){
      throw this.emptyListError();
    } else if(this.head.next === null) {
      val = this.head.val;
      this.head = this.tail = null;
      
    } else {
      val = this.head.val;
      this.head = this.head.next;
    }
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head;
    for(let i = 0; i < idx; i++){
      currNode = currNode.next;
    }
    return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
