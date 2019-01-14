import Stack from '../stack';
import TokenType from '../tokentype';
import Variable from '../variable';

export default class Swap extends TokenType {
    constructor() {
        super('swap', /^swap$/);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        stack.pop();
        if (stack.size() < 2) {
            console.error('underflow exception');
        } else {
            const a = stack.pop();
            const b = stack.pop();

            stack.push(a);
            stack.push(b);
        }
    }
}
