import React from "react";
import { Link as Anchor} from "react-router-dom";


const NotAllowed = () => {
    return (
        <main className='flex flex-col md:justify-center bg-white-800'>
            <img className='w-[500px] xl:mx-[300px] h-full items-center md:items-center md:w-[500px] md:h-full'
                src="/assets/bugs-bunny-hypnosis-512x512.png" />
            <p className="font-semibold text-[28px] text-center ">
                Go back to{" "}
                <Anchor
                    to='/'
                    className="text-[#4338CA] hover:text-black">
                Home page
                </Anchor>
                !
            </p>
        </main>
    )
}

export default NotAllowed