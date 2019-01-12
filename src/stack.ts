import Token from './token';

export default class Stack {
    private readonly _stack: Token[];

    constructor() {
        this._stack = new Array<Token>();
    }

    public push(token: Token): void {
        this._stack.push(token);
    }

    public pop(): Token {
        const result = this._stack.pop();
        if (!result) {
            throw new Error('cannot pop. stack is empty');
        }
        return result;
    }

    public clear(): void {
        this._stack.splice(0);
    }

    public size(): number {
        return this._stack.length;
    }

    public toString(): string {
        return this._stack.slice().reverse().join('\n');
    }
}
