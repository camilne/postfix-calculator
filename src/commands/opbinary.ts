import Stack from '../stack';
import Token from '../token';
import TokenType from '../tokentype';
import TokenTypes from '../tokentypes';
import Variable from '../variable';

export default abstract class OpBinary extends TokenType {
    protected constructor(name: string, regex: RegExp) {
        super(name, regex);
    }

    public execute(stack: Stack, variables: Map<string, Variable>): void {
        stack.pop();
        if (stack.size() < 2) {
            console.error('underflow exception');
        } else {
            const second = stack.pop();
            const first = stack.pop();

            const firstVal = Variable.resolve(first.value, variables);
            const secondVal = Variable.resolve(second.value, variables);

            if (firstVal === undefined || secondVal === undefined) {
                return;
            }

            const result = this.apply(firstVal, secondVal);
            stack.push(new Token(TokenTypes.NUMBER, result.toString()));
        }
    }

    protected abstract apply(a: number, b: number): number;
}
