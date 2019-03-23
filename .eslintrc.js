module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": false,
    "ecmaVersion": 8,
  },

  "env": {
    "es6": true,
    "node": true
  },

  "plugins": [
    "import",
    "node",
    "promise",
    "standard"
  ],

  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },

  "rules": {
    "accessor-pairs": "warn",
    "arrow-spacing": ["warn", {"before": true, "after": true}],
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
    "camelcase": ["warn", {"properties": "never"}],
    "comma-dangle": ["warn", "only-multiline"],
    "comma-spacing": ["warn", {"before": false, "after": true}],
    "comma-style": ["warn", "last"],
    "constructor-super": "warn",
    "curly": ["warn", "multi-line"],
    "dot-location": ["warn", "property"],
    "eol-last": "warn",
    "eqeqeq": ["warn", "always", {"null": "ignore"}],
    "func-call-spacing": ["warn", "never"],
    "generator-star-spacing": ["warn", {"before": true, "after": true}],
    "handle-callback-err": ["warn", "^(err|error)$"],
    "indent": ["warn", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {"parameters": 1, "body": 1},
      "FunctionExpression": {"parameters": 1, "body": 1},
      "CallExpression": {"arguments": 1},
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoreComments": false
    }],
    "key-spacing": ["warn", {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": ["warn", {"before": true, "after": true}],
    "new-cap": ["warn", {"newIsCap": true, "capIsNew": false}],
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-class-assign": "warn",
    "no-compare-neg-zero": "warn",
    "no-cond-assign": "warn",
    "no-const-assign": "warn",
    "no-constant-condition": ["warn", {"checkLoops": false}],
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": ["warn", "functions"],
    "no-fallthrough": "warn",
    "no-floating-decimal": "warn",
    "no-func-assign": "warn",
    "no-global-assign": "warn",
    "no-implied-eval": "warn",
    "no-inner-declarations": ["warn", "functions"],
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": ["warn", {"allowLoop": false, "allowSwitch": false}],
    "no-lone-blocks": "warn",
    "no-mixed-operators": ["warn", {
      "groups": [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],
    "no-mixed-spaces-and-tabs": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-multiple-empty-lines": ["warn", {"max": 1, "maxEOF": 0}],
    "no-negated-in-lhs": "warn",
    "no-new": "off",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-require": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-path-concat": "warn",
    "no-proto": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-return-assign": ["warn", "except-parens"],
    "no-return-await": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-tabs": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": "warn",
    "no-undef": "warn",
    "no-undef-init": "warn",
    "no-unexpected-multiline": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": ["warn", {"defaultAssignment": false}],
    "no-unreachable": "warn",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "warn",
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": true
    }],
    "no-unused-vars": ["warn", {"vars": "all", "args": "none", "ignoreRestSiblings": true, "varsIgnorePattern": "" }],
    "no-use-before-define": ["warn", {"functions": false, "classes": false, "variables": false}],
    "no-useless-call": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "object-property-newline": ["warn", {"allowMultiplePropertiesPerLine": true}],
    "one-var": ["warn", {"initialized": "never"}],
    "operator-linebreak": ["warn", "after", {"overrides": {"?": "before", ":": "before"}}],
    "padded-blocks": ["warn", {"blocks": "never", "switches": "never", "classes": "never"}],
    "prefer-promise-reject-errors": "warn",
    "quotes": ["warn", "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "rest-spread-spacing": ["warn", "never"],
    "semi": [1, "always"],
    "semi-spacing": ["warn", {"before": false, "after": true}],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", "always"],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", {"words": true, "nonwords": false}],
    "spaced-comment": ["warn", "always", {
      "line": {"markers": ["*package", "!", "/", ",", "="]},
      "block": {
        "balanced": true,
        "markers": ["*package", "!", ",", ":", "::", "flow-include"],
        "exceptions": ["*"]
      }
    }],
    "symbol-description": "warn",
    "template-curly-spacing": ["warn", "never"],
    "template-tag-spacing": ["warn", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": "warn",
    "valid-typeof": ["warn", {"requireStringLiterals": true}],
    "wrap-iife": ["warn", "any", {"functionPrototypeMethods": true}],
    "yield-star-spacing": ["warn", "both"],
    "yoda": ["warn", "never"],

    "import/export": "warn",
    "import/first": "warn",
    "import/no-duplicates": "warn",
    "import/no-webpack-loader-syntax": "warn",

    "node/no-deprecated-api": "warn",
    "node/process-exit-as-throw": "warn",

    "promise/param-names": "warn",

    "standard/array-bracket-even-spacing": ["warn", "either"],
    "standard/computed-property-even-spacing": ["warn", "even"],
    "standard/no-callback-literal": "warn",
    "standard/object-curly-even-spacing": ["warn", "either"]
  },

};
