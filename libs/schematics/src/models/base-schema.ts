import {Domain} from './domain';
import {Scope} from './scope';

export interface BaseSchema {
    name: string;
    tags?: string;
    directory?: string;
    importPath?: string;
    scope: Scope;
    domain: Domain;
    singleFile: boolean;
}
