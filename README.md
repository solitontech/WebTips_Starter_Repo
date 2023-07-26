# WebTips_Starter_Repo
This will act as a starter repository for **WebTips** 💻 projects

### How to use a template repository? 🏁
👉 Step 1: Create a new repository and choose the webtips_starter_repo as the template repository.\
👉 Step 2: Clone the created repository.\
👉 Step 3: Initialize the repository as a node project using the command: __npm init -y__ . \
👉 Step 4: If your application's tests are written and run using jest, then nnstall jest using the command npm i --save-dev jest.\
👉 Step 5: If your application does not have any jest tests, add this command to your package.json (for the workflow to pass when there are no tests):\
![command to make the workflow run when there are no tests](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation_assets/WorkflowSpecification/noTests.png)\
👉 Step 6: If your application's tests are written and run using playwright, then follow these steps: [Tests written using Playwright](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/README.md#steps-to-follow-if-your-tests-are-written-using-playwright-) \
👉 Step 7: Work on it and push the changes to the remote repository. 

### Steps to follow if your tests are written using playwright? 🏁
👉 Step 1: Run this command: __npm init playwright@latest__ to initialize the project as a playwright project\
👉 Step 2: It will ask whether you want to continue with typescript or javascript. By default, it will take typescript. If your project uses JavaScript, give JavaScript option.  \
👉 Step 3: The moment playwright is installed, it will also give some sample tests. It will ask where these tests should be. By default, all the tests will be in tests folder. If you want the tests to be stored in a folder by a different name, specify it in the plywright.config.js file. \
👉 Step 4: When installing playwright, it will ask whether to create a GitHub Actions workflow. Give no for this option because the starter repo already has a workflow to run the playwright tests.  
