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

  static emptyListError = () => Error("List Is Empty!");
  static indexError = () => Error("Index Out of range!");
  
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
      throw LinkedList.emptyListError();
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
      throw LinkedList.emptyListError();
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

  getNodeAt(idx) {
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode.next;
      if (currNode === null) {
        throw LinkedList.indexError();
      }
    }
    return currNode
  }
  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.getNodeAt(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const node = this.getNodeAt(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx === 0 || this.isEmpty()) {
      this.unshift(val);
    } else {
      const insertedNode = new Node(val);
      const nodeBefore = this.getNodeAt(idx - 1);
      const nodeAfter = nodeBefore.next;
      nodeBefore.next = insertedNode;
      insertedNode.next = nodeAfter;
      if(insertedNode.next === null){
        this.tail = insertedNode;
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx === 0){
      return this.shift();
    } else if(idx === this.length){
      throw LinkedList.indexError();
    } else {
      const nodeBefore = this.getNodeAt(idx - 1);
      const val = nodeBefore.next.val;
      const nodeAfter = nodeBefore.next.next;
      nodeBefore.next = nodeAfter;
      if(nodeBefore.next === null) this.tail = nodeBefore;
      this.length--;
      return val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;
    let total = 0;
    let currNode = this.head;
    while(currNode){
      total += currNode.val;
      currNode = currNode.next;
    }
    return total/this.length;

  }
}

module.exports = LinkedList;
