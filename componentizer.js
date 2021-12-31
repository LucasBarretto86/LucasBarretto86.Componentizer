export default class Componentizer {
    constructor(props) {
        this.props = props

        return this.render.bind(this).call()
    }

    render() {
        throw "Each component needs to have  it's own implementation"
    }

    build(tag, content = "", options = {}, ...children) {
        return this._build(tag, content, options, children)
    }

    _build(tag, content, options, children) {
        let element = document.createElement(tag);
        this._content(element, content)
        this._options(element, options)
        this._children(element, children)

        return element
    }

    _content(element, content) {
        if (content === "") return

        element.innerText = content
    }

    _options(element, options) {
        if (options.length < 1) return;

        Object.entries(options).forEach(([key, value]) => {
            if (key.match(/on\w*/)) {
                element.addEventListener(key.replace("on", ""), value)
            } else if (key.match(/data/) && typeof value == "object") {
                this._dataset(element, data)
            } else {
                element.setAttribute(key, value)
            }
        })
    }

    _children(element, children) {
        if (children.length < 1) return;

        children.forEach(child => {
            if (Array.isArray(child)) {
                element.appendChild(this.build(...child))
            } else {
                element.append(child)
            }
        })
    }

    _dataset(element, data) {
        Object.entries(data).forEach(([key, value]) => {
            element.dataset[key] = value
        })
    }

    set state(state) {
        this._state = state
    }

    get state() {
        return this._state
    }
}