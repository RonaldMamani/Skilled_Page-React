import { Link } from "react-router-dom";
import SubTitle from "../Texts/SubTitle";
import TextCommon from "../Texts/TextCommon";

export default function CoursesTips({Logo, Name, Descrition}) {
    return (
        <div className="mx-5 flex flex-col gap-4 text-start">
            <div>
                <img src={Logo} alt="" />
            </div>
            <SubTitle className="font-bold text-[#13183F] text-2xl" text={Name} />
            <TextCommon className="text-[#83869A]" text={Descrition} />
            <Link className="font-bold text-[#F74780] text-lg" >Get Started</Link>
        </div>
    )
}