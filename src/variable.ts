export default class Variable {
    public static resolve(value: string, variables: Map<string, Variable>): number | undefined {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            return numValue;
        }

        const variable = variables.get(value);
        if (variable !== undefined) {
            return variable.value;
        }

        console.error(`unknown identifier ${value}`);
        return undefined;
    }

    constructor(private readonly _name: string, private _value: number) {

    }

    public get name(): string {
        return this._name;
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
    }

}
