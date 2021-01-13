import Link from 'next/link'
import { useState } from 'react';
import Layout from '../components/Layout'

async function fetchName() {
  const res = await fetch('/api/users/getName');
  const brin = await res.json();
  const rerBrin : String[] = await brin['combined']
  
  return rerBrin
}

const IndexPage = () => {
  const [name,setName] = useState<String>()
  const [name1,setName1] = useState<String>()

  const fetchFunction = async () => {
    const d : String[] = await fetchName()
    //@ts-ignore
    setName(await d.bLeR)
    //@ts-ignore
    setName1(await d.eRbL)
  }

  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 style={{textAlign: 'center'}}>Bengali-English Name Combiner</h1>
    <p>
   {!name &&   <Link href="#">
        <a onClick={() => fetchFunction()}>Get Name</a>
      </Link>}
    </p>
    <h3 style={{textAlign: 'center'}}>
      {name && name} <br />
      {name1 && name1}
    </h3>
  </Layout>
)}

export default IndexPage
