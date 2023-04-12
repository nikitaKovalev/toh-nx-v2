import {
    generateFiles,
    getWorkspaceLayout,
    names,
    offsetFromRoot,
    Tree,
} from '@nrwl/devkit';
import {libraryGenerator} from '@nrwl/workspace';
import * as path from 'path';

import {FeatureGeneratorSchema} from './schema';

interface NormalizedSchema extends FeatureGeneratorSchema {
    projectName: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: string[];
}

function normalizeOptions(
    tree: Tree,
    options: FeatureGeneratorSchema
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

export default async function (tree: Tree, options: FeatureGeneratorSchema) {
    const directory =
        options.domain !== 'none'
            ? `${options.scope}/${options.domain}/${options.type}`
            : `${options.scope}/${options.type}`;

    options.tags = `scope:${options.scope},domain:${options.domain},type:${options.type}`;
    options.directory = directory;
    options.importPath = `@page/${options.directory}/${options.name}`;

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
