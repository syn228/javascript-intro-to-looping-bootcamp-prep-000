function forLoop(array){
<<<<<<< HEAD
  for (var i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    }
    else array.push(`I am ${i} strange loops.`)
  }
  return array
}
function whileLoop(n){
    let countdown = n
    while (countdown > 0){
      console.log(--countdown)
=======
  for (let i = 0; i < 25; i++){
    console.log(`I am ${i} strange loop${i <= 1 ? '' : 's'}.`)
  }
  return i
}
function whileLoop(n){
  let countdown = n
  while (countdown > 0){
    console.log(--countdown)
>>>>>>> 11463beebe689ce19ad1809cb4c0e84b0d9e2ccb
  }
  return 'done'
}
function doWhileLoop(array){
<<<<<<< HEAD
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {
    console.log(--array.length)
  } while (array.length > 0 && maybeTrue());
  return array
=======
  
>>>>>>> 11463beebe689ce19ad1809cb4c0e84b0d9e2ccb
}