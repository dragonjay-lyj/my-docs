---
title: hexo-circle-of-friend Back-end deployment
icon: fa-solid fa-person-walking-luggage
---

# Back-end deployment

Where github is cloud deployment (serverless deployment)

## github deployment

> **Be careful** not to change the repository name **when you fork**

### github+sqlite deployment

This is the default deployment i.e.: github+sqlite+vercel

Deployment Methods:

The project repository for fork Friendlink Friendship Circle, address:[https://github.com/Rock-Candy-Tea/hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends)

Edit the `/hexo_circle_of_friends/fc_settings.yaml` file with the following configuration changes:

```
LINK:
    - {link: "https://en.dragonjay.top/link/", theme: "common2"}  # Change link to your link page address and choose your blog theme for theme.
```

Then click on the rope's`Settings-->Secrets-->New repository secret`

![QQ图片20220205080305](https://fcircle-doc.yyyzyyyz.cn/QQ%E5%9B%BE%E7%89%8720220205080305.png)

Add 4 environment variables secret:

-   `GH_NAME`：The github name, which is your username
-   `GH_EMAIL`：github email, fill in the email you registered github
-   `GH_TOKEN`：github access token, to get it, please refer to [official documentation](https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)，Where `Select scopes` selects `repo` and `workflow`.
-   `STORAGE_TYPE`：Storage method, fill in `sqlite`.

![image-20221008230906574](https://fcircle-doc.yyyzyyyz.cn/image-20221008230906574.png)

When the configuration is complete, it should look like the following:

![image-20221009000607317](https://fcircle-doc.yyyzyyyz.cn/image-20221009000607317.png)

Then click on the rope's`setting-->Actions-->General-->check Read and write permissions-->Save`

![](https://fcircle-doc.yyyzyyyz.cn/workflow_permissions.png)

Go to [vercel official website](https://vercel.com/)，Create an account directly with github and bind it with your cell phone number.

Click `New Project` to create a new project

Find `Import Git Repository` and you should see the repository you just `forked`, click `Import`.

![QQ截图20220205082743](https://fcircle-doc.yyyzyyyz.cn/QQ%E6%88%AA%E5%9B%BE20220205082743.png)

Then click `Deploy` and go back to the home page, wait a while and the deployment should complete.

To add vercel environment variables, go to the home page of the project you just created and click `Settings-->Environment Variables`.

![image-20221008231737297](https://fcircle-doc.yyyzyyyz.cn/image-20221008231737297.png)

Same as the previous secret, add `GH_NAME`, `GH_EMAIL`, `GH_TOKEN`, in addition to `VERCEL_ACCESS_TOKEN`, obtained as follows:

Click `Settings-->Tokens-->Create` in the upper right corner of the vercel page.

![image-20221008231925321](https://fcircle-doc.yyyzyyyz.cn/image-20221008231925321.png)

After entering a random name, click `CREATE TOKEN`, copy the generated token and add it to the vercel environment variable

![image-20221008232056360](https://fcircle-doc.yyyzyyyz.cn/image-20221008232056360.png)

When the addition is complete, it should look as shown below:

![image-20221008232407601](https://fcircle-doc.yyyzyyyz.cn/image-20221008232407601.png)

Next, go back to github and enable github action for the repository after `fork` and click on the`Actions-->I understand my workflows, go ahead and enable them`

![QQ截图20220205081120](https://fcircle-doc.yyyzyyyz.cn/QQ%E6%88%AA%E5%9B%BE20220205081120.png)

After that click `update-friends-posts` and enable `workflow`

![QQ截图20220205081424](https://fcircle-doc.yyyzyyyz.cn/QQ%E6%88%AA%E5%9B%BE20220205081424.png)

Then click `Run workflow--->Run workflow` to run it for the first time.

![image-20221008232746973](https://fcircle-doc.yyyzyyyz.cn/image-20221008232746973.png)

After waiting for the run to finish, the repository should upload `data.db` and the vercel should be updated synchronously.

Go to vercel and find the address under `DOMAINS` in the project, for example:[https://hexo-friendcircle4-api.vercel.app，](https://hexo-friendcircle4-api.vercel.app%2C/) Splicing `/all` after this address to try to access it, and the data appearing means that the configuration was successful, and this address is the api address needed by the front-end.

![QQ截图20220205083633](https://fcircle-doc.yyyzyyyz.cn/QQ%E6%88%AA%E5%9B%BE20220205083633.png)

At this point, the back-end part of the build is complete.

-   If using sqlite, the secret that needs to be added to the repository is: `STORAGE_TYPE`, `GH_NAME`, `GH_EMAIL`, `GH_TOKEN`, where `STORAGE_TYPE` has the value `sqlite`.
    
-   If using leancloud, the secret that needs to be added to the repository is: `STORAGE_TYPE`, `APPID`, `APPKEY`, where `STORAGE_TYPE` has the value `leancloud`.
    
-   If mysql is used, the secret that needs to be added to the repository is `STORAGE_TYPE`, `MYSQL_USERNAME`, `MYSQL_PASSWORD`, `MYSQL_IP`, `MYSQL_PORT`, `MYSQL_DB`, where `STORAGE_TYPE` has the value `mysql`.
    
-   If using mongodb, the secret that needs to be added to the repository is: `STORAGE_TYPE`, `MONGODB_URI`, where `STORAGE_TYPE` has the value `mongodb`.
    

Once the github environment variables are set, you also need to set the vercel environment variables, where `VERCEL_ACCESS_TOKEN`, `GH_TOKEN`, `GH_NAME`, `GH_EMAIL` must be added to provide access to the backend administration, again depending on how you store it:

-   If using sqlite, the environment variables that vercel needs to add are `VERCEL_ACCESS_TOKEN`, `GH_TOKEN`, `GH_NAME`, `GH_EMAIL`.
-   If using leancloud, the environment variables that vercel needs to add are: `VERCEL_ACCESS_TOKEN`, `GH_TOKEN`, `GH_NAME`, `GH_EMAIL`, `APPID`, `APPKEY`.
-   If using mysql, the environment variables that vercel needs to add are: `VERCEL_ACCESS_TOKEN`, `GH_TOKEN`, `GH_NAME`, `GH_EMAIL`, `MYSQL_USERNAME`, `MYSQL_PASSWORD`, `MYSQL_IP`, `MYSQL_PORT`, `MYSQL_DB`.
-   If using mongodb, the environment variables that vercel needs to add are `VERCEL_ACCESS_TOKEN`, `GH_TOKEN`, `GH_NAME`, `GH_EMAIL`, `MONGODB_URI`.