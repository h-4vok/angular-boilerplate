# AngularPractice

Stack:
* Angular 7.3.6
* NodeJS v11.12.0
* npm version 6.7.0
* Kendo ...?
* Lodash ...?

## Initial setup

* Install node
* Install nvm

Run the following npm commands
* npm run node-version-set
* npm install -g @angular/cli
* npm install htmlhint-ng2 -g
* npm install sass-lint -g
* npm install

Run the app!
* npm run dev

If you cannot build due to a "SASS" binding issue then run:
* npm rebuild node-sass

## Angular commands

### Code scaffolding

Create a component: `ng generate component components/component-name`
Create a service: `ng generate service services/service-name`
Create a screen: `ng generate component screens/screen-name`

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

For example if you wish to generate a new component place yourself at the project root folder and run `ng generate component components/component-name` where component-name is the name of your component (duh).

## NPM commands

(Needs NVM) Install required node version (if needed) and set the project to it:
* npm run node-version-set

### Development server

Run `npm run dev` for a dev server. Linting will run first and if no errors are found, then the dev server will start. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build-prod` script for a production build.

### Run linting

Run `npm run lint` script to run the linter.

### Run linting SCSS
In package.json added this line : "sasslintConfig": "./src/sass-lint.yml"
The rules are in -> src/sass-lint.yml
Run `sass-lint -c src/.sass-lint.yml -v -q`

### Run linting HTML
Run `htmlhint-ng2 src/**/*.html`
View rules `htmlhint-ng2 --list`
The rules are in -> src/.htmlhintrc

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Running storybook

Run `npm run storybook` to execute the storybook via [StoryBook](https://storybook.js.org/docs/guides/guide-angular/).

## Toast Notifications
* Configuration `https://github.com/scttcper/ngx-toastr`.
* Example `https://scttcper.github.io/ngx-toastr/`.

## IDE

We choose to work on VSCode. Use the latest version possible.

### Mandatory list of VSCode extensions

* EditorConfig for VS Code - Used to mantain file formatting while using VSCode
* TSLint - Used to identify TSLint problems while developing
* IntelliSense for CSS, SCSS class and ID names in HTML, Latte, Slim and SCSS - Provides IntelliSense when writting SCSS
* SCSS Formatter - Formats SCSS according to EditorConfig configuration
* Version Lens - Allows to see latest versions of node packages installed
* Markdown Preview Github Styling - Allows to preview the markdown on the documentation files we write
* Sass Lint - Runs sass-lint into the editor as you type.
* HTMLHint - Runs htmlhint into the editor as you type.

### Should-have Angular specific VSCode extensions (All optional, but you should consider them)

* Angular Inject Service
* Angular Language Service
* Angular Component File Cycler
* vscode-angular-html
* Angular Follow Selector

### Recommended list of VSCode extensions

* Bracket Pair Colorizer - Adds colors to pairs of brackets to ease readability
* Image preview - Allows to preview images within VSCode
* Material Icon Theme - Adds a great Icon theme to VScode that helps traversability on the project explorer.
* node-readme - Be able to see npm packages documentation within VSCode
* npm - npm support for VS Code
* Quokka.js - Live scratchpad for JavaScript
* Visual Studio IntelliCode - Preview - Allows for a smarter IntelliSense on TS while developing

### Recommended list of Angular VSCode extensions

* Angular Console

### Recommended VSCode Configuration

We recommend the following VSCode Configuration but this is not enforced.

Some settings here depend on installing a few things:
* "Dracula" is a theme you get from installing the extension "Dracula Official"
* "Ubuntu Mono" is a font you can download from https://design.ubuntu.com/font/ or https://fonts.google.com/specimen/Ubuntu+Mono

```JSON
{
    "editor.minimap.enabled": false,
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.cursorStyle": "line",
    "editor.cursorBlinking": "phase",
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 3000,
    "files.trimFinalNewlines": true,
    "window.zoomLevel": 0,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "explorer.sortOrder": "type",
    "python.jediEnabled": false,
    "java.configuration.checkProjectSettingsExclusions": false,
    "java.errors.incompleteClasspath.severity": "ignore",
    "workbench.colorTheme": "Dracula",
    "workbench.editor.highlightModifiedTabs": true,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "terminal.integrated.fontFamily": "Ubuntu Mono",
    "editor.fontFamily": "'Ubuntu Mono'",
    "editor.fontSize": 16,
    "workbench.iconTheme": "material-icon-theme",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
}
```

## Team Communication

### Slack

Our instant messaging tool will be slack. We will use the following channels:

* sas-fcm-general: General conversation channel for all project related discussions.
* sas-fcm-pr: All PRs must be published here with URL, and tagging all the people that need to review. Conversations about a PR must happen within a thread under the message containing the PR URL.
* sas-fcm-jira: JIRA Cloud plugin enabled channel where specific JIRA Cloud notifications will be shown. These notifications must be configured to be scarce and not overwhelming.

## Naming Standards

* All angular component files must follow angular's nomenclature. For example component-name.component.***.ext.
* All files must use lower camel case. For example, `baseModel.ts`.

## Coding Standards (Temporary, need to enforce by linting when possible)

* If the type can be inferred from assignment (hover over variable if needed) then avoid the type declaration.
* Do not use var unless you have a very specific reason (need to enforce by linter).
* Unless it is an angular-cli generated file, all files containing a single class should use `export default class` and not export at the end, unless the class cannot be exported as-is. 
