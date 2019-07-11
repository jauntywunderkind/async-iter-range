"use module"
export async function* AsyncRange( a, b){
	return yield* range( a, b)
}

export {
  AsyncRange as default,
  AsyncRange as asyncRange,
  AsyncRange as Range,
  AsyncRange as Async,
  AsyncRange as async,
}
