export const Button = ({ children, onclick }) => {
    return (
        <button onClick={onclick} className="hover:border-[#289fc0] hover:border-[2px] hover:text-[#289fc0] hover:bg-transparent -translate-x-2 text-[#1a1a1d] outline-none w-32 h-[3.2rem] font-bold rounded-full text-[17px] text-center  bg-[#289fc0] ">{children}</button>
    )
}

