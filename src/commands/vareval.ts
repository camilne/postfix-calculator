import Stack from '../stack';
import Token from '../token';
import TokenType from '../tokentype';
import TokenTypes from '../tokentypes';
import Variable from '../variable';

export default class VariableEval extends TokenType {
    constructor() {
        super('variable evalution', /^[a-zA-Z_]\w*$/);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        const identifier = stack.pop();
        const value = Variable.resolve(identifier.value, variables);
        if (value === undefined) {
            return;
        }

        stack.push(new Token(TokenTypes.NUMBER, value.toString()));
    }
}
