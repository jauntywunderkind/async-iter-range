"use module"
import Immediate from "../immediate.js"
import tape from "tape"

tape( "test that immediate eventually returns everything", async function( t){
	async function readInto( arr, n= 3){
		for await( const val of Immediate( n)){
			arr.push( val)
		}
		return arr
	}
	const
	  vals1= [],
	  vals2= [],
	  reads1= readInto( vals1, 3),
	  reads2= readInto( vals2, -3),
	  read1= await reads1,
	  read2= await reads2
	t.equal( read1.length, 3, "first read hapepned")
	t.equal( read2.length, 3, "second read happened")
	t.equal( read1[ 0], 0, "read1 is 0")
	t.equal( read1[ 1], 1, "read1 is 1")
	t.equal( read1[ 2], 2, "read1 is 2")
	t.equal( read2[ 0], 0, "read1 is 0")
	t.equal( read2[ 1], -1, "read1 is -1")
	t.equal( read2[ 2], -2, "read1 is -2")
	t.end()
})
