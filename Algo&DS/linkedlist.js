class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class creatLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
}

function addNode(list, number) {
    const node = new Node(number)

    if (list.head === null) {
        list.head = node
    }
    else {
        let ctr = list.head
        while (ctr.next !== null) {
            ctr = ctr.next
        }
        ctr.next = node
    }
}
function printList(list) {
    if (list.head === null) return '..'
    else {
        let ctr = list.head
        let printedlist = ''
        console
        while (ctr !== null) {
            if (ctr.next !== null) {
                console.log(ctr.value)
                printedlist += ctr.value + '->'

            }
            else {
                printedlist += ctr.value

            }
            ctr = ctr.next
        }
        return printedlist

    }
}

function remove(list, nb) {
    if (list.head === null) return false
    if (list.head.value === nb) {
        let oldhead = list.head
        list.head = oldhead.next
    }
    else {
        let ctr = list.head
        while (ctr.next !== null) {

            if (ctr.next.value === nb) {
                ctr.next = ctr.next.next
                return
            }
            ctr = ctr.next

        }
    }
}

function search(list, nb) {
    if (list.head === null) return false
    if (list.head.value === nb) return true
    else {
        let ctr = list.head
        while (ctr !== null) {
            if (ctr.value === nb) {
                return true
            }
            ctr = ctr.next
        }
        return false
    }
}

const list = new creatLinkedList()
addNode(list, 4)
addNode(list, 6)
addNode(list, 5)
addNode(list, 9)
console.log(printList(list))
remove(list, 5)
console.log(printList(list))
console.log(search(list, 9))
