import React from "react";
import Image from "next/image";


const Hero2 = () => {
    return (
        <div className="bg-white">
            <div className="h-full m-10 my-0 text-center">
                <h1 className="text-[#044E83] font-bold text-3xl">
                    Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
                    Developing Billion-Dollar Valued Developers and Solopreneurs
                </h1>
                <p className="pt-9 pb-6 text-xl text-justify">
                    The pace of technological change is accelerating, big players like
                    Microsoft, Amazon, Google, and OpenAI are winning by providing
                    infrastructure, large AI foundation models, frameworks, 3D Metaverse
                    experiences, and massive distribution networks. Solopreneurs trained in
                    this program will win by automating work typically outsourced to
                    employees, by directly connecting to customers by eliminating the
                    middleman, and by developing vertical metaverses, thus paving the way
                    for the first billion-dollar valued solopreneur businesses. This program
                    has the objective to train this new breed of billion-dollar
                    solopreneurs. These solopreneurs will adopt the ultra-lean business
                    model and work independently and will not need to hire employees or
                    other team members.
                </p>

                <div className="grid grid-cols-3 mt-5 gap-5">

                    <Image
                        src="/Hero2..1.jpg"
                        alt="Image 2"
                        className="rounded-[8px] w-full h-[300px] object-cover shadow-xl shadow-zinc-700"
                        width={600}
                        height={600}

                    />
                    <Image
                        src="/Hero2..2.jpg"
                        alt="Image 2"
                        className="rounded-[8px] w-full h-[300px] object-cover shadow-xl shadow-zinc-700"
                        width={600}
                        height={600}

                    />
                    <Image
                        src="/Hero2..3.jpg"
                        alt="Image 2"
                        className="rounded-[8px] w-full h-[300px] object-cover shadow-xl shadow-zinc-700"
                        width={600}
                        height={600}

                    />


                </div>

                <div className="grid grid-cols-2 mt-5 gap-5">
                    <Image
                        src="/Hero2..3-1.jpg"
                        alt="Image 2"
                        className="rounded-[8px] w-full h-[600px] object-cover shadow-xl shadow-zinc-700"
                        width={900}
                        height={900}
                    />
                    <Image
                        src="/Hero2..3-2.jpg"
                        alt="Image 2"
                        className="rounded-[8px] w-full h-[600px] object-cover shadow-xl shadow-zinc-700"
                        width={900}
                        height={900}
                    />

                </div>

                <hr />

                <div className="courses-container">
                    <h1 className="text-[#044E83] font-bold text-3xl flex courses-title">Core Courses Sequence</h1>
                    <div className="flex gap-10 mt-10 courses-grid">
                        <div className="course-card">

                            <Image
                                src="/Hero2..4.jpg"
                                alt="Course Image"
                                className="rounded-[8px] w-full h-[200px] object-cover shadow-xl shadow-zinc-700"
                                width={600}
                                height={600}
                            />

                            <h3 className="mt-2">Programming Fundamentals</h3>
                        </div>
                        <div className="course-card">
                            <Image
                                src="/Hero2..5.jpg"
                                alt="Course Image"
                                className="rounded-[8px] w-full h-[200px] object-cover shadow-xl shadow-zinc-700"
                                width={600}
                                height={600}
                            />

                            <h3 className="mt-2">Web2 Using NextJS</h3>
                        </div>
                        <div className="course-card">
                            <Image
                                src="/Hero2..6.jpg"
                                alt="Course Image"
                                className="rounded-[8px] w-full h-[200px] object-cover shadow-xl shadow-zinc-700"
                                width={600}
                                height={600}
                            />

                            <h3 className="mt-2">Earn as You Learn</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
