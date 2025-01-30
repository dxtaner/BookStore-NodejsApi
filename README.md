Book Node.js Project Description
================================

Getting Started
---------------

1.  Clone the project:

    git clone (https://github.com/dxtaner/BookStore-NodejsApi)

3.  Navigate to the project directory:

    cd BookStore-NodejsApi

5.  Install dependencies:

    npm install

7.  Add the MongoDB connection URL to the `.env` file:

    DB_URL=<mongodb-connection-url>

9.  Start the application:

    npm start

API Routes
----------

### Users

*   `GET /api/users` - Lists all users.
*   `GET /api/users/:id` - Retrieves a specific user.
*   `POST /api/users` - Creates a new user.
*   `PUT /api/users/:id` - Updates a specific user's information.
*   `DELETE /api/users/:id` - Deletes a specific user.

### Authors

*   `GET /api/authors` - Lists all authors.
*   `GET /api/authors/:id` - Retrieves a specific author.
*   `POST /api/authors` - Creates a new author.
*   `PUT /api/authors/:id` - Updates a specific author's information.
*   `DELETE /api/authors/:id` - Deletes a specific author.

### Books

*   `GET /api/books` - Lists all books.
*   `GET /api/books/:id` - Retrieves a specific book.
*   `POST /api/books` - Creates a new book.
*   `PUT /api/books/:id` - Updates a specific book's information.
*   `DELETE /api/books/:id` - Deletes a specific book.

Data Model
----------

### User Model

*   `name` - User's name (String).
*   `email` - User's email address (String).
*   `age` - User's age (Number).

### Author Model

*   `name` - Author's name (String).
*   `birthDate` - Author's date of birth (Date).
*   `nationality` - Author's nationality (String).

### Book Model

*   `title` - Book title (String).
*   `author` - Reference to the Author model.
*   `publicationDate` - Book's publication date (Date).
*   `genre` - Book's genre (String).

Additional Information
----------------------

*   The project uses a MongoDB database. The connection is set via the `DB_URL` environment variable.
*   Built with Express.js, using routers to handle HTTP requests.
*   Separate routes are available for users, authors, and books.
*   Data models and routes are located in the `/models` and `/routes` directories.

License
-------

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). For more details, see the `LICENSE` file.
