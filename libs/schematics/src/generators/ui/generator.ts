import {
    generateFiles,
    getWorkspaceLayout,
    names,
    offsetFromRoot,
    Tree,
} from '@nrwl/devkit';
import {libraryGenerator} from '@nrwl/workspace';
import * as path from 'path';

import {getDirectory, getImportPath, getName, getTags} from '../../util';
import {UiGeneratorSchema} from './schema';

interface NormalizedSchema extends UiGeneratorSchema {
    projectName: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: string[];
}

function normalizeOptions(
    tree: Tree,
    options: UiGeneratorSchema
): NormalizedSchema {
    const name = names(options.name).fileName;
    const projectDirectory = options.directory
        ? `${names(options.directory).fileName}/${name}`
        : name;
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const projectRoot = `${
        getWorkspaceLayout(tree).libsDir
    }/${projectDirectory}`;
    const parsedTags = options.tags
        ? options.tags.split(',').map(s => s.trim())
        : [];

    return {
        ...options,
        projectName,
        projectRoot,
        projectDirectory,
        parsedTags,
    };
}

export async function uiGenerator(tree: Tree, options: UiGeneratorSchema) {
    options.name = getName(options);
    options.tags = getTags(options);
    options.directory = getDirectory(options);
    options.importPath = getImportPath('ui', options);

    const normalizedOptions = normalizeOptions(tree, options);

    await libraryGenerator(tree, options);

    const templateOptions = {
        ...options,
        ...names(options.name),
        offsetFromRoot: offsetFromRoot(normalizedOptions.projectRoot),
        template: '',
    };

    generateFiles(
        tree,
        path.join(__dirname, 'files'),
        normalizedOptions.projectRoot,
        templateOptions
    );
}

export default uiGenerator;
