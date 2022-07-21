<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Gatsby shop starter with Flotiq source
===========================

Kick off your project with this event boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

Live Demo: https://flotiqgatsbyshop1.gatsbyjs.io

This project use:
* [Flotiq](https://flotiq.com) - Headless CMS for string your data (You can create account [here](https://editor.flotiq.com/register.html))
* [Tailwind](https://tailwindcss.com/) - utility-first CSS framework
* [Flotiq source plugin](https://github.com/flotiq/gatsby-source-flotiq) - connector for fetching data from Flotiq
* [Flotiq components for react](https://flotiq.github.io/flotiq-components-react) - components library designed and written to work perfectly with Flotiq Content Objects and display your data beautifully

This project works on node ^14.17.0 || >=16.0.0, we do not support node 15.

## Quick start using Flotiq CLI

Start the project from template using [Flotiq CLI](https://github.com/flotiq/flotiq-cli)

 ```bash
npm install -g flotiq-cli
flotiq start [projectName] https://github.com/flotiq/flotiq-gatsby-shop-1.git [flotiqApiKey]
```
* `projectName` - Project path (if you wish to start project in the current directory - use `.`)
* `flotiqApKey` - [Read and write API key](https://flotiq.com/docs/API/#application-api-keys) to your Flotiq account

This command will:
- create project based on template using the `gatsby new` command
- install npm dependencies
- setup variables in the .env file
- import example data to you Flotiq account using the `flotiq import` command
- start development server using the `gatsby develop` command

![](https://api.flotiq.com/image/0x0/_media-96fcf787-552d-498c-ad47-8a43a76e7cc4.gif)

## Configuration 

Environment variables are stored in the `.env` files.
The `.env.development` file inside the root of the directory should have the following structure:

```
GATSBY_FLOTIQ_API_KEY=YOUR FLOTIQ API KEY
SNIPCART_API_KEY=YOUR SNIPCART API KEY
GA_MEASUREMENT_ID=YOUR MEASUREMENT ID
```

## Import data (optional)

This step is optional and is not necessary if you used flotiq-cli to start the project.

If you wish to import example data to your account, before running `gatsby develop` run:

```sh
flotiq import . [flotiqApiKey]
```

It will add four example objects to your Flotiq account.

_Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

## Developing

Navigate into your new site’s directory and start it up.

```shell
cd flotiq-gatsby-shop-1/
gatsby develop
```

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

Open the `flotiq-gatsby-shop-1` directory in your code editor of choice and edit `src/templates/index.js`.
Save your changes and the browser will update in real time!

## Manage your content using Flotiq editor

You can now easily manage your content using [Flotiq editor](https://editor.flotiq.com).

As Gatsby generates static pages based on content from headless CMS, you have to rebuild site after the data changes.

### Update data in development

When you update the Content Object in Flotiq you have to rerun `gatsby develop`.
When you update the Content Type Definition in Flotiq, you have to run `gatsby clean` command.

_Note: To simplify this process you can configure [Gatsby Refreshing Content](https://www.gatsbyjs.com/docs/refreshing-content/) endpoint._

### Update data in production

When you update the data in Flotiq you have to rebuild project using `gatsby build` command.

If you use hosting services listed below you can simplify the process:
- For Gatsby Cloud use [Flotiq Gatsby plugin](https://flotiq.com/docs/panel/Plugins/Gatsby-cloud-integration/#installing-the-gatsby-plugin)
- For Netlify use [Flotiq Netlify plugin](https://flotiq.com/docs/panel/Plugins/Netlify-integration/#installing-the-netlify-plugin)

For other services you can configure [Webhook](https://flotiq.com/docs/panel/webhooks/examples/) on data change or manually rebuild site in hosting service.

## Deploy

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/flotiq/flotiq-gatsby-shop-1)

You can also deploy this project to [Heroku](https://www.heroku.com/) in 3 minutes:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/flotiq/flotiq-gatsby-shop-1)

Or to [Netlify](https://www.netlify.com/):

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/flotiq/flotiq-gatsby-shop-1)


## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .flotiq
    ├── .github
    ├── node_modules
    ├─┬ src
    │ ├── assets
    │ ├── components
    │ ├── layouts
    │ ├── pages
    │ ├── sections
    │ ├── style
    │ └── templates
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

6. **`/src/components`**: This directory will contain all small build blocks for your templates and layouts.

7. **`/src/layouts`**: This directory will contain all layout templates for your pages.

8. **`/src/pages`**: This directory will contain all static pages for the project.

9. **`/src/sections`**: This directory will contain all big build blocks for your project.

10. **`/src/style`**: This directory will contain global styles for the project.

11. **`/src/templates`**: This directory will contain all templates for automatically generated pages.

12. **`.eslintignore`**: This file tells eslint which files it should not track / not fix.

13. **`.eslintrc.js`**: This is a configuration file for [Eslint](https://eslint.org/). Eslint is a tool to help keep the formatting of your code consistent automatically.

14. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

15. **`.prettierignore`**: This file tells prettier which files it should not track / not fix.

16. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

17. **`app.json`**: Configuration file for Heroku deploy. You can safely remove this file if you do not plan to deploy on Heroku.

18. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

19. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

20. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

21. **`LICENSE`**: This Gatsby starter is licensed under the MIT license.

22. **`netlify.toml`**: Configuration file for Netlify deploy. You can safely remove this file if you do not plan to deploy on Netlify.

23. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc.). This manifest is how npm knows which packages to install for your project.

24. **`README.md`**: A text file containing useful reference information about your project.

25. **`static.json`**: Configuration file for caching the project.

26. **`tailwind.config.js`**: Configuration file for tailwind.

27. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your yarn dependencies that were installed for your project. **(You won’t change this file directly).**

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to the gatsby documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Learning Flotiq

Full documentation for Flotiq lives [on this website](https://flotiq.com/docs/).

Documentation for gatsby starters is [here](https://flotiq.com/docs/Universe/gatsby/).

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/flotiq-gatsby-shop-1/issues).

