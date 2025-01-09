import _import from "eslint-plugin-import";
import {fixupPluginRules} from "@eslint/compat";

const config = [
	{
		plugins: {
			import: fixupPluginRules(_import),
		},

		rules: {
			/*****************************************************
			** BASE ESLINT RULES                                **
			*****************************************************/

			/* FIXES FOR POSSIBLE PROBLEMS */
			// NOTE:
			// This rule can report false-positives.
			"array-callback-return": ["off"],

			"constructor-super": ["error"],
			"for-direction": ["error"],
			"getter-return": ["error"],
			"no-async-promise-executor": ["error"],

			// NOTE:
			// Sometimes its useful to have "await" in a loop.
			"no-await-in-loop": ["warn"],

			"no-class-assign": ["error"],
			"no-compare-neg-zero": ["error"],
			"no-cond-assign": ["error"],
			"no-const-assign": ["error"],
			"no-constant-binary-expression": ["error"],

			// NOTE:
			// It can be useful to use "while (true)" loops.
			"no-constant-condition": [
			"error",
				{"checkLoops": false}
			],

			// NOTE:
			// Returning in a constructor can be intentional.
			"no-constructor-return": ["warn"],

			"no-control-regex": ["error"],
			"no-debugger": ["error"],
			"no-dupe-args": ["error"],
			"no-dupe-class-members": ["error"],
			"no-dupe-else-if": ["error"],
			"no-dupe-keys": ["error"],
			"no-duplicate-case": ["error"],

			// NOTE:
			// Disabled for the eslint-import-plugin rule.
			// See also, "import/no-duplicates".
			// "no-duplicate-imports": ["error"],

			"no-empty-character-class": ["error"],
			"no-empty-pattern": ["error"],
			"no-ex-assign": ["error"],
			"no-fallthrough": ["error"],
			"no-func-assign": ["error"],
			"no-import-assign": ["error"],

			// NOTE:
			// Cleans out certain hoisted patterns.
			"no-inner-declarations": [
				"error",
				"both"
			],

			"no-invalid-regexp": ["error"],
			"no-irregular-whitespace": ["error"],
			"no-loss-of-precision": ["error"],
			"no-misleading-character-class": ["error"],
			"no-new-symbol": ["error"],
			"no-obj-calls": ["error"],
			"no-promise-executor-return": ["error"],
			"no-prototype-builtins": ["error"],
			"no-self-assign": ["error"],
			"no-self-compare": ["error"],
			"no-setter-return": ["error"],
			"no-sparse-arrays": ["error"],
			"no-template-curly-in-string": ["error"],
			"no-this-before-super": ["error"],

			// NOTE:
			// Prevent using global vars without tagging them.
			"no-undef": [
				"error",
				{"typeof": true}
			],

			"no-unexpected-multiline": ["error"],
			"no-unmodified-loop-condition": ["error"],
			"no-unreachable": ["error"],
			"no-unreachable-loop": ["error"],
			"no-unsafe-finally": ["error"],

			// NOTE:
			// Check for unclear negation with relational operators.
			"no-unsafe-negation": [
				"error",
				{"enforceForOrderingRelations": true}
			],

			// NOTE:
			// Disallow some ambiguous math resulting in "NaN".
			"no-unsafe-optional-chaining": [
				"error",
				{"disallowArithmeticOperators": true}
			],

			"no-unused-private-class-members": ["error"],

			// NOTE:
			// Allow omission of properties from a spread object.
			// Also, sometimes its good to explicitly set expected args,
			// 	even if they remain unused in the function's body.
			"no-unused-vars": [
				"error",
				{"args": "none", "ignoreRestSiblings": true}
			],

			"no-use-before-define": ["error"],
			"no-useless-backreference": ["error"],
			"require-atomic-updates": ["error"],
			"use-isnan": ["error"],
			"valid-typeof": ["error"],

			/* RULES FOR ALTERNATE SUGGESTIONS */
			"accessor-pairs": ["error"],
			"arrow-body-style": ["error"],
			"block-scoped-var": ["error"],
			"camelcase": ["error"],

			// NOTE:
			// This one was excessively annoying!
			"capitalized-comments": ["off"],

			"class-methods-use-this": ["error"],
			"complexity": ["error"],
			"consistent-return": ["error"],
			"consistent-this": ["error"],

			// NOTE:
			// Consistently newline expressions etc.
			"curly": [
				"error",
				"multi-or-nest",
				"consistent"
			],

			// NOTE:
			// Don't mess with defaults in switch cases.
			"default-case": ["off"],
			"default-case-last": ["off"],

			"default-param-last": ["error"],
			"dot-notation": ["error"],

			// NOTE:
			// Use triple equals except when comparing null loosely.
			"eqeqeq": [
				"error",
				"always",
				{"null": "ignore"}
			],

			"func-name-matching": ["error"],

			// NOTE:
			// Use "const x = function(){...}"
			"func-names": [
				"error",
				"never"
			],

			"func-style": ["error"],

			// NOTE:
			// Gets & Sets paired together?
			// TODO:
			// Test this one out.
			"grouped-accessor-pairs": [
				"error",
				"getBeforeSet"
			],

			"guard-for-in": ["error"],

			// NOTE:
			// No need to restrict variable names.
			"id-denylist": ["off"],

			"id-length": ["error"],

			// NOTE:
			// Already using camelCase. No need to configure here.
			"id-match": ["off"],

			// NOTE:
			// Allow for gated declarations "let x; if (y) x=4".
			"init-declarations": ["off"],

			// NOTE:
			// Enforce arbitrarily-set maxes of certain patterns.
			"max-classes-per-file": [
				"error",
				// Default 1
				{"max": 1}
			],

			"max-depth": [
				"error",
				// Default 4
				{"max": 6}
			],

			"max-lines": [
				"error",
				// Default 300
				{"max": 300}
			],

			"max-lines-per-function": [
				"error",
				// Default 50
				{"max": 60}
			],

			"max-nested-callbacks": [
				"error",
				// Default 10
				{"max": 6}
			],

			"max-params": [
				"error",
				// Default 3
				{"max": 6}
			],

			"max-statements": [
				"error",
				// Default 10
				{"max": 30}
			],

			// NOTE:
			// These options for comments really aren't attractive.
			"multiline-comment-style": ["off"],

			"new-cap": ["error"],
			"no-alert": ["error"],
			"no-array-constructor": ["error"],
			"no-bitwise": ["error"],
			"no-caller": ["error"],
			"no-case-declarations": ["error"],

			// NOTE:
			// This marks parenthesis as "less confusing".
			"no-confusing-arrow": [
				"error",
				{"allowParens": true}
			],

			// NOTE:
			// Keep some console methods, but log is evil!
			"no-console": [
				"error",
				{"allow": ["clear", "info", "warn", "error", "table"]}
			],

			"no-continue": ["error"],
			"no-delete-var": ["error"],

			// NOTE:
			// This doesn't seem helpful.
			"no-div-regex": ["off"],
			"no-else-return": ["off"],

			"no-empty": ["error"],
			"no-empty-function": ["error"],

			// NOTE:
			// Use the "eqeqeq" rule instead.
			"no-eq-null": ["off"],

			"no-eval": ["error"],
			"no-extend-native": ["error"],
			"no-extra-bind": ["error"],
			"no-extra-boolean-cast": ["error"],
			"no-extra-label": ["error"],
			"no-extra-semi": ["error"],
			"no-floating-decimal": ["error"],
			"no-global-assign": ["error"],

			// NOTE:
			// Shorthand boolean coercion is fine.
			// Ex: "if (!!someString) {...}"
			"no-implicit-coercion": [
				"error",
				{"boolean": false}
			],

			"no-implicit-globals": ["error"],
			"no-implied-eval": ["error"],

			// NOTE:
			// This isn't a rule we support.
			"no-inline-comments": ["off"],

			"no-invalid-this": ["error"],
			"no-iterator": ["error"],
			"no-label-var": ["error"],

			// NOTE:
			// Labels can be used to break parent statements.
			"no-labels": ["off"],

			"no-lone-blocks": ["error"],
			"no-lonely-if": ["error"],
			"no-loop-func": ["error"],

			// NOTE:
			// This turned out to be supremely annoying.
			"no-magic-numbers": ["off"],

			"no-mixed-operators": ["error"],
			"no-multi-assign": ["error"],
			"no-multi-str": ["error"],

			// NOTE:
			// Disable for things like "if (variable != null) {...}"
			// TODO:
			// Is this worth a warning?
			"no-negated-condition": ["off"],

			// NOTE:
			// I like nested ternaries...
			// TODO:
			// Do I like them enough, though?
			"no-nested-ternary": ["off"],

			// NOTE:
			// We use new.
			"no-new": ["off"],

			"no-new-func": ["error"],
			"no-new-object": ["error"],
			"no-new-wrappers": ["error"],
			"no-nonoctal-decimal-escape": ["error"],
			"no-octal": ["error"],
			"no-octal-escape": ["error"],

			// NOTE:
			// Turns out this can help keep naming cleaner.
			"no-param-reassign": ["off"],

			"no-plusplus": ["error"],
			"no-proto": ["error"],
			"no-redeclare": ["error"],
			"no-regex-spaces": ["error"],

			// NOTE:
			// There's nothing to restrict here.
			"no-restricted-exports": ["off"],
			"no-restricted-globals": ["off"],
			"no-restricted-imports": ["off"],
			"no-restricted-properties": ["off"],
			"no-restricted-syntax": ["off"],

			"no-return-assign": ["error"],

			// NOTE:
			// We expect to await items in async.
			"no-return-await": ["off"],

			"no-script-url": ["error"],
			"no-sequences": ["error"],

			// NOTE:
			// Turns out shadowing can help with readability.
			// With this, we'd use longer, more arbitrary names.
			"no-shadow": ["off"],

			"no-shadow-restricted-names": ["error"],

			// NOTE:
			// Ternaries are nice.
			"no-ternary": ["off"],

			"no-throw-literal": ["error"],

			// NOTE:
			// These rules are either uneccessary, or redundant.
			"no-undef-init": ["off"],
			"no-undefined": ["off"],
			"no-underscore-dangle": ["off"],

			"no-unneeded-ternary": ["error"],

			// NOTE:
			// Allow these expressions which cause side-effects.
			"no-unused-expressions": [
				"error",
				{"allowShortCircuit": true, "allowTernary": true}
			],

			"no-unused-labels": ["error"],
			"no-useless-call": ["error"],
			"no-useless-catch": ["error"],
			"no-useless-computed-key": ["error"],
			"no-useless-concat": ["error"],
			"no-useless-constructor": ["error"],
			"no-useless-escape": ["error"],
			"no-useless-rename": ["error"],
			"no-useless-return": ["error"],
			"no-var": ["error"],

			// NOTE:
			// We use void to show purposefully unawaited async calls.
			"no-void": ["off"],

			// NOTE:
			// Useless.
			"no-warning-comments": ["off"],

			"no-with": ["error"],

			// NOTE:
			// The record object should be consistent!
			"object-shorthand": [
				"error",
				"consistent-as-needed"
			],

			// NOTE:
			// Simpler to read.
			"one-var": [
				"error",
				"never"
			],

			// NOTE:
			// Also simpler here.
			"one-var-declaration-per-line": [
				"error",
				"always"
			],

			"operator-assignment": ["error"],
			"prefer-arrow-callback": ["error"],
			"prefer-const": ["error"],

			// NOTE:
			// If we want to explicitly typify a var (as in TypeScript),
			// 	we'd have to ignore this rule first.
			// TODO:
			// Could be worth warning.
			"prefer-destructuring": ["off"],

			"prefer-exponentiation-operator": ["error"],
			"prefer-named-capture-group": ["error"],
			"prefer-numeric-literals": ["error"],
			"prefer-object-has-own": ["error"],
			"prefer-object-spread": ["error"],
			"prefer-promise-reject-errors": ["error"],
			"prefer-regex-literals": ["error"],
			"prefer-rest-params": ["error"],
			"prefer-spread": ["error"],
			"prefer-template": ["error"],

			// NOTICE
			// Props shouldn't have quotes if not needed.
			// They should be consistent if they are, however.
			"quote-props": [
				"error",
				"consistent-as-needed"
			],

			// NOTE:
			// Don't complicate parseInt unless its needed.
			"radix": [
				"error",
				"as-needed"
			],

			// NOTE:
			// This is counter-intuitive when async functions are used
			//  as helpers that throw errors.
			// TODO:
			// Find an alternative that requires await --OR-- throw.
			"require-await": ["off"],

			"require-unicode-regexp": ["error"],
			"require-yield": ["error"],

			// NOTE:
			// We use the plugin for this rule.
			// See also, "import/order".
			// "sort-imports": ["error"],

			// NOTE:
			// Its better if related values stay together.
			"sort-keys": ["off"],
			"sort-vars": ["off"],

			// NOTE:
			// Should have spaced block comments as well.
			// There are some exceptions for js-doc and ts-directives.
			"spaced-comment": [
				"error",
				"always",
				{
					"line": {
						"markers": ["/"]
					},
					"block": {
						"balanced": true,
						"markers": ["*"]
					}
				}
			],

			"strict": ["error"],
			"symbol-description": ["error"],
			"vars-on-top": ["error"],
			"yoda": ["error"],

			/* STYLISTIC FIXES FOR LAYOUT & FORMATTING */
			// NOTE:
			// Seperate brackets if there are any newlines.
			"array-bracket-newline": [
				"error",
				{"multiline": true}
			],

			// NOTE:
			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			"array-bracket-spacing": [
				"error",
				"never"
			],

			// NOTE:
			// Keep newlines consistent on a per-array basis.
			"array-element-newline": [
				"error",
				"consistent"
			],

			"arrow-parens": ["error"],
			"arrow-spacing": ["error"],
			"block-spacing": ["error"],

			// NOTE:
			// Stroustrup is the best brace style!!!
			"brace-style": [
				"error",
				"stroustrup"
			],

			// NOTE:
			// This is best for diff churn.
			"comma-dangle": [
				"error",
				"always-multiline"
			],

			"comma-spacing": ["error"],
			"comma-style": ["error"],

			// NOTE:
			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			"computed-property-spacing": [
				"error",
				"never"
			],

			// NOTE:
			// Start newlines with operators where applicable.
			"dot-location": [
				"error",
				"property"
			],

			"eol-last": ["error"],
			"func-call-spacing": ["error"],

			"function-call-argument-newline": [
				"error",
				"consistent"
			],

			// NOTE:
			// Seperate parens if there are any newlines.
			"function-paren-newline": [
				"error",
				"multiline-arguments"
			],

			// NOTE:
			// Space it like you would "async"
			"generator-star-spacing": [
				"error",
				"both"
			],

			"implicit-arrow-linebreak": ["error"],

			// NOTE:
			// We use tabs! And, don't indent member expressions!
			"indent": [
				"error",
				"tab",
				{"SwitchCase": 1, "MemberExpression": 0}
			],

			// NOTE:
			// Prefer single-quotes wherever possible!
			"jsx-quotes": [
				"error",
				"prefer-single"
			],

			"key-spacing": ["error"],
			"keyword-spacing": ["error"],

			// NOTE:
			// Nope. We don't dictate how comments should work.
			"line-comment-position": ["off"],

			"linebreak-style": ["error"],

			// NOTE:
			// Nope again.
			"lines-around-comment": ["off"],

			"lines-between-class-members": ["error"],

			// NOTE:
			// The max is 90, but its also recommended to keep
			// 	line-length below 60 if its feasible to do so.
			"max-len": [
				"error",
				{"code": 90, "tabWidth": 2}
			],

			"max-statements-per-line": ["error"],

			// NOTE:
			// Allow multiline ternaries if there's newlines.
			"multiline-ternary": [
				"error",
				"always-multiline"
			],

			"new-parens": ["error"],
			"newline-per-chained-call": ["error"],

			// NOTE:
			// Unfortunately, this doesn't provide the config I'd like.
			// It affects implicit returns in arrow functions.
			// TODO:
			// Find an alternative config option that suites this need.
			"no-extra-parens": ["off"],

			"no-mixed-spaces-and-tabs": ["error"],
			"no-multi-spaces": ["error"],

			// NOTE:
			// Double-newlines are good for seperating stuff.
			"no-multiple-empty-lines": [
				"error",
				{ "max": 2, "maxBOF": 0, "maxEOF": 0 }
			],

			// NOTE:
			// Shouldn't mix tabs with inner-code.
			// Just use the character exclusively as indentation.
			"no-tabs": [
				"error",
				{"allowIndentationTabs": true}
			],

			"no-trailing-spaces": ["error"],
			"no-whitespace-before-property": ["error"],
			"nonblock-statement-body-position": ["error"],

			// NOTE:
			// Keep newlines consistent on a per-object basis.
			"object-curly-newline": [
				"error",
				{"multiline": true}
			],

			// NOTE:
			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			"object-curly-spacing": [
				"error",
				"never"
			],

			// NOTE:
			// Keep multiline properties on own lines.
			"object-property-newline": [
				"error",
				{"allowAllPropertiesOnSameLine": true}
			],

			// NOTE:
			// Start lines with operators where applicable.
			"operator-linebreak": [
				"error",
				"before"
			],

			// NOTE:
			// Gross...
			"padded-blocks": [
				"error",
				"never"
			],

			// NOTE:
			// Always a space before the first export.
			"padding-line-between-statements": [
				"error",
				{
					"prev": "*",
					"next": "export",
					"blankLine": "always"
				},
				{
					"prev": "export",
					"next": "export",
					"blankLine": "any"
				}
			],

			// NOTE:
			// Single Quotes FTW!
			"quotes": [
				"error",
				"single"
			],

			"rest-spread-spacing": ["error"],

			// NOTE:
			// Ew... No semis!
			"semi": [
				"error",
				"never",
				{"beforeStatementContinuationChars": "never"}
			],

			"semi-spacing": ["error"],
			"semi-style": ["error"],
			"space-before-blocks": ["error"],
			"space-before-function-paren": ["error"],

			// NOTE:
			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			"space-in-parens": [
				"error",
				"never",
				{ "exceptions": ["empty"] }
			],

			"space-infix-ops": ["error"],
			"space-unary-ops": ["error"],
			"switch-colon-spacing": ["error"],

			// NOTE:
			// Always use spacing between ( ), [ ], and { }.
			// Otherwise there shouldn't be any space-padding.
			"template-curly-spacing": [
				"error",
				"never"
			],

			// NOTE:
			// Tags are like "gql`Query {...`", with no spaces.
			"template-tag-spacing": [
				"error",
				"never"
			],

			"unicode-bom": ["error"],

			// NOTE:
			// Inside option gives better readability.
			"wrap-iife": [
				"error",
				"inside"
			],

			"wrap-regex": ["error"],

			// NOTE:
			// Consistent with "generator-star-spacing"
			"yield-star-spacing": [
				"error",
				"both"
			],

			/*******************************************************
			** IMPORT PLUGIN RULES                                **
			*******************************************************/

			/* STATIC ANALYSIS */
			"import/default": ["error"],
			"import/named": ["error"],
			"import/namespace": ["error"],
			"import/no-absolute-path": ["error"],
			"import/no-cycle": ["error"],
			"import/no-dynamic-require": ["error"],

			// QUESTION:
			// Are there some internal modules that are off-limits?
			// Maybe you are refactoring, or have distribution dirs?
			// This rule can forbid certain internal import paths.
			"import/no-internal-modules": ["off"],

			// NOTE:
			// Usually it is better to prefer relative packages.
			"import/no-relative-packages": ["off"],

			// QUESTION:
			// Do you have a massive, confusing graph-like codebase?
			// If you want to simplify it, consider using this rule.
			"import/no-relative-parent-imports": ["off"],

			// QUESTION:
			// Do you have some incompatible code in your codebase?
			// If you do, maybe it would be worth configuring this?
			"import/no-restricted-paths": ["off"],

			"import/no-self-import": ["error"],
			"import/no-unresolved": ["error"],
			"import/no-useless-path-segments": ["error"],
			"import/no-webpack-loader-syntax": ["error"],

			/* HELPFUL WARNINGS */
			"import/export": ["error"],
			"import/no-deprecated": ["error"],
			"import/no-extraneous-dependencies": ["error"],
			"import/no-mutable-exports": ["error"],

			// QUESTION:
			// Are you upgrading from a Babel version prior to 6?
			// The docs say this rule could be useful then.
			"import/no-named-as-default-member": ["off"],

			"import/no-named-as-default": ["error"],
			"import/no-unused-modules": ["error"],

			/* MODULE SYSTEMS */
			"import/no-amd": ["error"],
			"import/no-commonjs": ["error"],
			"import/no-import-module-exports": ["error"],

			// QUESTION:
			// Are you coding for a web project?
			// If so, you will want to enable this.
			"import/no-nodejs-modules": ["off"],

			"import/unambiguous": ["error"],

			/* STYLE GUIDE */

			// NOTE:
			// Added a custom chunkname format to explicitly allow for dynamic chunknames.
			"import/dynamic-import-chunkname": [
				"error",
				{"webpackChunknameFormat": "\\[?[a-zA-Z0-57-9-/_]+\\]?"}
			],

			"import/exports-last": ["error"],

			// NOTE:
			// Always provide an extension, except for packages.
			// WARN:
			// Right now, due to how TS works with ESM,
			// 	any ".ts" files import with the ".js" extension.
			// That reports an error so we need to ignore ts files.
			"import/extensions": [
				"error",
				"ignorePackages",
				{"ts": "ignore", "tsx": "ignore"}
			],

			"import/first": ["error"],
			"import/group-exports": ["error"],

			// NOTE:
			// Don't limit the number of dependencies.
			"import/max-dependencies": ["off"],

			// WARN:
			// This reports double-newlines after imports.
			// Our rule for exporst ignores double-newlines.
			"import/newline-after-import": ["error"],

			"import/no-anonymous-default-export": ["error"],

			// NOTE:
			// Default & Named exports are both fine.
			"import/no-default-export": ["off"],

			// NOTE:
			// Have to disable base ESLint rule here.
			"no-duplicate-imports": ["off"],
			"import/no-duplicates": ["error"],

			"import/no-named-default": ["error"],

			// NOTE:
			// Default & Named exports are both fine.
			"import/no-named-export": ["off"],

			"import/no-namespace": ["error"],

			// NOTE:
			// In JSX, we can import css for styling without assigning anything.
			"import/no-unassigned-import": [
				"error",
				{"allow": ["**/*.css"]}
			],

			// NOTE:
			// Now this is what we came for!
			// Have to disable base ESLint rule here.
			"sort-imports": ["off"],
			"import/order": [
				"error",
				{
					"alphabetize": {"order": "asc"},
					"warnOnUnassignedImports": true
				},
			],

			// NOTE:
			// Default & Named exports are both fine.
			"import/prefer-default-export": ["off"]
		},
	},
]

export default config
