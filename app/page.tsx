'use client'
import { useState } from 'react';
// const SERVICE_FILENAME = './service_account_key.json';
const API_URL = 'https://gridinsight.el.r.appspot.com/';
// const AUDIENCE = '105370680082926146817';

export default function Home() {
  const [res, setRes] = useState(null || "")

  const fetchData = async () => {
      const resp = await fetch(API_URL)
      const data = await resp.text() || ""
      console.log("Fetch data from app engine ", data)
      setRes(data)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     hello world, lets get nextjs running on app engine
     <button onClick={fetchData}>Fetch data </button>
     <p>{(res!== null) ? res : "Loading --- please wait --- try clicking the button"}</p>
    </main>
  );
}
