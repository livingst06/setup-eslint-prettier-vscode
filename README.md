# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `getting started`

lire la video VSCode + ESLint + Prettier. Comment bien configurer le tout sur youtube de la chaine Dev Theory


1°) a la racine du nouveau projet  faire :

npm i -D prettier eslint eslint-config-prettier eslint-plugin-prettier

or 

yarn add -D  prettier eslint eslint-config-prettier eslint-plugin-prettier


2°) at the root: 

rm -Rf node_modules yarn.lock ; yarn install
or
rm -Rf node_modules package-lock.json; npm i


3°) ./node_modules/eslint/bin/eslint.js --init

choisir force, CommonJS, None of these, Typescript no, code run on node, style guide Airbnb

Choisir type de fichier JSON pour créer le .eslintrc.json

4°) créer un fichier .prettierrc et mettre dedans ceci : 
 
{
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true
}


5°) dans .eslintrc.json 
 {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
           "node": {
              "extensions": [".js", ".jsx", ".ts", ".tsx"]
           }
        },
        "react": {
            "version" : "detect"
          }
    },    
    "extends": [
        "plugin:react/recommended",     
        "airbnb-base",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {

        // Ici vous définissez vos règles de syntaxe
        // Retrouvez les règles sur la documentation d'ESLint
        "prettier/prettier": "error",
        "no-param-reassign": ["error", { "props": false }],
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",

        // Seulement si c'est un projet React
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/jsx-one-expression-per-line": "off"
    }
}       



6°) ouvrir les settings  de vscode ( CTRL + , ) , aller dans onglet workspace : 

Tab Size : 2
Format On Save : coché
singleQuote : coché
JsxSingleQuote: coché


7°)  

ouvrir le fichier settings.json du repertoire .vscode à la racine du projet  :
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,

  "[javascript]": {

	  "editor.formatOnSave": false
  }, 
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "prettier.trailingComma": "all"

}


8°) if you use yarn only :
yarn add eslint-plugin-react@latest eslint-config-airbnb-base@latest eslint@^7.32.0 eslint-plugin-import@latest --dev



9°) clear;./node_modules/eslint/bin/eslint.js . --fix pour modifier tous les fichiers 

