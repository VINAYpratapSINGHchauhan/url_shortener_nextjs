"use client"
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'

const shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg'>
      <h1 className='font-bold text-2xl mb-6 text-center text-purple-950 underline'>Generate your Short URLs</h1>
      <div className='flex flex-col items-center gap-3'>
        <input type="text" value={url} className=' w-full focus:outline-purple-950 bg-white p-2 py-1 rounded-lg' placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
        <input type="text" value={shorturl} className='w-full focus:outline-purple-950 bg-white p-2 py-1 rounded-lg' placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} className='  mt-2 text-white hover:bg-purple-900 bg-purple-500 shadow-lg p-5 font-bold py-1.5  rounded-lg'>Generate</button>
      </div>
      {generated && <><span className='font-bold text-lg'>Your Link </span><br/> <code><Link target="_blank" href={generated}>{generated}</Link>
      </code> </>}
    </div>
  )
}

export default shorten
