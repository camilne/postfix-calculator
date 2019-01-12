import Stack from './stack';

export default abstract class TokenType {
    protected constructor(protected readonly _name: string, private readonly _regex: RegExp) {

    }

    public match(value: string): string | null {
        const match = value.match(this._regex);
        return match ? match[0] : null;
    }

    public abstract execute(stack: Stack): void;
}
