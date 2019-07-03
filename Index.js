import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
//import * as pages from "./components/pages";

const root = document.querySelector("#root");

function render() {
    root.innerHTML = `
        ${Navigation}
        ${Header}
        ${Content}
        ${Footer}`;
}

render();