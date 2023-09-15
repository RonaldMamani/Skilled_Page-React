import SubTitle from "../Texts/SubTitle";

import Animation from "../../assets/icon-animation.svg"
import Design from "../../assets/icon-design.svg"
import Photography from "../../assets/icon-photography.svg"
import Crypto from "../../assets/icon-crypto.svg"
import Business from "../../assets/icon-business.svg"
import CoursesTips from "./CousesTips";

export default function Courses() {
    return (
        <section className="
            px-5 py-14 flex flex-col gap-12
            md:px-10 md:py-20 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-16
            lg:p-32 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10
            ">
            <div>
                <SubTitle 
                    className="
                        bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] rounded-xl p-6 text-slate-100 text-2xl font-bold
                        md:h-full md:mt-5 md:font-extrabold md:py-12
                        " 
                    text="Check out our most popular courses!" />
            </div>
            <CoursesTips 
                Logo={Animation}
                Name="Animation"
                Descrition="Learn the latest animation techniques to create stunning motion design and captivate your audience."
            />
            <CoursesTips 
                Logo={Design}
                Name="Design"
                Descrition="Create beautiful, usable interfaces to help shape the future of how the web looks."
            />
            <CoursesTips 
                Logo={Photography}
                Name="Photography"
                Descrition="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
            />
            <CoursesTips 
                Logo={Crypto}
                Name="Crypto"
                Descrition="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
            />
            <CoursesTips 
                Logo={Business}
                Name="Business"
                Descrition="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
            />
        </section>
    )
}