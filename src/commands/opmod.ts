import OpBinary from './opbinary';

export default class OpMod extends OpBinary {
    constructor() {
        super('op mod', /^\%$/);
    }

    protected apply(a: number, b: number): number {
        return a % b;
    }
}
