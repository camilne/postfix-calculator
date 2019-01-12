import Lexer from './lexer';
import Prompt from './prompt';
import Runtime from './runtime';

const runtime = new Runtime();

const prompt = new Prompt((line: string): void => {
    const tokens = Lexer.tokenize(line);
    runtime.process(tokens);
    console.log(runtime.stack.toString());
});

prompt.run();
