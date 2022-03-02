<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Gatsby starter boilerplate with Flotiq source
===========================

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

This project use:
* [Flotiq](https://flotiq.com) - Headless CMS for string your data (You can create account [here](https://editor.flotiq.com/register.html))
* [Tailwind](https://tailwindcss.com/) - utility-first CSS framework
* [Flotiq source plugin](https://github.com/flotiq/gatsby-source-flotiq) - connector for fetching data from Flotiq
* [Flotiq components for react](https://flotiq.github.io/flotiq-components-react) - components library designed and written to work perfectly with Flotiq Content Objects and display your data beautifully

This project works on node ^14.17.0 || >=16.0.0, we do not support node 15.

## Quick start

1. **Start the project from template using [Flotiq CLI]((https://github.com/flotiq/flotiq-cli))**

    ```bash
   npm install -g flotiq-cli
   flotiq start [flotiqApiKey] [projectName] https://github.com/flotiq/gatsby-starter-boilerplate.git
    ```
    * `flotiqApKey` - Read and write API key to your Flotiq account
    * `projectName` - project name or project path (if you wish to start project in or import data from the current directory - use `.`)

2. **You can also start the project from template using Gatsby CLI**

    ```bash
    gatsby new gatsby-starter-boilerplate https://github.com/flotiq/gatsby-starter-boilerplate.git
    ```

3. **Configure application**

   The next step is to configure our application to know from where it has to fetch the data.

   You need to create a file called `.env.development` inside the root of the directory, with the following structure:

    ```
    GATSBY_FLOTIQ_API_KEY=YOUR FLOTIQ API KEY
    GA_TRACKING_ID=YOUR GA TRACKING KEY
    ```
 
4. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-starter-boilerplate/
    gatsby develop
    ```

    This step is optional and is not necessary if you used flotiq-cli to start the project.
   
    If you wish to import example data to your account, before running `gatsby develop` run:

    ```sh
    flotiq import [flotiqApiKey] .
    ```

    It will add one example object to your Flotiq account.

    _Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

5. **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `gatsby-starter-boilerplate` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

6. **Manage your content using Flotiq editor**

   You can now easily manage your content using [Flotiq editor](https://editor.flotiq.com)

## Deploy

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsby-starter-boilerplate)

You can also deploy this project to [Heroku](https://www.heroku.com/) in 3 minutes:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/flotiq/gatsby-starter-boilerplate)

Or to [Netlify](https://www.netlify.com/):

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/flotiq/gatsby-starter-boilerplate)


## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .flotiq
    ├── .github
    ├── node_modules
    ├─┬ src
    │ ├── assets
    │ ├── pages
    │ └── style
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── app.json
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── netlify.toml
    ├── package.json
    ├── README.md
    ├── static.json
    ├── tailwind.config.js
    └── yarn.lock

1. **`.flotiq`**: This directory contains content types necessary to starter to work.

2. **`.github`**: This directory contains templates of GitHub issues. 

3. **`/node_modules`**: This directory contains all packages that your project depends on (npm packages) and are automatically installed.

4. **`/src`**: This directory will contain all the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5. **`/src/assets`**: This directory will contain all static assets for the project (images, favicons, custom fonts).

6. **`/src/pages`**: This directory will contain all static pages for the project.

7. **`/src/style`**: This directory will contain global styles for the project.

8. **`.eslintignore`**: This file tells eslint which files it should not track / not fix.

9. **`.eslintrc.js`**: This is a configuration file for [Eslint](https://eslint.org/). Eslint is a tool to help keep the formatting of your code consistent automatically.

10. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

11. **`.prettierignore`**: This file tells prettier which files it should not track / not fix.

12. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

13. **`app.json`**: Configuration file for Heroku deploy. You can safely remove this file if you do not plan to deploy on Heroku.

14. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

15. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

16. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

17. **`LICENSE`**: This Gatsby starter is licensed under the MIT license.

18. **`netlify.toml`**: Configuration file for Netlify deploy. You can safely remove this file if you do not plan to deploy on Netlify.

19. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc.). This manifest is how npm knows which packages to install for your project.

20. **`README.md`**: A text file containing useful reference information about your project.

21. **`static.json`**: Configuration file for caching the project.

22. **`tailwind.config.js`**: Configuration file for tailwind.

23. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your yarn dependencies that were installed for your project. **(You won’t change this file directly).**

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to the gatsby documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Learning Flotiq

Full documentation for Flotiq lives [on this website](https://flotiq.com/docs/).

Documentation for gatsby starters is [here](https://flotiq.com/docs/Universe/gatsby/).

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/gatsby-starter-boilerplate/issues).

