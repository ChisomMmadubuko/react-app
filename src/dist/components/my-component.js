import { p as proxyCustomElement, H, h } from './p-1dc78e37.js';
import { f as format } from './p-b07dd267.js';

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: '0d481e58fc31ee585bc7ad60794afa8a7c29064b' }, "Hello, World! I'm ", this.getText());
    }
    static get style() { return MyComponentStyle0; }
}, [1, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };

//# sourceMappingURL=my-component.js.map