import Component from "./component.js";

class Example extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("h1", "Seja to como eu, seja to como você", {},
            ["span", ", danado!", { class: "jesus" }]
        )
    }
}
let example = new Example({ a: 1, b: 2 })

document.getElementById("app").append(example.render())