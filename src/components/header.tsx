import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Logo } from "./logo";
import { Sidebar } from "./sidebar";
import { useState } from "react";

export function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <header className="py-5 w-full flex items-center justify-center bg-gray-700 border-b border-solid border-gray-600 relative">
                <Logo />
                <div className="hidden max-lg:block absolute right-4">
                    <span
                        className="cursor-pointer"
                        onClick={() => setOpenMenu(state => !state)}>
                        {openMenu ? <XIcon size={24} /> : <ListIcon size={24} />}
                    </span>
                </div>
            </header>
            <div data-open-menu={openMenu} className="data-[open-menu='false']:hidden absolute right-0 left-0 z-10 top-[4.5rem] [&>.sidebar]:max-w-full"><Sidebar handleSelectLesson={() => setOpenMenu(false)} /></div>
            <div data-open-menu={openMenu} onClick={() => setOpenMenu(false)} className="data-[open-menu='false']:hidden fixed top-[4.5rem] bottom-0 left-0 right-0 bg-gray-950 opacity-60 z-9"></div>
        </>
    )
}