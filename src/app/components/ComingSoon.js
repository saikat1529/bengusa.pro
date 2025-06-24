// components/ComingSoon.js

import Logo from "@/app/components/Logo";

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center p-20">
            <Logo width={200}/>
            <hr className="my-[12px] w-full"/>
            <h1 className="text-xl font-bold mb-[8px]">🚧 Coming Soon</h1>
            <p className="text-center text-sm">We are currently doing some maintenance. Please check back later.</p>
        </div>
    );
}
