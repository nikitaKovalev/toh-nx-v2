import {BaseSchema} from '../../models/base-schema';
import {Type} from '../../models/type';

export interface UiGeneratorSchema extends BaseSchema {
    type: Type['ui'];
}
