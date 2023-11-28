import remarkHeadingId from "remark-heading-id";
import remarkValidateLinks from 'remark-validate-links';
import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';
import remarkLintNoDeadUrls from "remark-lint-no-dead-urls";

const remarkConfig = {
	plugins: [
		remarkHeadingId,
		remarkValidateLinks,
		remarkFrontmatter,
		[
			remarkLintFrontmatterSchema,
			{
				schemas: {
					/* One schema for many files */
					'./.github/linters/metadata.schema.yml': [
						/* Support glob patterns ———v */
						'./src/pages/**/*.md, !src/pages/graphql/schema/**'
					],
				},
			},
		],
		[
			remarkLintNoDeadUrls,
			{
				skipUrlPatterns: [
					'https://www.php.net'
				]
			}
		],
	],
};
export default remarkConfig;
