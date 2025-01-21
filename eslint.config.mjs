/* eslint max-lines: 0 */

import stylisticPlugin from '@stylistic/eslint-plugin'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import nodePlugin from 'eslint-plugin-n'

const config = [
	/*
	ESLINT META-PLUGIN
	==================
	> https://www.npmjs.com/package/eslint-plugin-eslint-plugin
	Explicitly follow the convention for the default rules!
	Here, `eslintPlugin.configs/['flat/recommended']` is
		the conventional way to enable recommneded rules.
	It will help lint ESLint plugins, like this file.
	*/
	eslintPlugin.configs['flat/recommended'],

	/*
	NODE PLUGIN
	===========
	> https://www.npmjs.com/package/eslint-plugin-n
	Most of the recommended node plugin convention is followed
		save for a few rules that were particularly bothersome.
	This will help lint node environments, like this file.
	*/
	nodePlugin.configs['flat/recommended'],

	/*
	IMPORT PLUGIN
	=============
	> https://www.npmjs.com/package/eslint-plugin-import
	The documentation for this one is a little outdated.
	However, the rules are the same, and followed to the T.
	*/
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,

	{
		languageOptions: {
			sourceType: 'module', // ESLint requires this!
			ecmaVersion: 'latest',
		},

		plugins: {
			'n': nodePlugin,
			'@stylistic': stylisticPlugin,
		},

		rules: {
			/*****************************************************
				Core ESLint Rules
			*****************************************************/
			// This rule can report false-positives.
			'array-callback-return': ['off'],

			'constructor-super': ['error'],
			'for-direction': ['error'],
			'getter-return': ['error'],
			'no-async-promise-executor': ['error'],

			// Sometimes its useful to have "await" in a loop.
			'no-await-in-loop': ['warn'],

			'no-class-assign': ['error'],
			'no-compare-neg-zero': ['error'],
			'no-cond-assign': ['error'],
			'no-const-assign': ['error'],
			'no-constant-binary-expression': ['error'],

			// It can be useful to use "while (true)" loops.
			'no-constant-condition': [
				'error',
				{checkLoops: false},
			],

			// Returning in a constructor can be intentional.
			'no-constructor-return': ['warn'],

			'no-control-regex': ['error'],
			'no-debugger': ['error'],
			'no-dupe-args': ['error'],
			'no-dupe-class-members': ['error'],
			'no-dupe-else-if': ['error'],
			'no-dupe-keys': ['error'],
			'no-duplicate-case': ['error'],

			// Disabled for the eslint-import-plugin rule.
			// See also, "import/no-duplicates".
			// "no-duplicate-imports": ["error"],

			'no-empty-character-class': ['error'],
			'no-empty-pattern': ['error'],
			'no-ex-assign': ['error'],
			'no-fallthrough': ['error'],
			'no-func-assign': ['error'],
			'no-import-assign': ['error'],

			// Cleans out certain hoisted patterns.
			'no-inner-declarations': [
				'error',
				'both',
			],

			'no-invalid-regexp': ['error'],
			'no-irregular-whitespace': ['error'],
			'no-loss-of-precision': ['error'],
			'no-misleading-character-class': ['error'],
			'no-new-native-nonconstructor': ['error'],
			'no-obj-calls': ['error'],
			'no-promise-executor-return': ['error'],
			'no-prototype-builtins': ['error'],
			'no-self-assign': ['error'],
			'no-self-compare': ['error'],
			'no-setter-return': ['error'],
			'no-sparse-arrays': ['error'],
			'no-template-curly-in-string': ['error'],
			'no-this-before-super': ['error'],

			// Prevent using global vars without tagging them.
			'no-undef': [
				'error',
				{typeof: true},
			],

			'no-unexpected-multiline': ['error'],
			'no-unmodified-loop-condition': ['error'],
			'no-unreachable': ['error'],
			'no-unreachable-loop': ['error'],
			'no-unsafe-finally': ['error'],

			// Check for unclear negation
			//  when using relational operators.
			'no-unsafe-negation': [
				'error',
				{enforceForOrderingRelations: true},
			],

			// Disallow some ambiguous math resulting in "NaN".
			'no-unsafe-optional-chaining': [
				'error',
				{disallowArithmeticOperators: true},
			],

			'no-unused-private-class-members': ['error'],

			// Allow omission of properties from a spread object.
			// Also, sometimes its good to explicitly name args,
			//  even if they remain unused in the function's body.
			'no-unused-vars': [
				'error',
				{args: 'none', ignoreRestSiblings: true},
			],

			'no-use-before-define': ['error'],
			'no-useless-backreference': ['error'],
			'require-atomic-updates': ['error'],
			'use-isnan': ['error'],
			'valid-typeof': ['error'],

			/* RULES FOR ALTERNATE SUGGESTIONS */
			'accessor-pairs': ['error'],
			'arrow-body-style': ['error'],
			'block-scoped-var': ['error'],
			'camelcase': ['error'],

			// This one was excessively annoying!
			'capitalized-comments': ['off'],

			'class-methods-use-this': ['error'],
			'complexity': ['error'],
			'consistent-return': ['error'],
			'consistent-this': ['error'],

			// Consistently newline expressions etc.
			'curly': [
				'error',
				'multi-or-nest',
				'consistent',
			],

			// Don't mess with defaults in switch cases.
			'default-case': ['off'],
			'default-case-last': ['off'],

			'default-param-last': ['error'],
			'dot-notation': ['error'],

			// Use triple equals,
			//  except when loosely comparing null.
			'eqeqeq': [
				'error',
				'always',
				{null: 'ignore'},
			],

			'func-name-matching': ['error'],

			// Use "const x = function(){...}"
			'func-names': [
				'error',
				'never',
			],

			'func-style': ['error'],

			// Gets & Sets paired together?
			// TODO:
			// Test this one out.
			'grouped-accessor-pairs': [
				'error',
				'getBeforeSet',
			],

			'guard-for-in': ['error'],

			// No need to restrict variable names.
			'id-denylist': ['off'],

			'id-length': ['error'],

			// Already using camelCase. No need to configure here.
			'id-match': ['off'],

			// Allow for gated declarations "let x; if (y) x=4".
			'init-declarations': ['off'],

			// Consistent use of `??=`, `&&`, etc.
			'logical-assignment-operators': [
				'error',
				'always',
				{enforceForIfStatements: true},
			],

			// Enforce arbitrarily-set maxes of certain patterns.
			'max-classes-per-file': [
				'error',
				// Default 1
				{max: 1},
			],

			'max-depth': [
				'error',
				// Default 4
				{max: 6},
			],

			'max-lines': [
				'error',
				// Default 300
				{max: 300},
			],

			'max-lines-per-function': [
				'error',
				// Default 50
				{max: 60},
			],

			'max-nested-callbacks': [
				'error',
				// Default 10
				{max: 6},
			],

			'max-params': [
				'error',
				// Default 3
				{max: 6},
			],

			'max-statements': [
				'error',
				// Default 10
				{max: 30},
			],

			'new-cap': ['error'],
			'no-alert': ['error'],
			'no-array-constructor': ['error'],
			'no-bitwise': ['error'],
			'no-caller': ['error'],
			'no-case-declarations': ['error'],

			// Keep some console methods, but log is evil!
			'no-console': [
				'error',
				{
					allow: [
						'clear',
						'info',
						'warn',
						'error',
						'table',
					],
				},
			],

			'no-continue': ['error'],
			'no-delete-var': ['error'],

			// This doesn't seem helpful.
			'no-div-regex': ['off'],
			'no-else-return': ['off'],

			'no-empty': ['error'],
			'no-empty-function': ['error'],
			'no-empty-static-block': ['error'],

			// Use the "eqeqeq" rule instead.
			'no-eq-null': ['off'],

			'no-eval': ['error'],
			'no-extend-native': ['error'],
			'no-extra-bind': ['error'],
			'no-extra-boolean-cast': ['error'],
			'no-extra-label': ['error'],
			'no-global-assign': ['error'],

			// Shorthand boolean coercion is fine.
			// Ex: "if (!!someString) {...}"
			'no-implicit-coercion': [
				'error',
				{boolean: false},
			],

			'no-implicit-globals': ['error'],
			'no-implied-eval': ['error'],

			// This isn't a rule we support.
			'no-inline-comments': ['off'],

			'no-invalid-this': ['error'],
			'no-iterator': ['error'],
			'no-label-var': ['error'],

			// Labels can be used to break parent statements.
			'no-labels': ['off'],

			'no-lone-blocks': ['error'],
			'no-lonely-if': ['error'],
			'no-loop-func': ['error'],

			// This turned out to be supremely annoying.
			'no-magic-numbers': ['off'],

			'no-multi-assign': ['error'],
			'no-multi-str': ['error'],

			// Disable for things like
			//  `if (variable != null) {...}`
			// TODO:
			// Is this worth a warning?
			'no-negated-condition': ['off'],

			// I like nested ternaries...
			// TODO:
			// Do I like them enough, though?
			'no-nested-ternary': ['off'],

			// We use new.
			'no-new': ['off'],

			'no-new-func': ['error'],
			'no-new-wrappers': ['error'],
			'no-nonoctal-decimal-escape': ['error'],
			'no-object-constructor': ['error'],
			'no-octal': ['error'],
			'no-octal-escape': ['error'],

			// Turns out this can help keep naming cleaner.
			'no-param-reassign': ['off'],

			'no-plusplus': ['error'],
			'no-proto': ['error'],
			'no-redeclare': ['error'],
			'no-regex-spaces': ['error'],

			// There's nothing to restrict here.
			'no-restricted-exports': ['off'],
			'no-restricted-globals': ['off'],
			'no-restricted-imports': ['off'],
			'no-restricted-properties': ['off'],
			'no-restricted-syntax': ['off'],

			'no-return-assign': ['error'],
			'no-script-url': ['error'],
			'no-sequences': ['error'],

			// Turns out shadowing can help with readability.
			// With this, we'd use longer, more arbitrary names.
			'no-shadow': ['off'],

			'no-shadow-restricted-names': ['error'],

			// Ternaries are nice.
			'no-ternary': ['off'],

			'no-throw-literal': ['error'],

			// These rules are either uneccessary, or redundant.
			'no-undef-init': ['off'],
			'no-undefined': ['off'],
			'no-underscore-dangle': ['off'],

			'no-unneeded-ternary': ['error'],

			// Allow these expressions which cause side-effects.
			'no-unused-expressions': [
				'error',
				{allowShortCircuit: true, allowTernary: true},
			],

			'no-unused-labels': ['error'],
			'no-useless-assignment': ['error'],
			'no-useless-call': ['error'],
			'no-useless-catch': ['error'],
			'no-useless-computed-key': ['error'],
			'no-useless-concat': ['error'],
			'no-useless-constructor': ['error'],
			'no-useless-escape': ['error'],
			'no-useless-rename': ['error'],
			'no-useless-return': ['error'],
			'no-var': ['error'],

			// We use void to indicate
			//  intentionally unawaited async calls.
			'no-void': ['off'],

			// Useless.
			'no-warning-comments': ['off'],

			'no-with': ['error'],

			// The record object should be consistent!
			'object-shorthand': [
				'error',
				'consistent-as-needed',
			],

			// Simpler to read.
			'one-var': [
				'error',
				'never',
			],

			'operator-assignment': ['error'],
			'prefer-arrow-callback': ['error'],
			'prefer-const': ['error'],

			// If we want to typify a var (as in TypeScript),
			//  we'd have to ignore this rule first.
			// TODO:
			// Could be worth warning.
			'prefer-destructuring': ['off'],

			'prefer-exponentiation-operator': ['error'],
			'prefer-named-capture-group': ['error'],
			'prefer-numeric-literals': ['error'],
			'prefer-object-has-own': ['error'],
			'prefer-object-spread': ['error'],
			'prefer-promise-reject-errors': ['error'],
			'prefer-regex-literals': ['error'],
			'prefer-rest-params': ['error'],
			'prefer-spread': ['error'],
			'prefer-template': ['error'],

			// Don't complicate parseInt unless its needed.
			'radix': [
				'error',
				'as-needed',
			],

			// This is counter-intuitive when async functions
			//  are used as helpers that throw errors.
			// TODO:
			// Find an alternative that requires await OR throw.
			'require-await': ['off'],

			'require-unicode-regexp': ['error'],
			'require-yield': ['error'],

			// We use the plugin for this rule.
			// See also, "import/order".
			// "sort-imports": ["error"],

			// Its better if related values stay together.
			'sort-keys': ['off'],
			'sort-vars': ['off'],

			'strict': ['error'],
			'symbol-description': ['error'],
			'unicode-bom': ['error'],
			'vars-on-top': ['error'],
			'yoda': ['error'],

			/*****************************************************
				ESLint Meta-Plugin Rules
			*****************************************************/
			// No additional rules are set for the core plugin!

			/*****************************************************
				ESLint Node Plugin Rules
			*****************************************************/
			// This lints node import in a nice way.
			// For example: `import fs from 'node:fs'`.
			'n/prefer-node-protocol': ['error'],

			/*****************************************************
				ESLint Import Plugin Rules
			*****************************************************/
			/* STATIC ANALYSIS */
			'import/no-absolute-path': ['error'],
			'import/no-cycle': ['error'],
			'import/no-dynamic-require': ['error'],

			// QUESTION:
			// Have some internal modules that are off-limits?
			// Maybe you're refactoring or have distribution dirs?
			// This rule can forbid certain internal import paths.
			'import/no-internal-modules': ['off'],

			// Usually it is better to *prefer* relative packages.
			'import/no-relative-packages': ['off'],

			// QUESTION:
			// Do you have a confusing graph-like codebase?
			// To refactor/simplify it, consider using this rule.
			'import/no-relative-parent-imports': ['off'],

			// QUESTION:
			// Do you have incompatible code in your codebase?
			// If you do, maybe it would be worth using this?
			'import/no-restricted-paths': ['off'],

			'import/no-self-import': ['error'],
			'import/no-useless-path-segments': ['error'],
			'import/no-webpack-loader-syntax': ['error'],

			/* HELPFUL WARNINGS */
			'import/no-deprecated': ['error'],
			'import/no-empty-named-blocks': ['error'],
			'import/no-extraneous-dependencies': ['error'],
			'import/no-mutable-exports': ['error'],
			'import/no-unused-modules': ['error'],

			/* MODULE SYSTEMS */
			'import/no-amd': ['error'],
			'import/no-commonjs': ['error'],
			'import/no-import-module-exports': ['error'],

			// QUESTION:
			// Are you coding for a web project?
			// If so, you will want to enable this.
			'import/no-nodejs-modules': ['off'],

			'import/unambiguous': ['error'],

			/* STYLE GUIDE */
			'import/consistent-type-specifier-style': ['error'],

			// Added a custom chunkname format to explicitly
			//  allow for dynamic chunknames.
			'import/dynamic-import-chunkname': [
				'error',
				{
					webpackChunknameFormat:
						'\\[?[a-zA-Z0-57-9-/_]+\\]?',
				},
			],

			'import/exports-last': ['error'],

			// Always provide an extension, except for packages.
			// WARN:
			// Right now, due to how TS works with ESM,
			//  any ".ts" files import with the ".js" extension.
			// That reports an error...
			// My solution is to not have an extension at all,
			//  but honestly, this is totally acceptable!
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					ts: 'ignore',
					tsx: 'ignore',
					mts: 'ignore',
				},
			],

			'import/first': ['error'],
			'import/group-exports': ['error'],

			// Don't limit the number of dependencies.
			'import/max-dependencies': ['off'],

			// WARN:
			// This reports double-newlines after imports.
			// Our rule for exports ignores double-newlines.
			'import/newline-after-import': ['error'],

			'import/no-anonymous-default-export': ['error'],

			// Default & Named exports are both fine.
			'import/no-default-export': ['off'],

			// Have to disable base ESLint rule here.
			'no-duplicate-imports': ['off'],
			'import/no-duplicates': ['error'],

			'import/no-named-default': ['error'],

			// Default & Named exports are both fine.
			'import/no-named-export': ['off'],

			'import/no-namespace': ['error'],

			// In JSX, we can import css for styling
			//  without assigning anything.
			'import/no-unassigned-import': [
				'error',
				{allow: ['**/*.css']},
			],

			// Now this is what we came for!
			// Have to disable base ESLint rule here.
			'sort-imports': ['off'],
			'import/order': [
				'error',
				{
					alphabetize: {order: 'asc'},
					warnOnUnassignedImports: true,
					groups: [
						'builtin',
						'external',
						['internal', 'parent', 'sibling', 'index'],
						'object',
						'type',
					],
				},
			],

			// Default & Named exports are both fine.
			'import/prefer-default-export': ['off'],

			/*****************************************************
				ESLint Stylistic Plugin Rules
			*****************************************************/
			// Seperate brackets if there are any newlines.
			'@stylistic/array-bracket-newline': [
				'error',
				{multiline: true},
			],

			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			'@stylistic/array-bracket-spacing': [
				'error',
				'never',
			],

			// Keep newlines consistent on a per-array basis.
			'@stylistic/array-element-newline': [
				'error',
				'consistent',
			],

			'@stylistic/arrow-parens': ['error'],
			'@stylistic/arrow-spacing': ['error'],
			'@stylistic/block-spacing': ['error'],

			// Stroustrup is the best brace style!!!
			'@stylistic/brace-style': [
				'error',
				'stroustrup',
			],

			// This is best for diff churn.
			'@stylistic/comma-dangle': [
				'error',
				'always-multiline',
			],

			'@stylistic/comma-spacing': ['error'],
			'@stylistic/comma-style': ['error'],

			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			'@stylistic/computed-property-spacing': [
				'error',
				'never',
			],

			'@stylistic/curly-newline': [
				'error',
				{multiline: true},
			],

			// Start newlines with operators where applicable.
			'@stylistic/dot-location': [
				'error',
				'property',
			],

			'@stylistic/eol-last': ['error'],
			'@stylistic/func-call-spacing': ['error'],

			'@stylistic/function-call-argument-newline': [
				'error',
				'consistent',
			],

			'@stylistic/function-call-spacing': ['error'],

			// Seperate parens if there are any newlines.
			'@stylistic/function-paren-newline': [
				'error',
				'multiline-arguments',
			],

			// Space it like you would "async"
			'@stylistic/generator-star-spacing': [
				'error',
				'both',
			],

			'@stylistic/implicit-arrow-linebreak': ['error'],

			// We use tabs! And, don't indent member expressions!
			'@stylistic/indent': [
				'error',
				'tab',
				{SwitchCase: 1, MemberExpression: 0},
			],

			// We require 0 extra spaces for binary ops!
			// NOTE: Check if this works as expected.....
			'@stylistic/indent-binary-ops': ['error', 0],

			'@stylistic/jsx-child-element-spacing': ['off'],

			'@stylistic/jsx-closing-bracket-location': ['error'],
			'@stylistic/jsx-closing-tag-location': ['error'],

			// The docs recommend this configuration.
			'@stylistic/jsx-curly-brace-presence': [
				'error',
				{
					props: 'never',
					children: 'never',
					propElementValues: 'always',
				},
			],

			'@stylistic/jsx-curly-newline': ['error'],
			'@stylistic/jsx-curly-spacing': ['error'],

			// All binary operators require spacing, inc. equals.
			'@stylistic/jsx-equals-spacing': ['error', 'always'],

			// Props should only be on one line if the closing
			//   bracket is also on the same line.
			'@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],

			'@stylistic/jsx-function-call-newline': ['error'],
			'@stylistic/jsx-indent': ['error', 'tab'], // We use tabs.
			'@stylistic/jsx-indent-props': ['error', 'tab'], // We use tabs.
			'@stylistic/jsx-max-props-per-line': ['off'], // Ruled by line length.

			'@stylistic/jsx-newline': ['warn'], // TODO: Unknown if this is useful!!!
			'@stylistic/jsx-one-expression-per-line': ['warn'], // TODO: Determine!!!

			'@stylistic/jsx-pascal-case': ['error'],
			'@stylistic/jsx-props-no-multi-spaces': ['error'],

			// Prefer single-quotes wherever possible!
			'@stylistic/jsx-quotes': [
				'error',
				'prefer-single',
			],

			'@stylistic/jsx-self-closing-comp': ['error'],

			// TODO: This needs specific configuration.
			'@stylistic/jsx-sort-props': ['off'],

			// TODO: This needs specific configuration.
			'@stylistic/jsx-tag-spacing': [
				'error', {
					closingSlash: 'never',
					beforeSelfClosing: 'always',
					afterOpening: 'never',
					beforeClosing: 'never',
				},
			],

			// Newline parens makes the code very clean looking!
			'@stylistic/jsx-wrap-multilines': [
				'error',
				{
					declaration: 'parens-new-line',
					assignment: 'parens-new-line',
					return: 'parens-new-line',
					arrow: 'parens-new-line',
					condition: 'ignore',
					logical: 'ignore',
					prop: 'ignore',
					propertyValue: 'ignore',
				},
			],

			'@stylistic/key-spacing': ['error'],
			'@stylistic/keyword-spacing': ['error'],

			// Nope. We don't dictate how comments should work.
			'@stylistic/line-comment-position': ['off'],

			'@stylistic/linebreak-style': ['error'],

			// Nope again.
			'@stylistic/lines-around-comment': ['off'],

			'@stylistic/lines-between-class-members': ['error'],

			// The max is 90, but its also recommended to keep
			//  line-length below 60 if its feasible to do so.
			'@stylistic/max-len': [
				'error',
				{code: 90, tabWidth: 2},
			],

			'@stylistic/max-statements-per-line': ['error'],

			// Types and Interfaces are delimited by commas!!!
			'@stylistic/member-delimiter-style': [
				'error',
				{
					multiline: {
						delimiter: 'comma',
						requireLast: true,
					},
					singleline: {
						delimiter: 'comma',
						requireLast: false,
					},
					multilineDetection: 'brackets',
				},
			],

			// No comment style nits here.
			// The options for comments really aren't attractive.
			'@stylistic/multiline-comment-style': ['off'],

			// Allow multiline ternaries if there's newlines.
			'@stylistic/multiline-ternary': [
				'error',
				'always-multiline',
			],

			'@stylistic/new-parens': ['error'],
			'@stylistic/newline-per-chained-call': ['error'],
			'@stylistic/no-confusing-arrow': ['error'],

			// Sadly, this doesn't provide the config I'd like.
			// It affects implicit returns in arrow functions.
			// TODO:
			// Get alternative config options for this need.
			'@stylistic/no-extra-parens': ['off'],

			'@stylistic/no-extra-semi': ['error'],
			'@stylistic/no-floating-decimal': ['error'],
			'@stylistic/no-mixed-operators': ['error'],
			'@stylistic/no-mixed-spaces-and-tabs': ['error'],
			'@stylistic/no-multi-spaces': ['error'],

			// Double-newlines are good for seperating stuff.
			'@stylistic/no-multiple-empty-lines': [
				'error',
				{
					max: 2,
					maxBOF: 0,
					maxEOF: 1,
				},
			],

			// Shouldn't mix tabs with inner-code.
			// Just use the character exclusively as indentation.
			// At times, this triggers in comments - which is OK.
			'@stylistic/no-tabs': [
				'warn',
				{allowIndentationTabs: true},
			],

			'@stylistic/no-trailing-spaces': ['error'],
			'@stylistic/no-whitespace-before-property': ['error'],
			'@stylistic/nonblock-statement-body-position': ['error'],

			// Keep newlines consistent on a per-object basis.
			'@stylistic/object-curly-newline': [
				'error',
				{multiline: true},
			],

			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			'@stylistic/object-curly-spacing': [
				'error',
				'never',
			],

			// Keep multiline properties on own lines.
			'@stylistic/object-property-newline': [
				'error',
				{allowAllPropertiesOnSameLine: true},
			],

			// Realistically, this shouldn't be allowed at all!
			// Should entirely disallow `let a, b, c` and such.
			'@stylistic/one-var-declaration-per-line': [
				'error',
				'always',
			],

			// Start lines with operators where applicable.
			'@stylistic/operator-linebreak': [
				'error',
				'before',
			],

			// Gross...
			'@stylistic/padded-blocks': [
				'error',
				'never',
			],

			// Always a space before the first export.
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					prev: '*',
					next: 'export',
					blankLine: 'always',
				},
				{
					prev: 'export',
					next: 'export',
					blankLine: 'any',
				},
			],

			// NOTICE
			// Props shouldn't have quotes if not needed.
			// They should be consistent if they are, however.
			'@stylistic/quote-props': [
				'error',
				'consistent-as-needed',
			],

			// Single Quotes FTW!
			'@stylistic/quotes': [
				'error',
				'single',
			],

			'@stylistic/rest-spread-spacing': ['error'],

			// Ew... No semis!
			'@stylistic/semi': [
				'error',
				'never',
				{beforeStatementContinuationChars: 'never'},
			],

			'@stylistic/semi-spacing': ['error'],
			'@stylistic/semi-style': ['error'],
			'@stylistic/space-before-blocks': ['error'],
			'@stylistic/space-before-function-paren': ['error'],

			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			'@stylistic/space-in-parens': [
				'error',
				'never',
				{exceptions: ['empty']},
			],

			'@stylistic/space-infix-ops': ['error'],
			'@stylistic/space-unary-ops': ['error'],

			// Should have spaced block comments as well.
			// Has exceptions for js-doc and ts-directives.
			// TODO:
			// Test if this is really what I want?
			'@stylistic/spaced-comment': [
				'error',
				'always',
				{
					line: {markers: ['/']},
					block: {
						markers: ['*'],
						exceptions: ['*'],
						balanced: true,
					},
				},
			],

			'@stylistic/switch-colon-spacing': ['error'],

			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			'@stylistic/template-curly-spacing': [
				'error',
				'never',
			],

			// Tags are like "gql`Query {...`", with no spaces.
			'@stylistic/template-tag-spacing': [
				'error',
				'never',
			],

			'@stylistic/type-annotation-spacing': ['error'],
			'@stylistic/type-generic-spacing': ['error'],
			'@stylistic/type-named-tuple-spacing': ['error'],

			// Inside option gives better readability.
			'@stylistic/wrap-iife': [
				'error',
				'inside',
			],

			'@stylistic/wrap-regex': ['error'],

			// Consistent with "generator-star-spacing"
			'@stylistic/yield-star-spacing': [
				'error',
				'both',
			],
		},
	},
]

export default config
