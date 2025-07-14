import { Kaisei_Opti, Mingzat } from "next/font/google";

import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2 bg-purple-100 h-[60vh]">
        <div className="flex px-16 flex-col gap-4 justify-center ">
          <p className="text-3xl font-black t ">The best URL shortener in the market</p>
          <p className="">we are the most straight forward URL shortener in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis tenetur sed provident, quis odit nisi dignissimos maiores praesentium totam rerum quaerat minus cupiditate delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis iusto blanditiis, ab commodi quia.</p>
          <li className='flex gap-5 text-white ' >
                <Link href="/shorten"><button className='hover:bg-purple-900 bg-purple-500 shadow-lg p-4 font-bold py-2 cursor-pointer rounded-lg'>Try Now</button></Link>
                <Link href="/github" ><button className='hover:bg-purple-900 bg-purple-500 shadow-lg p-4 font-bold py-2 cursor-pointer rounded-lg'>Github</button></Link>
            </li>
        </div>
        
        <div className="flex justify-start relative">
          <img className="mix-blend-darken object-fill" src="https://static.vecteezy.com/system/resources/previews/020/811/041/non_2x/business-meeting-team-conference-in-office-room-flat-character-on-presentation-conference-illustration-presenting-charts-and-reports-employees-meeting-at-business-training-seminar-or-conference-vector.jpg"/>
        </div>
      </section>
    </main>
  );
}