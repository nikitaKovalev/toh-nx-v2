import {Domain} from './domain';
import {Scope} from './scope';
import {Type} from './type';

export interface BaseSchema {
    name: string;
    tags?: string;
    directory?: string;
    importPath?: string;
    scope: Scope;
    domain: Domain;
}
