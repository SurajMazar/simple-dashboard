import { CustomNextPage } from '@/@types/next'
import useComputed from '@/app/hooks/useComputed'
import { useState } from 'react'

const Home: CustomNextPage = () => {

	const [count, setCount] = useState<number>(1)
	

	const evenOdd = useComputed(()=>{
		return count % 2 === 0 ? 'even':'odd'
	},[count])


	return (<>
		<button onClick={()=>setCount(count+1)}>increase count</button><br/>
		<p>{count}</p><br/>
		<p>{evenOdd}</p>
	</>)
}

Home.layout = 'NONE'

export default Home
