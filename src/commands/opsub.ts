import OpBinary from './opbinary';

export default class OpSub extends OpBinary {
    constructor() {
        super('op sub', /\-/);
    }

    protected apply(a: number, b: number): number {
        return a - b;
    }
}
