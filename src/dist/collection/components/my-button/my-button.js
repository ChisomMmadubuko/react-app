import { Host, h } from "@stencil/core";
export class MyButton {
    render() {
        return (h(Host, { key: 'cb616a2d8706bd690a12886faa643e7ea0b349ff' }, h("slot", { key: '80811014088e29ef48cec3e2799f8112b29cb35b' })));
    }
    static get is() { return "my-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-button.css"]
        };
    }
}
//# sourceMappingURL=my-button.js.map
