import * as readline from 'readline';

type Func = (line: string) => void;
export default class Prompt {
    private readonly _rl: readline.Interface;

    constructor(private readonly _func: Func) {
        this._rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '=> ',
        });

        this._rl.on('line', (line: string) => this.process(line))
            .on('close', () => this.close());
    }

    public run(): void {
        this._rl.prompt();
    }

    private process(line: string): void {
        this._func(line.trim());
        this._rl.prompt();
    }

    private close(): void {
        console.log();
        process.exit(0);
    }
}
