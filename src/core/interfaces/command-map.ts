import { Executable } from './executable';

// TODO: Is a command map ?
export interface CommandMap {
    instance: Executable;
    name: string;
    alias: string[];
    // subcommands: CommandMapObject[];
    params: Array<{
        index: number;
        name?: string;
    }>;
    options: {
        [propName: string]: string | boolean;
    };
}
