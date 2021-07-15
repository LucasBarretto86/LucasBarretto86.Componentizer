import Component from "./component.js";

class Example extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("h1", "Seja to como eu, seja to como você", { class: "example", id: "example", "onclick": this.exampleMethod },
            this._build("span", "danado!", { class: "example__span" }),
            this._build("p", "Pai amado!", { class: "example__paragraph" })
        )
    }

    exampleMethod() {
        console.log('This is just an example');
    }
}

let example = new Example({ a: 1, b: 2 })
console.log(example.render())

document.getElementById("app").appendChild(example)