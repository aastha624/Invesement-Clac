import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
    return <header id ="header">
        {/* //use logo dynamic value using src attribute */}
        <img src={logo} alt="logo showing the money bag" />
        <h1>Investment Calculator</h1>
    </header>
}