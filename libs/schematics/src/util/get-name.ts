import {BaseSchema} from '../models/base-schema';
import {Type} from '../models/type';

export const getName = ({
    name,
    type,
    singleFile,
}: BaseSchema & {type: Type}): string => {
    return singleFile ? `${type}-${name}` : name;
};
