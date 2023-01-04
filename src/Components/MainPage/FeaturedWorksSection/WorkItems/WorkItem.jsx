const WorkItem = (props) => {
    const defaultImg = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';
    return (
        <article className="pb-[30px] mb-[30px] flex border-b-1 border-[#e0e0e0]">
            <a href={props.data.link} className="basis-[150px] h-1/2 relative grow-0 shrink-0 sm:basis-[246px] block sm:h-auto rounded-md min-h-[180px] overflow-hidden no-underline transition-all duration-200 hover:shadow-md">
                <img className=" absolute w-full h-full top-0 left-0 object-cover" src={props.data.image ? props.data.image : defaultImg} alt="Work"/>
            </a>
            <div className="pl-[18px] flex-auto">
                <div className="text-inherit inline-block text-[30px] font-bold leading-[146%] mb-[15px]"><a className="text-inherit transition duration-300 hover:text-[#bb4949]" href={props.data.link}>{props.data.workName}</a></div>
                <div className="flex mb-15px items-center">
                    <div className="inline-flex bg-[#142850] rounded-2xl h-[26px] px-[10px] justify-center items-center text-white font-black text-[18px] ">{props.data.yearCreated}</div>
                    <div className="text-[#8695a4] text-[20px] ml-[25px]">{props.data.category}</div>
                </div>
                <div className="text-base leading-[143.75%] text-[#21243d] cursor-default">Amet minim mollit non deserunt ullamco est sit
                    aliqua
                    dolor do
                    amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                    nostrud
                    amet.
                </div>
            </div>
        </article>
    )
}

export default WorkItem