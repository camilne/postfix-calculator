import Clear from './commands/clear';
import Def from './commands/def';
import NoOp from './commands/noop';
import OpAdd from './commands/opadd';
import OpDiv from './commands/opdiv';
import OpMod from './commands/opmod';
import OpMul from './commands/opmul';
import OpSub from './commands/opsub';
import Pop from './commands/pop';
import TokenType from './tokentype';

export default class TokenTypes {
    public static readonly VALUES = new Array<TokenType>();
    // NOTE: These need to be defined in the order they should be matched.
    public static readonly DEF    = TokenTypes.c(Def);
    public static readonly OP_ADD = TokenTypes.c(OpAdd);
    public static readonly OP_SUB = TokenTypes.c(OpSub);
    public static readonly OP_MUL = TokenTypes.c(OpMul);
    public static readonly OP_DIV = TokenTypes.c(OpDiv);
    public static readonly OP_MOD = TokenTypes.c(OpMod);
    public static readonly CLEAR  = TokenTypes.c(Clear);
    public static readonly POP    = TokenTypes.c(Pop);
    public static readonly NUMBER = TokenTypes.c(NoOp, 'number', /^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?$/);
    public static readonly VARIABLE = TokenTypes.c(NoOp, 'identifier', /^[a-zA-Z_]\w*$/);

    /**
     * Create an instance of the TokenType and register it to the list of types.
     * @param type The type to construct.
     * @param name The name of the token type.
     * @param regex The regular expression to match.
     */
    private static c<T extends TokenType>(type: new () => T): T;
    private static c<T extends TokenType>(type: new (name: string, regex: RegExp) => T, name: string, regex: RegExp): T;
    private static c<T extends TokenType>(type: new (name?: string, regex?: RegExp) => T,
                                          name?: string, regex?: RegExp): T {
        let result: T;
        if (name && regex) {
            result = new type(name, regex);
        } else {
            result = new type();
        }
        TokenTypes.VALUES.push(result);
        return result;
    }
}
