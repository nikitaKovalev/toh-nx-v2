import {BaseSchema} from '../models/base-schema';
import {Type} from '../models/type';

export const getTags = ({
    scope,
    domain,
    type,
}: BaseSchema & {type: Type}): string => {
    return `scope:${scope},domain:${domain},type:${type}`;
};
