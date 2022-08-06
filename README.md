
# Casino Affiliates Website

A demo casino affiliates website designed using Vue.js and Laravel Framework


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

- [@phemorah](https://www.github.com/phemorah)


## Deployment

To deploy this project run

```bash
    - Clone/download the project on your local pc

    - open up your terminal and cd to the project directory

    - run composer update or composer install to setup all required laravel libraries and packages

    - start up the laravel server by running php artisan serve

    - rename .env.example to .env

    - open the new .env file

    - To generate the App key in the (.env) file,
    simply type the following command in the terminal:
    php artisan key:generate

    - Be sure to keep the DB_CONNECTION as sqlite
       e.g: DB_CONNECTION=sqlite

    - Remove DB_DATABASE=laravel, DB_USERNAME and DB_PASSWORD from .env file

    - Create a new file database.sqlite in the project database folder/directory

    - Copy and paste this command php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider" to publish Laravel Sactum Auth

    - Run php artisan migrate command to migrate the
    database tables

    - Download DB Browser to see the database and migrated tables

    - Run npm install the setup node modules

    - Go to the homepage to register your subscribers

    You are all set.. Goodluck!


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

DB_CONNECTION=sqlite


## Documentation

[Documentation](https://linktodocumentation)


## Demo

Insert gif or link to demo

