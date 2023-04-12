import {BaseSchema} from '../../models/base-schema';
import {Type} from '../../models/type';

export interface FeatureGeneratorSchema extends BaseSchema {
    type: Type['feature'];
}
