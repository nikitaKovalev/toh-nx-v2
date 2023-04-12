import {Domain} from '../../models/domain';
import {Scope} from '../../models/scope';
import {Type} from '../../models/type';

export interface FeatureGeneratorSchema {
    name: string;
    tags?: string;
    directory?: string;
    importPath?: string;
    scope: Scope;
    domain: Domain;
    type: Type['feature'];
}
