# todoList-ts
![Todo List Image](public/image/Screenshot%202023-10-08%20at%202.11.19%20PM.png)


This is a simple Todo List application built using TypeScript and Vite. It allows users to create, edit, and delete todo items, providing a straightforward way to manage tasks.

## Features

- **Create Todo**: Add new tasks to your list by typing them into the input field and pressing Enter.
- **Edit Todo**: Click on an existing todo item's edit button to edit its content. You should click outside of the input box to save the edit.
- **Delete Todo**: Remove items from your list by clicking the X button next to them.
- **Clear Input**: The input field is automatically cleared after adding a todo item for a better user experience.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## Enhancements

In addition to the original features, this application has been enhanced in the following ways:

- **Edit Todo**: Users can now click on an existing todo item's edit button to edit its content, providing more flexibility in managing their tasks.
- **Input Field Clearing**: After adding a todo item, the input field is automatically cleared, making it more convenient for users to add multiple tasks quickly.
- **Improved User Experience**: Various user experience improvements have been made to ensure a smoother and more intuitive interaction with the application.

## Prerequisites

Before you begin, ensure you have met the following requirement:

- **Node.js**: You need to have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

Follow these steps to get the Todo List up and running on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MercyAkindele/todoList-ts.git
   `cd todo-list`
2. **Install Dependencies**
    ```bash
    `npm install`
3. **Start Development Server**
    ```bash
    `npm run dev`
4. **Build for Production**
    If you want to build the application for production, you can run:
    ```bash
    `npm run build`

## Project Structure

The project's structure is organized as follows:

-**`src/`**- Contains the source code of the application.

* `model/`-Model of a List and FullList are contained within.
* `templates`-Template of a rendered list.
* `main.ts`-Entry point for the application.

-**`public/`**- Public assets like images.

## Technologies Used

* TypeScript
* Vite
* HTML
* CSS

## Acknowledgments

* This project was created following a TypeScript tutorial by Dave Gray and was enhanced by Mercy Akindele.