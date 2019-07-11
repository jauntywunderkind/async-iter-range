"use module"
import Immediate from "../immediate.js"
import tape from "tape"

tape( "test that immediate eventually returns everything", async function( t){
	t.plan( 14)
	async function readInto( arr, n= 3){
		for await( const val of Immediate( n)){
			t.equal( arr, expectSource.shift(), `interleaved array ${ arr=== vals1? "1": "2"} yielded`)
			t.equal( val, expectVals.shift(), "interleaved read")
			arr.push( val)
		}
		return arr
	}
	const
	  vals1= [],
	  vals2= [],
	  expectSource= [ vals1, vals2, vals1, vals2, vals1, vals2],
	  expectVals= [ 0, 0, 1, -1, 2, -2],
	  reads1= readInto( vals1, 3),
	  reads2= readInto( vals2, -3),
	  read1= await reads1,
	  read2= await reads2
	t.equal( read1.length, 3, "first read hapepned")
	t.equal( read2.length, 3, "second read happened")
	t.end()
})
