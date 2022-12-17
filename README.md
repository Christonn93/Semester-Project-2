# Semester project
[![Deploy to Pages](https://github.com/Christonn93/Semester-Project-2/actions/workflows/static.yml/badge.svg)](https://github.com/Christonn93/Semester-Project-2/actions/workflows/static.yml)
![Website image](./src/assets/landingPageImage.png)

------

## Table of contents

1. [Project Brief](#project-brief)
2. [User stories](#user-stories)
3. [Project information](#project-information)
4. [Setting up](#setting-up)
5. [Hosting](#hosting)
6. [Contributing](#contributing)
7. [License](#license)
8. [Required links](#required-links)
9. [About and Contact](#about-and-contact)

------

## Project Brief

An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

------

## User Stories

The project covers these user stories;

- A user with a stud.noroff.no email may register
- A registered user may log in
- A registered user may logout
- A registered user may update their avatar
- A registered user may view their total credit
- A registered user may create a Listing with a title, deadline date, media gallery and description
- A registered user may add a Bid to another user’s Listing
- A registered user may view Bids made on a Listing
- A registered user may use credit to make a Bid on another user’s Listing
- An unregistered user may search through Listings

------

## Project information

### Created with

- HTML 5
- Sass
- Bootstrap
- JavaScript
- Noroff Auction API

### Designed in

- Adobe XD (link to style tile and prototype at the end of the readme)

### Dependencies

```json
"bootstrap": "^5.2.2",
"csshake": "^1.7.0",
"dotenv": "^16.0.3",
"jsdoc": "^3.6.11"
```

</br>

### Dev dependencies

```json
  "@babel/core": "^7.19.3",
  "@babel/preset-env": "^7.19.4",
  "cypress": "^10.11.0",
  "eslint": "^8.26.0",
  "eslint-plugin-cypress": "^2.12.1",
  "eslint-plugin-jest": "^27.1.4",
  "husky": "^8.0.1",
  "jest": "^29.2.0",
  "lint-staged": "^13.0.3",
  "prettier": "^2.7.1",
  "sass": "^1.55.0",
  "vite": "^3.2.3"
```

</br>

### Terminal scripts

Each script can be runes by `npm run *script name*`

```json
"test": "npm run test-unit && npm run test-e2e-cli",
"test-unit": "jest",
"test-e2e": "cypress open",
"test-e2e-cli": "cypress run",
"format": "prettier -w src/**/*.js",
"lint": "eslint src/**/*.js",
"lint-fix": "eslint src/**/*.js --cache --fix",
"build": "sass src/scss:dist/css",
"start": "sass --watch src/scss:dist/css & vite",
"prepare": "husky install",
"dev": "vite",
"vite-build": "vite build",
"vite-preview": "vite preview",
"shake-build:raw": "sass src/scss:dist/css"
```

</br>

Command used to add, commit, push and update version

```md
git add . && git commit && git push && npm version patch
```

------

# Setting up

## Option 1

Download and extract the zip file or clone the project in the command line from your preferred editor.

```md
git clone https://github.com/Christonn93/Semester-Project-2.git
```

</br>

## Option 2

Use GitHub CLI

```md
gh repo clone Christonn93/Semester-Project-2
```

</br>

## Option 3

Open with GitHub Desktop

</br>

## Starting the project

After choosing one of the options above you will need to do the following

1. Install dependencies with:

    ```md
    npm i
    ```

</br>

2. Build page:

    ```md
    npm run build
    ```

</br>

3. View with Vite local server:

    ```md
    npm run dev
    ```

    This will open the option to view the page in the browser at: [http://127.0.0.1:5173](http://127.0.0.1:5173)

</br>

4. Watch changes to the style with:

   ```md
   npm run start
   ```

------

## Hosting

This project is using GitHub action to display the page on a [subdomain](https://auction-garage.christopher-tonnesland.no/). It will automatically push update the live site on push to main.

------

## Contributing

If you experience any errors feel free to add issues or open up a pull request with suggested changes. Likewise, if there are features you would like to suggest feel free.

------

## License

This project is licensed under a Creative Commons license. It is open for contributions, but please credit the project if you use the code in your projects.

------

## Required Links

<table>
  <thead>
    <tr>
      <th>Resource</th>
      <td>URL</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Gantt Chart</th>
      <td><a href="https://docs.google.com/spreadsheets/d/1RwCNmC_BN5C3aZQhcwQwrIr3TtHjmNffUgCBWtsMbDE/edit#gid=0" target="_blank">Gantt Chart google sheets</a></td>
    </tr>
    <tr>
      <th>Design Prototype</th>
      <td><a href="https://xd.adobe.com/view/86332314-3f35-4ae0-8cff-1c4c1183261d-d360/" target="_blank">Desktop Prototype</a> </br>
      <a href="https://xd.adobe.com/view/d4fb7744-1648-4362-a14d-445f3494c655-81a8/" target="_blank">Mobile Prototype</a></td>
    </tr>
    <tr>
      <th>Style Guide</th>
      <td><a href="https://xd.adobe.com/view/69f09dc7-9e38-47c7-940b-56428cee7374-3ca3/" target="_blank">Style Guide</a></td>
    </tr>
    <tr>
      <th>Kanban Board</th>
      <td><a href="https://trello.com/invite/b/q1EZUyWP/ATTIe5fafbf1bc039f6d13382af9f3fb385aE35FAE4F/semester-project" target="_blank">Project Board Link</a></td>
    </tr>
    <tr>
      <th>Repository</th>
      <td><a href="https://github.com/Christonn93/Semester-Project-2" target="_blank">Project Repository</a></td>
    </tr>
    <tr>
      <th>Hosted Demo</th>
      <td>
        <a href="https://auction-garage.christopher-tonnesland.no/pages/user/dashboard/index.html">Website</a>
      </td>
    </tr>
  </tbody>
</table>

------

## About and Contact

The author of this project is Christopher Tønnesland

<div style="margin-bottom: 25px;">
<div align="center" style="display: flex; gap: 5px; flex-wrap: wrap;">
    <a href="mailto:christopher.tonnesland@gmail.com"><img img src="https://img.shields.io/badge/gmail-%23EA4335.svg?style=plastic&logo=gmail&logoColor=white" alt="Gmail"/></a>
    <a href="https://github.com/christonn"><img src="https://img.shields.io/badge/github-%23181717.svg?style=plastic&logo=github&logoColor=white" alt="GitHub"/></a>
    <a href="https://wa.me/+4745481637"><img src="https://img.shields.io/badge/whatsapp-%2325D366.svg?style=plastic&logo=whatsapp&logoColor=white" alt="Whatsapp"/></a>
    <a href="https://linkedin.com/in/christopher tønnesland"><img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?style=plastic&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
    <a href="https://www.facebook.com/7oSkaaa"><img src="https://img.shields.io/badge/facebook-%231877F2.svg?style=plastic&logo=facebook&logoColor=white" alt="Facebook"/></a>
    <a href="https://codepen.io/christonn93" target="blank"><img src="https://img.shields.io/badge/Codepen-000000?style=plastic&logo=codepen&logoColor=white" alt="christonn93"/></a>
</div>
</div>

------
