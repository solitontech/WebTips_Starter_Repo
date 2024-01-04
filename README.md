#
# WebTips Starter Repo 🌐💻
This will act as a starter repository for **WebTips** projects

#
# 🔗 Quicklinks
🔹[How to use this template repository?](https://github.com/solitontech/WebTips_Starter_Repo/tree/main#how-to-use-this-template-repository-) \
🔹[How to create a starter repo?](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/documentation.md#how-to-create-a-starter-repo-) \
🔹[How to create a worflow that runs unit tests for your repo?](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/documentation.md#how-to-create-a-worflow-that-runs-unit-tests-for-your-repo-) 

### How to use this template repository? 🏁

👉 Step 1: Create a new repository and choose the webtips_starter_repo as the template repository. \
👉 Step 2: Clone the created repository.\
👉 Step 3: open terminal and give command ```npm install```
 

## 📎 GitHooks:
Follow the steps in this file to set up githooks in your local repository: [GitHooks](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/gitHooks.md#git-hooks) \
Ensure that your branch names and commit messages follow this syntax: [GuideLines](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/guidelines%20for%20git.md#-guidelines-for-branch-name--commit-messages)

### 🔻 NOTE:
📌 For each assignment, create a new branch from the develop branch. \
📌 After you are done working on an assigment, merge to the develop branch. \
📌 When merging to the develop branch, the code's unit tests and playwright tests will be run, the code will be analyzed for syntax errors and spacing using Prettier, ESLint, html-eslint plugin and stylelint. So, ensure that your code follows these standards for the workflows to pass. \
📌 If any of the tests fail or there is any error in the code, the branch will not merge with the develop branch and the workflow will fail. \
📌 Once you are done working on the project, merge with the main branch. 

### 🔻 CODE ANALYZER NOTES:
✔️ The HTML Linter used in the code analyzer pipeline here is the html-eslint plugin. There are other options that can be used such as htmlHint. \
✔️ The coding standard specified in the pipeline for Es Linting is "Standard". There are other options such as Google and AirBnb. \
✔️ The JS files variable and function names should follow Camel Casing for the pipeline to pass. The js files should also be properly documented through jsdocs comments.

### 🔌 RECOMMENDED VS CODE PLUGINS:
✨ Prettier (To format your code)\
🅰️ CSS Alphabetize (To arrange properties in alphabetical order in CSS files)\
📖 Document This (To generate documentation for JavaScript files)





