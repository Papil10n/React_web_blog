import GreetContent from "./GreetContent/GreetContent"
import img from "./../../../Image/avatar.jpg"

const WelcomeSection = () => {
    return (
        <section className="flex justify-between pt-[38px] mb-28">
            <div className="flex flex-col-reverse md:flex md:flex-row mx-6 lg:mx-0  md:max-w-4xl m-auto pt-[31px]">
                <GreetContent />
                <img className="h-80 w-80 mb-5 grow-0 shrink-0 basis-60 md:h-60 md:w-60 md:mb-0 relative rounded-full m-auto" src={img} alt="#" />
            </div>
        </section>
    )
}

export default WelcomeSection