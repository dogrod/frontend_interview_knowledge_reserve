import flatten from '../../src/flatten-array'

describe(
  'Flatten Array',
  () => {
    test(
      '2 dimensions, Should return an array has 6 element',
      () => {
        const testArr1 = [[0, 1], [2, 3], [4, 5]]

        expect(flatten(testArr1).length).toBe(6)
      }
    )

    test(
      '6 dimensions, Should return an array has 6 element',
      () => {
        const testArr2 = [0, [1, [2, [3, [4, [5]]]]]]
        
        expect(flatten(testArr2).length).toBe(6)
      }
    )
  }
)