const RecentPost = (props) => {
    return (
        <div className="flex flex-col px-[10px] mb-[17px] grow-0 shrink-1 basis-6/12">
            <article className="h-full bg-white p-[20px] rounded shadow-md">
                <div
                    className="inline-block text-inherit text-[26px] font-bold leading-[146.1538461538%] cursor-default mb-[16px] transition duration-200 hover:text-[#bb4949]">{props.data.postName}</div>
                <div className="text-base mb-[10px] leading-5">{props.data.date} <span className="mx-[10px]">|</span> {props.data.category}
                </div>
                <div className="mb-0 cursor-default text-base text-[#21243d] leading-[143.75%]">
                    {props.data.text}
                </div>
            </article>
        </div>
    )
}

export default RecentPost