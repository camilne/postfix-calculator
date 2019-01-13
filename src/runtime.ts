import Stack from './stack';
import Token from './token';
import Variable from './variable';

export default class Runtime {
    private readonly _stack: Stack;
    private readonly _variables: Map<string, Variable>;

    constructor() {
        this._stack = new Stack();
        this._variables = new Map<string, Variable>();
    }

    public process(tokens: Token[]): void {
        for (const token of tokens) {
            this._stack.push(token);
            token.type.execute(this._stack, this._variables);
        }
    }

    public get stack(): Stack {
        return this._stack;
    }
}
