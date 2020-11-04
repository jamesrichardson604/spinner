const animate = () => {
  let delay = 100
  const symbols = '|/-\\||/-\\|'

  for(let x of symbols){
  delay += 200
  setTimeout(() => {
    process.stdout.write(`\r${x}`)
  }, delay)
}
}
animate()
