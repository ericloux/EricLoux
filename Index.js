import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
//import * as pages from "./components/pages";

const root = document.querySelector("#root");

let state = {
    Navigation: {
        title: `Navigation title`
    },
    
    Header: {
        title: `Header title`
    },

    Content: {
        title: `Content title`
    },

    Footer: {
        title: `Footer title`
    },
};

function render(state) {
    console.log("this is my state", state);
    root.innerHTML = `
        ${Navigation(state.Navigation)}
        ${Header(state.Header) }
        ${Content(state.Content)}
        ${Footer(state.Footer)}`;
}

render(state);