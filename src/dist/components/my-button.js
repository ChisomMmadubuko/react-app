import { p as proxyCustomElement, H, h, c as Host } from './p-1dc78e37.js';

const myButtonCss = ":host{display:inline-block;padding:10px 20px;background-color:#007bff;color:white;border:none;border-radius:5px;cursor:pointer;text-align:center;transition:background-color 0.3s ease;}:host(:hover){background-color:#0056b3}:host(:active){animation:click-animation 0.2s ease}@keyframes click-animation{0%{transform:scale(1)}50%{transform:scale(0.95)}100%{transform:scale(1)}}";
const MyButtonStyle0 = myButtonCss;

const MyButton$1 = /*@__PURE__*/ proxyCustomElement(class MyButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'cb616a2d8706bd690a12886faa643e7ea0b349ff' }, h("slot", { key: '80811014088e29ef48cec3e2799f8112b29cb35b' })));
    }
    static get style() { return MyButtonStyle0; }
}, [1, "my-button"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-button"];
    components.forEach(tagName => { switch (tagName) {
        case "my-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyButton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyButton = MyButton$1;
const defineCustomElement = defineCustomElement$1;

export { MyButton, defineCustomElement };

//# sourceMappingURL=my-button.js.map