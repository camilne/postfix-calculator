import Stack from '../stack';
import Token from '../token';
import TokenType from '../tokentype';
import TokenTypes from '../tokentypes';

export default abstract class OpBinary extends TokenType {
    protected constructor(name: string, regex: RegExp) {
        super(name, regex);
    }

    public execute(stack: Stack): void {
        stack.pop();
        if (stack.size() < 2) {
            console.error('underflow exception');
        } else {
            const second = stack.pop();
            const first = stack.pop();

            const firstVal = parseFloat(first.value);
            const secondVal = parseFloat(second.value);

            if (!firstVal || !secondVal) {
                throw new Error(`invalid operands to ${this._name}`);
            }

            const result = this.apply(firstVal, secondVal);
            stack.push(new Token(TokenTypes.NUMBER, result.toString()));
        }
    }

    protected abstract apply(a: number, b: number): number;
}
