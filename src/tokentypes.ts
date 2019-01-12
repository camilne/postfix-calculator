import Clear from './commands/clear';
import NoOp from './commands/noop';
import OpAdd from './commands/opadd';
import OpDiv from './commands/opdiv';
import OpMul from './commands/opmul';
import OpSub from './commands/opsub';
import TokenType from './tokentype';

export default class TokenTypes {
    public static readonly VALUES = new Array<TokenType>();
    public static readonly NUMBER = new NoOp('number', /^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?$/);
    public static readonly OP_ADD = new OpAdd();
    public static readonly OP_SUB = new OpSub();
    public static readonly OP_MUL = new OpMul();
    public static readonly OP_DIV = new OpDiv();
    public static readonly CLEAR  = new Clear();
}

TokenTypes.VALUES.push(TokenTypes.NUMBER);
TokenTypes.VALUES.push(TokenTypes.OP_ADD);
TokenTypes.VALUES.push(TokenTypes.OP_SUB);
TokenTypes.VALUES.push(TokenTypes.OP_MUL);
TokenTypes.VALUES.push(TokenTypes.OP_DIV);
TokenTypes.VALUES.push(TokenTypes.CLEAR);
