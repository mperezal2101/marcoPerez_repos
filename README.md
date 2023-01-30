
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Test BackEnd BP-Deuna!</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


HELLO

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* NestJS
* TypeScript
* CockroachDB

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* NestJS
  ```sh
  npm i -g @nestjs/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mperezal2101/marcoPerez_repos.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Resp HTTP

```bash
# Get organizations
GET http://localhost:3000/organization
Accept: application/json

# Get organization by id
GET http://localhost:3000/organization/1

# Create an organization
POST http://localhost:3000/organization
Content-Type: application/json
 {
  "name": "OpenAI"
 }

# Delete an organization
 DELETE http://localhost:3000/organization/1
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ROADMAP -->
## Checklist

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Nest is [MIT licensed](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Marco Perez Alvarez - mperez.alvarez97@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>