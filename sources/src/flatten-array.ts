// flatten array
const flatten = (array: any[]) => {
  return array.reduce((pre, value) => {
    return pre.concat(Array.isArray(value) ? flatten(value) : value)
  }, [])
}

export default flatten