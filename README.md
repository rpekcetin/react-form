# Redux Form Project

This project demonstrates a multi-step form implementation using Redux Form in a React application. It covers various aspects of form handling, including validation, asynchronous field validation, and conditionally rendered fields based on user input. The project structure is organized to showcase a practical example of managing complex form logic in a scalable and maintainable way.
## Deployment

This project is already deployed on Vercel. You can view the live application at the following URL:

[Live Application URL](https://react-form-pek.vercel.app/)
## Usage
Follow the on-screen instructions to navigate between form steps. Fill in the required information at each step and use the "Next" button to proceed to the next step. Once all steps are completed, submit the form.

## Reminding
In the first stage of the form, there is asynchronous validation in the name section. You can test asynchronous validation by using the product names Phone, Tshirt and Nail Polish to avoid re-entering an existing product name.
## Features

- Multi-step form navigation
- Synchronous and asynchronous validation
- Conditional rendering of form fields
- Integration of custom input components
- Usage of Material UI for 
- State management with Redux Form

## Getting Started

To run this project locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/rpekcetin/react-form.git
cd react-form
npm install
npm run start
```

## Tech Stack

**Client:** React, redux-form, MaterialUI, redux, typescript

**Deploy:** Vercel

## Screenshots

**Product information**

In this form, information about the product is requested. Phone, Tshirt and Nail Polish are used for asynchronous verification of the product name. All fields are mandatory and if you select an electronic product in the category field, you must also fill in the warranty period input.

![App Screenshot](https://rpekcetin.github.io/first.jpg)

**Pricing and Stock**

In this field, you can enter the product price, stock and discount rate if you wish. Negative numbers are prohibited in all fields.

![App Screenshot](https://rpekcetin.github.io/second.jpg)

**Product image**

In this field, you need to enter a picture for the products. Please enter at least 1 product picture. Since your information is not recorded, you can use it as you wish.

![App Screenshot](https://rpekcetin.github.io/third.jpg)

**Delivery Information**

In this field, information such as the delivery method of the product, the return period depending on whether there are return options or not, the cargo company and the shipping fee are requested. All fields are mandatory.

![App Screenshot](https://rpekcetin.github.io/fourth.jpg)

**Final Form**

Finally, you can check all the information you have entered for the product and send the product by clicking on the Privacy policies.

![App Screenshot](https://rpekcetin.github.io/final.jpg)