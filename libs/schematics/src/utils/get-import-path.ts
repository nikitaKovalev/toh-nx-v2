import {BaseSchema} from '../models/base-schema';

export const getImportPath = (
    alias: string,
    {name, directory}: BaseSchema
): string => {
    return `@${alias}/${directory}/${name}`;
};
