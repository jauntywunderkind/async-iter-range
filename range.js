"use module"

export function Range( a, b){
	const
	  aDefined= a!== undefined,
	  bDefined= b!== undefined,
	let
	  cursor= bDefined? a: 0,
	  end= bDefined? b: a,
	  span= end- cursor,
	  inc= span> 0
	if( cursor=== undefined){
		cursor= 0
	}
	if( end=== undefined){
		end= Number.POSITIVE_INFINITY
	}
	if( inc&& cursor< end){
		while( cursor< end){
			yield cursor++
		}
	}else{
		while( cursor> end){
			yield cursor--
		}
	}
	return span
}

export {
  Range as range
}
