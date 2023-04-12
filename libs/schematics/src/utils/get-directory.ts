import {BaseSchema} from '../models/base-schema';
import {Type} from '../models/type';

export const getDirectory = ({
    domain,
    scope,
    type,
}: BaseSchema & {type: Type}): string => {
    return domain !== 'none'
        ? `${scope}/${domain}/${type}`
        : `${scope}/${type}`;
};
