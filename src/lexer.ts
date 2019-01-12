import Token from './token';
import TokenTypes from './tokentypes';

export default class Lexer {
    public static tokenize(stream: string): Token[] {
        const tokens = new Array<Token>();

        stream.split(/\s+/).forEach((item: string) => {
            for (const type of TokenTypes.VALUES) {
                const match = type.match(item);
                if (match) {
                    tokens.push(new Token(type, match));
                }
            }
        });

        return tokens;
    }
}
