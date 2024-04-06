// import { AnyFunctionType } from 'types/common'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunctionType = (...args: any[]) => any

const debounce = <TFunc extends AnyFunctionType>(
  func: TFunc,
  delay = 0
): { (...args: Parameters<TFunc>): void; cancel: () => void } => {
  let timer: ReturnType<typeof setTimeout> | null = null

  const clearTimer = () => {
    timer && clearTimeout(timer)
  }

  function debouncedFunction(...args: Parameters<TFunc>) {
    clearTimer()
    timer = setTimeout(() => func(args), delay)
  }

  debouncedFunction.cancel = clearTimer

  return debouncedFunction
}

export default debounce
