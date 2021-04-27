export default class Component {
    constructor(props) {
        this.props = props
    }

    build(tag, content = "", options = {}, ...children) {
        let element = document.createElement(tag, options);

        this.content(element, content)
        this.options(element, options)
        this.children(element, ...children)

        return element
    }

    content(element, content) {
        if (content === "") return

        element.innerText = content
    }

    options(element, options) {
        if (Object.keys(options).length < 1) return
        let event = Object.entries(options).filter(option => option[0].match(/on\w*/)).flat()

        if (event.length > 0) {
            element.addEventListener(event[0].slice(2), event[1])
            delete options[event[0]]
        }

        Object.keys(options).forEach(key => element.setAttribute(key, options[key]))
    }

    children(element, ...children) {
        if (children.length < 1) return

        children.forEach(child => {
            if (Array.isArray(child)) {
                element.appendChild(this.build(...child))
            } else {
                element.append(child)
            }
        })
    }

    set state(state) {
        this._state = state
    }

    get state() {
        return this._state
    }


}