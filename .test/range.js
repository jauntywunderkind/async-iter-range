"use module"
import Range from ".."
import tape from "tape"

console.log(Range)

tape( "does n increment iteration", function( t){
	const
	  range= Range( 4),
	  vals= [ ...range]
	t.equal( vals.length, 4)
	t.equal( vals[ 0], 0, "yield 0")
	t.equal( vals[ 1], 1, "yield 1")
	t.equal( vals[ 2], 2, "yield 2")
	t.equal( vals[ 3], 3, "yield 3")
	t.end()
})

tape( "does n decrement iteration", function( t){
	const
	  range= Range( -4),
	  vals= [ ...range]
	t.equal( vals.length, 4)
	t.equal( vals[ 0], 0, "yield 0")
	t.equal( vals[ 1], -1, "yield 1")
	t.equal( vals[ 2], -2, "yield 2")
	t.equal( vals[ 3], -3, "yield 3")
	t.end()
})

tape( "does start,end increment range", function( t){
	const
	  range= Range( 2, 4),
	  vals= [ ...range]
	t.equal( vals.length, 2)
	t.equal( vals[ 0], 2, "yield 2")
	t.equal( vals[ 1], 3, "yield 3")
	t.end()
})

tape( "does start,end decrement range", function( t){
	const
	  range= Range( 4, 2),
	  vals= [ ...range]
	t.equal( vals.length, 2)
	t.equal( vals[ 0], 4, "yield 4")
	t.equal( vals[ 1], 3, "yield 3")
	t.end()
})

tape( "does negative start,end range", function( t){
	const
	  range= Range( -2, 2),
	  vals= [ ...range]
	t.equal( vals.length, 4)
	t.equal( vals[ 0], -2, "yield -2")
	t.equal( vals[ 1], -1, "yield -1")
	t.equal( vals[ 2], 0, "yield 0")
	t.equal( vals[ 3], 1, "yield 1")
	t.end()
})
