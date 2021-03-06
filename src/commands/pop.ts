import Stack from '../stack';
import TokenType from '../tokentype';
import Variable from '../variable';

/**
 * Command to pop the top element off the stack if one exists.
 */
export default class Pop extends TokenType {
    constructor() {
        super('pop', /^pop$/);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        // Pop this operator
        stack.pop();
        if (stack.size() > 0) {
            // Execute the command
            stack.pop();
        } else {
            console.error('underflow exception');
        }
    }
}
