chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [array, element]
}
function addElementToBeginningOfArray(array, element){
  return['foo', 1]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return ['foo', 1]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element){
return array[array, element]
}

function addElementToEndOfArray(array,element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array [index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.slice(0)
  return array
}

function removeElementFromBeginningOfArray(array){
  let items = [1, 2, 3]
  items.splice(1,1)
  return array
}
