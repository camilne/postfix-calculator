import Stack from '../stack';
import TokenType from '../tokentype';

export default class Clear extends TokenType {
    constructor() {
        super('clear', /^clear$/);
    }

    public execute(stack: Stack): void {
        stack.clear();
    }
}
