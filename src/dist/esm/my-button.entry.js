import { r as registerInstance, h, H as Host } from './index-4dbbbba1.js';

const myButtonCss = ":host{display:inline-block;padding:10px 20px;background-color:#007bff;color:white;border:none;border-radius:5px;cursor:pointer;text-align:center;transition:background-color 0.3s ease;}:host(:hover){background-color:#0056b3}:host(:active){animation:click-animation 0.2s ease}@keyframes click-animation{0%{transform:scale(1)}50%{transform:scale(0.95)}100%{transform:scale(1)}}";
const MyButtonStyle0 = myButtonCss;

const MyButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'cb616a2d8706bd690a12886faa643e7ea0b349ff' }, h("slot", { key: '80811014088e29ef48cec3e2799f8112b29cb35b' })));
    }
};
MyButton.style = MyButtonStyle0;

export { MyButton as my_button };

//# sourceMappingURL=my-button.entry.js.map