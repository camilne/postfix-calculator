import OpBinary from './opbinary';

export default class OpMul extends OpBinary {
    constructor() {
        super('op mul', /\*/);
    }

    protected apply(a: number, b: number): number {
        return a * b;
    }
}
