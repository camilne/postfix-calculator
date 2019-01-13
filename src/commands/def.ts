import Stack from '../stack';
import TokenType from '../tokentype';
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

            if (value === undefined) {
                return;
            }

            const variable = new Variable(identifier.value, value);
            variables.set(variable.name, variable);
        }
    }
}
