const sys = {}
const ss = ''
const s1 = []
const s2 = undefined
const s3 = null

const isEmpty = obj =>{
  if (obj === undefined) return false
  return Object.keys(obj).length === 0
}

console.log(typeof s3)


console.log(s3 === null)
