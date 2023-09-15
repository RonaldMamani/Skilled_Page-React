import logo from "../../assets/logo-dark.svg"

import ButtonBlue from "../Buttons/ButtonBlue";

export default function Header() {
    return (
        <header className="
            flex justify-between items-center
            ">
            <div>
                <img src={logo} alt="" />
            </div>
            <ButtonBlue content="Get Started" />
        </header>
    )
}