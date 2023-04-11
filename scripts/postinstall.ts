import {execSync} from 'child_process';

(function main(): void {
    execSync(
        `
        husky install || echo 'skip error'
        husky set .husky/pre-commit "npx lint-staged" || echo 'skip error'
        husky set .husky/commit-msg "npx commitlint --edit $1" || echo 'skip error'
        `,
        {stdio: `inherit`}
    );
})();
