import Stack from './stack';
import Variable from './variable';

export default abstract class TokenType {
    protected constructor(protected readonly _name: string, private readonly _regex: RegExp) {

    }

    public match(value: string): string | null {
        const match = value.match(this._regex);
        return match ? match[0] : null;
    }

    public abstract execute(stack: Stack, variables: Map<string, Variable>): void;
}
