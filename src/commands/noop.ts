import Stack from '../stack';
import TokenType from '../tokentype';

export default class NoOp extends TokenType {
    constructor(name: string, regex: RegExp) {
        super(name, regex);
    }

    public execute(stack: Stack): void {
        // Empty
    }
}
