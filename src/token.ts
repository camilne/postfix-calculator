import TokenType from './tokentype';

export default class Token {
    constructor(private _type: TokenType, private _value: string) {}

    public get type(): TokenType {
        return this._type;
    }

    public get value(): string {
        return this._value;
    }

    public toString = (): string => {
        return this._value.toString();
    }
}
