import {BaseSchema} from '../models/base-schema';
import {Type} from '../models/type';

export const getDirectory = ({
    domain,
    scope,
    type,
    singleFile,
}: BaseSchema & {type: Type}): string => {
    const fallbackType = singleFile ? `` : `/${type}`;

    return domain !== 'none'
        ? `${scope}/${domain}${fallbackType}`
        : `${scope}${fallbackType}`;
};
