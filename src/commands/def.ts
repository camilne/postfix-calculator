import Stack from '../stack';
import TokenType from '../tokentype';
import TokenTypes from '../tokentypes';
import Variable from '../variable';

export default class Def extends TokenType {
    constructor() {
        super('def', /^def$/);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        stack.pop();
        if (stack.size() < 2) {
            console.error('underflow exception');
        } else {
            const identifier = stack.pop();
            const value = Variable.resolve(stack.pop().value, variables);

            if (identifier.type !== TokenTypes.VAR_DECL) {
                console.error('variable declaration needed for def');
                return;
            }

            if (value === undefined) {
                return;
            }

            // Remove the leading slash in the identifier declaration
            const variable = new Variable(identifier.value.slice(1), value);
            variables.set(variable.name, variable);
        }
    }
}
