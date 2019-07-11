"use module"
import PImmediate from "p-immediate"
import range from "."

export async function* RangeImmediate( a, b){
	for( const el of range( a, b)){
		await PImmediate()
		yield el
	}
}

export {
  RangeImmediate as default,
  RangeImmediate as rangeImmediate,
  RangeImmediate as Range,
  RangeImmediate as Immediate,
  RangeImmediate as immediate,
}
