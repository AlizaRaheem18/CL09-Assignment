"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>

            <nav className=" bg-[#044E83] text-white h-20 py-5 px-5 flex  items-center justify-between justify-centre ">
                <div className='absolute '>
                    <Image
                        src='/logo.9ff76f62.png' alt={"logo"} height={113} width={90}
                        className='mt-20'
                    />

                </div>


                <h1 className="font-bold text-xl ml-52 text-[#B9D8F3]">Tuition Free Education Program on Latest Technologies</h1>

                <div >
                    <ul className='flex space-x-5 gap-8'>
                        <li>
                            <Link href="/" >Home</Link>
                        </li>
                        <li>
                            <Link href="">Apply</Link>
                        </li>
                        <li>
                            <Link href="">Job</Link>
                        </li>
                        <li>
                            <Link href="">Result</Link>

                        </li>
                        <li>
                            <Link href=""> Courses</Link>
                        </li>
                    </ul>
                </div>





            </nav>


        </div>
    )
}

export default Navbar;