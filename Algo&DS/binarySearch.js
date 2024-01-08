
const arr = [4, 6, 2, 10, 0, 19]

const BinarySearch = (array, nb) => {
    let notFound = true
    let arr = array
    let ctr = 0
    const midIndex = Math.floor(arr.length / 2)

    do {
        const midIndex = Math.floor(arr.length / 2)
       
        if (arr[midIndex] > nb) {
            arr = arr.slice(0, midIndex)
        }
        else if (arr[midIndex] < nb) {       
            ctr=ctr+midIndex+1
            arr = arr.slice(midIndex+1)     
        }
        else if (arr[midIndex] === nb) {
           ctr+=midIndex
                notFound = false
                console.log(`your nb is in index :${ctr}`)     
        }
    else if(arr.length===0) {
        notFound=false
    }
    } while (notFound)

}
BinarySearch(arr,10)