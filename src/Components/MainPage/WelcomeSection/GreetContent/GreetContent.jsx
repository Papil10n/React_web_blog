const GreetContent = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center md:block flex-auto items-flex-start md:text-start md:pt-4 md:pr-28 ">
            <h1 className="text-[44px] font-bold text-[#21243d] leading-[136%] mb-[25px] ">Hi, I am Nick,<br/> Front-end
                Developer</h1>
            <div className="text-base leading-[143.75%] text-[#21243d] mb-[35px] ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet amet.
            </div>
            <button
                className="bg-[#ff6464] rounded-sm h-[47px] text-white font-medium leading-[145%] inline-flex items-center justify-center align-middle px-[20px] hover:bg-[#bb4949] transition-colors mb-[25px] ">
                Download Resume
            </button>
        </div>
    )
}

export default GreetContent