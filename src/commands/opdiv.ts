import OpBinary from './opbinary';

export default class OpAdd extends OpBinary {
    constructor() {
        super('op add', /\//);
    }

    protected apply(a: number, b: number): number {
        return a / b;
    }
}
