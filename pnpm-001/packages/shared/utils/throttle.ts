// import { AnyFunctionType } from 'types/common'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunctionType = (...args: any[]) => any

const throttle = <TFunc extends AnyFunctionType>(
  func: TFunc,
  delay = 0
): ((...args: Parameters<TFunc>) => ReturnType<TFunc>) => {
  let isThrottled = false
  let savedArgs: Parameters<TFunc> | null = null
  let result: ReturnType<TFunc>

  const wrapper = (...args: Parameters<TFunc>): ReturnType<TFunc> => {
    if (isThrottled) {
      savedArgs = args
      return result
    }

    setTimeout(() => {
      isThrottled = false
      if (savedArgs) {
        wrapper(...savedArgs)
        savedArgs = null
      }
    }, delay)

    isThrottled = true
    result = func(...args)
    return result
  }

  return wrapper
}

export default throttle
