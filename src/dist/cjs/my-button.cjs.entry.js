'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-203b44c8.js');

const myButtonCss = ":host{display:inline-block;padding:10px 20px;background-color:#007bff;color:white;border:none;border-radius:5px;cursor:pointer;text-align:center;transition:background-color 0.3s ease;}:host(:hover){background-color:#0056b3}:host(:active){animation:click-animation 0.2s ease}@keyframes click-animation{0%{transform:scale(1)}50%{transform:scale(0.95)}100%{transform:scale(1)}}";
const MyButtonStyle0 = myButtonCss;

const MyButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'cb616a2d8706bd690a12886faa643e7ea0b349ff' }, index.h("slot", { key: '80811014088e29ef48cec3e2799f8112b29cb35b' })));
    }
};
MyButton.style = MyButtonStyle0;

exports.my_button = MyButton;

//# sourceMappingURL=my-button.cjs.entry.js.map