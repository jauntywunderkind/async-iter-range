"use module"
import range from "."

export async function* RangeAsync( a, b){
	return yield* range( a, b)
}

export {
  RangeAsync as default,
  RangeAsync as rangeAsync,
  RangeAsync as Range,
  RangeAsync as Async,
  RangeAsync as async,
}
