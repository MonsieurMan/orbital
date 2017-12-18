import { CLI, Command, Executable } from '@orbital/core';

import { CommandWithBadDecorator } from '../commands/command-with-bad-param';
import { K } from '../class';

@Command({
    name: 'alpha',
    alias: ['a', 'b'],
})
export class Alpha {
    execute() { }
}

@Command({
    name: 'alpha',
    alias: ['e', 'c'],
})
export class Beta {
    execute() { }
}


@CLI({
    name: 'test-cli',
    commands: [
        Alpha,
        Beta
    ]
})
export class MultipleNames { }
