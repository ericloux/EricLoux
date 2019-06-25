import Navigation from "./components/Navigation.js";
import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";

const initialHTML = document.body.innerHTML;

document.body.innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Contact}
    ${initialHTML} // we still need this
`;