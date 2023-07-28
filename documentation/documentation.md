#
# WebTips Starter Repo
This will act as a starter repository for **WebTips** 🌐💻 projects

#
# 🔗 Quicklinks
🔹[How to use this template repository?](https://github.com/solitontech/WebTips_Starter_Repo/edit/main/webtips%20starter%20repo%20documentation.md#how-to-use-this-template-repository-) \
🔹[How to create a starter repo?](https://github.com/solitontech/WebTips_Starter_Repo/edit/main/webtips%20starter%20repo%20documentation.md#how-to-create-a-starter-repo-) \
🔹[How to create a worflow that runs unit tests for your repo?](https://github.com/solitontech/WebTips_Starter_Repo/edit/main/webtips%20starter%20repo%20documentation.md#how-to-create-a-worflow-that-runs-unit-tests-for-your-repo-) 


### How to use this template repository? 🏁
👉 Step 1: Create a new repository and choose the webtips_starter_repo as the template repository. \
👉 Step 2: Clone the created repository.\
👉 Step 3: Initialize the repository as a node project using the command: __npm init -y__ . \
👉 Step 4: If your application's unit tests are written and run using jest, then install jest using the command npm i --save-dev jest.\
👉 Step 5: If your application does not have any jest tests, add this command to your package.json (for the workflow to pass when there are no tests):

![command to make the workflow run when there are no tests](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/WorkflowSpecification/noTests.png)

👉 Step 6: If your application also has end to end tests that are written and run using playwright, then follow these steps: \
&nbsp; &nbsp; &nbsp; &nbsp; 👉 Step 1: Run this command: __npm init playwright@latest__ to initialize the project as a playwright project\
&nbsp; &nbsp; &nbsp; &nbsp; 👉 Step 2: It will ask whether you want to continue with typescript or javascript. By default, it will take typescript. If your project uses JavaScript, give JavaScript option.  \
&nbsp; &nbsp; &nbsp; &nbsp; 👉 Step 3: The moment playwright is installed, it will also give some sample tests. It will ask where these tests should be. By default, all the tests will be in tests folder. Specify that the tests must be stored in a folder called Acceptance_Tests. \
&nbsp; &nbsp; &nbsp; &nbsp; 👉 Step 4: When installing playwright, it will ask whether to create a GitHub Actions workflow. Give no for this option because the starter repo already has a workflow to run the playwright tests. 

&nbsp; &nbsp; &nbsp; &nbsp; ![Steps to follow while configuring playwright tests](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/PlaywrightTests/configurationSteps.PNG) 

👉 Step 7: Work on it and push the changes to the remote repository. 

### How to create a starter repo? 🏁 
👉 Step 1: Log in to your GitHub Account. \
👉 Step 2: Click on **“new”** next to top repositories in the dashboard. 

![create a new repo](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step1.PNG) 

👉 Step 3: Give appropriate name to new repository. 

![give name to repo](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step2.PNG) 

👉 Step 4: Make it a private repository with a README. 

![make repo private](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step3.PNG) 

👉 Step 5: Finally, click on Create repository. \
👉 Step 6: Next, go to settings. 

![go to settings](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step4.PNG) 

👉 Step 7:  Click on the check box for template repository. 

![make it a template repo](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step5.PNG) 

👉 Step 8: Next, give access to whoever requires access by click on collaborators and adding people or teams. 

![add collaborators](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step6_1.PNG) 

![add collaborators](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/CreateStarterRepo/Step6_2.PNG) 

### How to create a worflow that runs unit tests for your repo? 🏁
👉 Step 1: Go to actions and choose “create your own workflow”. 

![create a workflow](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/PipelineImages/Step1.PNG) 

![create a workflow](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/PipelineImages/Step2.PNG) 

![create a workflow](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/PipelineImages/Step3.PNG) 

👉 Step 2: Create a workflow called nodeCI.yml to look for and run tests using jest. 

![create a workflow](https://github.com/solitontech/WebTips_Starter_Repo/blob/main/documentation/assets/PipelineImages/Step4.PNG) 

👉 Step 3: Clone the repository and run the command npm init –y to initialize it as a node project. \
👉 Step 4: Run the command npm I –save-dev jest to install and save jest as a dev dependency. \
👉 Step 5: Create a .gitignore file and write node_modules to prevent it from getting added to the remote repository. \
👉 Step 6: Push these changes. 




