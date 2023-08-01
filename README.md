#
# WebTips Starter Repo
This will act as a starter repository for **WebTips** 🌐💻 projects

#
# 🔗 Quicklinks
🔹[How to use this template repository?](https://github.com/solitontech/WebTips_Starter_Repo/tree/main#how-to-use-this-template-repository-) \
🔹[How to create a starter repo?](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/documentation.md#how-to-create-a-starter-repo-) \
🔹[How to create a worflow that runs unit tests for your repo?](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/documentation.md#how-to-create-a-worflow-that-runs-unit-tests-for-your-repo-) 

### How to use this template repository? 🏁
👉 Step 1: Create a new repository and choose the webtips_starter_repo as the template repository. \
👉 Step 2: Clone the created repository.\
👉 Step 3: Initialize the repository as a node project using the command: __npm init -y__ . \
👉 Step 4: This starter repo assumes that unit tests are written and run using jest. So, install jest using the command npm i --save-dev jest.\
👉 Step 5: Create all the unit tests inside the unit folder in the tests folder:

![folder structure for tests](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/assets/Images/WorkflowSpecification/testFolder.png)

👉 Step 6: If your application does not have any jest tests, add this command to your package.json (for the workflow to pass when there are no tests):

![command to make the workflow run when there are no tests](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/assets/Images/WorkflowSpecification/noTests.png)

👉 Step 7: This starter repo assumes that all the end-to-end tests are written using playwright. So, follow the below given steps to initialize the project as a playwright project: \
&nbsp; &nbsp; &nbsp; &nbsp; 🛡️ Step 7.1: Run this command: __npm init playwright@latest__ to initialize the project as a playwright project\
&nbsp; &nbsp; &nbsp; &nbsp; 🛡️ Step 7.2: It will ask whether you want to continue with typescript or javascript. By default, it will take typescript. If your project uses JavaScript, give JavaScript option.  \
&nbsp; &nbsp; &nbsp; &nbsp; 🛡️ Step 7.3: The moment playwright is installed, it will also give some sample tests. It will ask where these tests should be. By default, all the tests will be in tests folder. Specify that the tests must be stored in a folder called acceptance inside the tests folder using this path: __./tests/acceptance/__ \
&nbsp; &nbsp; &nbsp; &nbsp; 🛡️ Step 7.4: When installing playwright, it will ask whether to create a GitHub Actions workflow. Give no for this option because the starter repo already has a workflow to run the playwright tests. 

&nbsp; &nbsp; &nbsp; &nbsp; ![Steps to follow while configuring playwright tests](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/assets/Images/PlaywrightTests/configurationSteps.PNG) 

&nbsp; &nbsp; &nbsp; &nbsp; 🛡️ Step 7.5: After installing playwright, it will create a new folder called acceptance and add sample tests to it. So, delete the existing folder called acceptance inside the tests folder (that folder only exists in the template repo to show folder structure). Move the test inside the test-examples folder inside the acceptance folder as well amd delete the folder called test-examples.

&nbsp; &nbsp; &nbsp; &nbsp; ![Image of file to be deleted](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/docs/assets/Images/PlaywrightTests/testExamples.PNG) 

👉 Step 8: After the above steps are complete, push to the main branch. 

### 🗒️ NOTE:
- For each assignment, create a new branch from the main branch. 
- After you are done working on an assigment, merge to the main branch. 
- When merging to the main branch, the code's unit tests and playwright tests will be run, the code will be analyzed for syntax errors and spacing. 
- If any of the tests fail or there is any error in the code, the branch will not merge with the main branch and the workflow will fail.
- Create a new branch for each assignment



