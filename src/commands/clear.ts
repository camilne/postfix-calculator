import Stack from '../stack';
import TokenType from '../tokentype';
import Variable from '../variable';

export default class Clear extends TokenType {
    constructor() {
        super('clear', /^clear$/);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        stack.clear();
    }
}
