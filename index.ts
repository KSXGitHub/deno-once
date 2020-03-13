/**
 * Create a function that calls and cache a function once
 * @param fn Function to be invoked once
 * @returns Function that returns result of first-time execution of `fn`
 */
export function once<Return> (fn: () => Return): () => Return {
  let main = () => {
    const value = fn()
    main = () => value
    return value
  }
  return () => main()
}

export default once
