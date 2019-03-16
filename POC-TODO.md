# PoC TODO List

This is a temporary file where we can put TODOs for the project PoC

## Programming Related

### Github

* Get github private repos for the project.
* Decide repositories and repository names.
* Define git owners.
* Define branching strategy
* Define code review process
* Define documentation process
* Define what documentation must be built

### PoC

* Create a PoC project that can be used to start our development (this project).

#### Global Notification Support:
* Install https://github.com/kyashan/toastify (Live example at http://kyashan.github.io/toastify/)
* Configure an abstraction layer
* Define styling for notifications
* Test notification in several viewports
* Possibly a root level service in Angular 7?

#### API connectivity:
* How will we connect to the API? Setup Superagent.
* Use Teleperformance API for testing (already has authentication and other intrisicancies).
* Develop an abstraction layer on top of Superagent.
* Usage must be independent from Redux.

#### Downloading files:
* Downloading files with Superagent either is not possible or does not work properly.
* We need a standard way to download files from a server/api.

#### HTTP-Status library (Done)
* Useful for API connectivity layer

#### Storybook
* This project will be UI intensive and finite components must be identified and created.
* Setup Storybook on this project.
* Setup Storybook viewports.
* Train developers on Storybook.
* Define how Storybook fits into the development pipeline of new components.

#### Docker
* Will we need Docker?
* Need developers to be trained on docker
* Create docker files.

#### Cross-Env
* Will we need cross-env on this project? Seems Angular comes with its own solution so this needs to be revised.

#### JEST
* Jest is already setup, but we must configure precisely how we want code coverage.
* Configure how we want to run tests.
* We should enforce unit testing on UI.

#### Redux
* Define our Redux strategy. Where will we use it, how will we use it?
* It will also depend on the backend. Since it cannot be modified except when adding new endpoints.
* Will we use SAGAs? Is it necessaray?
* Will we use reselect?

#### SCSS
* Define SCSS practices and standards
* Define how styles should be structured
* Setup mixins. Split by problem domain.
* Setup theme variables
* Setup global variables

#### Viewport Resizer
* Setup Viewport Resizer breakpoints and configuration. Add to Readme.md.
* Train developers on usage of Viewport Resizer.

#### Browser Support
* Define with the client what is the browser support expected.

#### Linter
* Read https://christianlydemann.com/style-angular-apps-using-prettier-and-tslint/
* Find best possible practices for TSLinter and configure it so. Possibly https://www.npmjs.com/package/angular-tslint-rules.
* Migrate linter to YML for readibility.
* Find additional rules we want for TSLinter to enforce a stricter coding standard.
* Analyze a HTML linter tool? https://www.npmjs.com/package/html-linter
* Analyze a SCSS linter tool? https://stylelint.io/ 

#### Styling

* Define default font
* Define default font-size for normal text

#### Validation on the UI

* Anything like RC-FORM from Angular? Perhaps a simpler solution?

#### Routing

* Analyze how angular routing works. Define best practices.

#### Session Management

* How will we manage the session of the user?
* What happens when he logs in
* What happens when he logs out
* What happens when he closes the window
* What happens if an unauthenticated user reaches a protected route
* What happens if an authenticated user reaches a route he should not have access to
* Specific permission enabled components? Visibility or Enabled/Disabled?
* Possible a root level service in Angular 7?

#### Flexbox Grid?

* Will we use Flexbox Grid as a layout solution?

#### Favicon

* Define a favicon.ico for this app.

#### Spinners

* Loading Indicator for pages
* Loading Indicator for API requests

#### NG GENERATE standards

* Define standards for generating services, modules, components, etc.

### Github Pull Requests

* Setup something like Heroku that automatically builds and deploys an environment for every PR?
* Setup something like CircleCI that automatically runs all the checks we need on every PR? For example, linting, tests, e2e, code coverage, build.
* Define how many people must code-review a code before being able to merge.
* Automatically delete branches remotely after a merge to branch develop
* Disallow merges to master branch unless speciifc approvals have happen.

## Project Management Related

### JIRA

* Get JIRA Cloud up and running
* Configure Joe Pearson and Christian Guzman as administrators.
* SAS PO should have full access to our JIRA.
* Create workflow schema for our project.
* Create issue types for our projects.
* Create project
* Define story point estimation tactics
* Define reports to follow on and analyze in Sprint Reviews
* Define JIRA ranking/prioritization strategy
* Define scrum boards in JIRA
* Get developers access to JIRA

### Define Definition of Ready

TBD

### Define Definition of Done

TBD

### Processes

Different needs require different tactics. We must define the tactics we need and how we will split the work in the following scenarios that we are surely bound to find.

#### New Re-usable Component:
* TBD

#### New Non-Re-usable Component (single purpose/screen component):
* TBD

#### New Screen with specific functionality:
* TBD

#### New Screen with varied functionality:
* TBD

#### Global usage components (ie footer, header, menus, etc):
* TBD

## Training

Define what training developers must undergo

### Developers

* Angular 7
* Viewport Resizer
* Clean Code practices
* Unit testing UI
* E2E tests on UI
* JIRA and project specific workflows
* GIT
* ECS6 changes
* Start using closures, not function
* Start using const and let where required
