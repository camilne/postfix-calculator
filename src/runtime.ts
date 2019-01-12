import Stack from './stack';
import Token from './token';

export default class Runtime {
    private _stack: Stack;

    constructor() {
        this._stack = new Stack();
    }

    public process(tokens: Token[]): void {
        for (const token of tokens) {
            this._stack.push(token);
            token.type.execute(this._stack);
        }
    }

    public get stack(): Stack {
        return this._stack;
    }
}
