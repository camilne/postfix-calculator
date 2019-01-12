import Token from './token';
import TokenTypes from './tokentypes';

export default class Lexer {
    public static tokenize(stream: string): Token[] {
        const tokens = new Array<Token>();

        stream.split(/\s+/).forEach((item: string, index: number) => {
            let found = false;
            for (const type of TokenTypes.VALUES) {
                const match = type.match(item);
                if (match) {
                    tokens.push(new Token(type, match));
                    found = true;
                    break;
                }
            }

            if (!found) {
                console.error(`unrecognized token: '${item}' at position ${index}`);
                return [];
            }
        });

        return tokens;
    }
}
