# Console-Store


## Description

The project is an store that sells video game consoles to customers, with the option of changing the inventory regarding the products.

## Technologies 

Utilized CSS, MongoDB, ReactJS, Mongoose, ExpressJS


## Challenges

Some of the technical challenges I faced during the project were:

- reducing the amount/quantity of products available when clicking on the 'buy' option

- adding the product to a cart and establishing a cart route/page


## Future Implementations

- Adding a cart route/page
- Stylizing the page more (animations)


## Installation

- Fork or clone the repo into a repository
- Some packages that may need to be installed:
    - dotenv
    - express
    - express-react-views
    - method-override
    - mongoose
    - react
    - react-dom
- Need to create a MongoDB Atlas account and follow steps to linking cluster to the project


## Routes

Routes available as store staff

| VERB  | PATH | Description |
| ------------- | ------------- | ------------ |
| GET  | /products  | index of products from store view |
| GET  | /products/new  | page to add new product |
| GET  | /products/about  | page displays store information |
| GET  | /products/contact  | page to contact the store |
| DELETE  | /products/:id  | delete a product |
| PUT  | /products/:id  | update a product |
| PUT  | /products/:id/buy  | buying the product |
| POST  | /products | add new product |
| GET  | /products/:id/edit  | edit information about a product |
| GET  | /products/:id  | show page of a product |


Routes available for customers

| VERB  | PATH | Description |
| ------------- | ------------- | ------------ |
| GET  | /products/customer  | index of products customers can view |
| GET  | /products/customer/about  | about page that customer can view |
| GET  | /products/customer/contact  | contact page that customer can view |
| PUT  | /products/customer/:id/buy  | customers buying the product |
| GET  | /products/customer/:id  | show page of a product for the customer |


## License

[MIT]
(https://choosealicense.com/licenses/mit/)
