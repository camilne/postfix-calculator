import Stack from '../stack';
import TokenType from '../tokentype';
import Variable from '../variable';

export default class NoOp extends TokenType {
    constructor(name: string, regex: RegExp) {
        super(name, regex);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        // Empty
    }
}
