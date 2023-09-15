import ButtonPurple from "../Buttons/ButtonPurple";
import logo from "../../assets/logo-light.svg"

export default function Footer() {
    return (
        <footer className="
            px-5 py-10 bg-[#13183F] flex justify-between items-center
            md:p-10
            lg:px-32
            ">
            <div>
                <img src={logo} alt="" />
            </div>
            <ButtonPurple content="Get Started" />
        </footer>
    )
}