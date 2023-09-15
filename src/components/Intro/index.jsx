import ButtonPink from "../Buttons/ButtonPink";
import Header from "../Header";
import TextCommon from "../Texts/TextCommon";
import Title from "../Texts/Title";

export default function Intro() {
    return (
        <section className="
            px-5 py-10 
            md:p-10 md:bg-[url('./assets/image-hero-tablet.webp')] md:bg-[center_left_20rem] md:bg-no-repeat bg-cover
            lg:px-32 lg:bg-[url('./assets/image-hero-desktop.webp')] lg:bg-[top_-12rem_left_25rem] lg:h-[100vh]
            xl:bg-[top_-28rem_left_35rem] xl:h-[120vh]
            ">
            <Header />
            <div className="
                grid grid-rows-2 gap-10 py-10
                md:grid-cols-2 md:grid-rows-1 md:py-28 md:gap-0
                lg:py-40 xl:py-60
                ">
                <div className="flex flex-col gap-7 text-start items-start">
                    <Title 
                        className="text-4xl text-[#13183F] font-extrabold" 
                        text="Maximize skill, minimize budget" />
                    <TextCommon 
                        className="text-[#83869A]" 
                        text="Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want." />
                    <ButtonPink content="Get Started" />
                </div>
                <div className="md:hidden bg-[url('./assets/image-hero-mobile.webp')] bg-cover"></div>
            </div>
            
        </section>
    )
}