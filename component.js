export default class Component {
    constructor(props) {
        this.props = props
    }

    build(tag, content = "", options = {}, ...children) {
        this._build(tag, content, options, ...children)
    }

    _build(tag, content, options, ...children) {
        let element = document.createElement(tag);
        this._content(element, content)
        this._options(element, options)
        this._children(element, ...children)

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

    set state(state) {
        this._state = state
    }

    get state() {
        return this._state
    }
}