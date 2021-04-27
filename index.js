import Component from "./src/libs/component.js";

class Teste extends Component {
    constructor(props) {
        super(props)

        this.state = { equality: "It's black" }

        this.shamone = this.shamone.bind(this)

        return this.build("h1", "It's black", { onmouseover: this.shamone, class: "michael__jackson" }, ["span", "!"])
    }

    shamone() {
        if (this.state.equality === "It's black") {
            this.state.equality = "it's white"
        } else {
            this.state.equality = "It's black"
        }

        document.querySelector('.michael__jackson').innerText = this.state.equality
    }

}

document.body.append(new Teste({ some: "teste" }))

