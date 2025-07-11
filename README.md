
# Nikosonic E-commerce

Nikosonic is a feature-rich, full-stack e-commerce platform built with a modern, server-centric approach using Next.js. This project demonstrates a complete backend implementation using Next.js API Routes, handling everything from complex database queries and user authentication to file uploads and payment processing. It is a testament to what can be achieved by a developer with a strong command of the entire web stack.

## Live Demo

https://nikosonic-ecommerce.vercel.app/

## Key Features

The platform is divided into a comprehensive set of features for users, e-commerce functionality, and administration.

### User & Profile Features
- **Secure Authentication**: Robust user registration and login handled by **Auth0**, including social providers and passwordless options.
- **Comprehensive User Profiles**: Users have a dedicated profile page where they can:
    - **Update Personal Details**: Change their name and other information.
    - **Upload Avatars**: A custom image upload feature using **Vercel Blob Storage**.
    - **Manage Addresses**: Full CRUD functionality for multiple shipping and billing addresses.
- **Order History**: Users can view a detailed list of their past orders and check their statuses.

### E-commerce & Shopping Features
- **Advanced Server-Side Filtering**: A highly performant product filtering system that runs entirely on the backend. Users can filter by categories, brands, colors, and price range, with all logic executed via direct **PostgreSQL** queries to minimize client-side load.
- **Dynamic Product Pages**: View product details, image galleries, user reviews, and stock status.
- **Full Shopping Cart**: A seamless cart experience with features to add, remove, and update item quantities.
- **Secure Payment Processing**: Checkout powered by **Stripe**, ensuring secure and reliable transactions.
- **Fuzzy Search**: An efficient and user-friendly search for finding products quickly.

### Admin & Content Features
- **Full-Fledged Admin Dashboard**: A protected area for administrators to manage the platform:
    - **Product Management**: Full CRUD (Create, Read, Update, Delete) capabilities for all products.
    - **User Management**: View and manage user roles and details.
- **Role-Based Access Control**: The application distinguishes between regular users and administrators, restricting access to sensitive areas.
- **Integrated Blog**: A complete content management system for blog posts, allowing admins to create, edit, and delete articles.

## Architecture & Tech Stack

This project is a showcase of a modern full-stack application built entirely within the Next.js ecosystem. The architecture is designed to be scalable, performant, and secure.

- **Full-Stack Framework**: **[Next.js](https://nextjs.org/) (React)** serves as both the frontend framework and the backend server, using **API Routes** to handle all business logic.
- **Database**: **[Vercel Postgres](https://vercel.com/storage/postgres)** is used as the primary database. All interactions are handled through performant, raw SQL queries for fine-grained control over data retrieval and manipulation.
- **Authentication**: **[Auth0](https://auth0.com/)** provides a secure and scalable authentication solution, integrated with custom middleware for role-based access control.
- **File Storage**: **[Vercel Blob](https://vercel.com/storage/blob)** handles all file uploads, providing a robust solution for user avatars and product images.
- **Payment Gateway**: **[Stripe](https://stripe.com/)** is integrated for all payment processing, with webhooks to confirm order status.
- **UI & Styling**:
    - **[NextUI](https://nextui.org/)**: A modern and beautiful React UI library.
    - **[Tailwind CSS](https://tailwindcss.com/)**: For utility-first styling and a responsive design.
    - **[Framer Motion](https://www.framer.com/motion/)**: Used to create fluid and engaging animations throughout the application.
- **Internationalization (i18n)**: **`next-intl`** is used to provide full support for multiple languages (English and Georgian).
- **Deployment**: The entire application is hosted on **[Vercel](https://vercel.com/)**, leveraging its seamless integration with Next.js for CI/CD and hosting.


## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or later recommended)
- [pnpm](https://pnpm.io/) (or npm/yarn)
- Access keys for the services mentioned below.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Nika-Rusishvili/nikosonic-ecommerce.git
    cd nikosonic-ecommerce
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following variables.

    ```bash
    # Base URL
    BASE_URL="http://localhost:3000"

    # Auth0 - https://auth0.com/
    # The AUTH0_SECRET can be generated with: openssl rand -hex 32
    AUTH0_SECRET="YOUR_AUTH0_SECRET"
    AUTH0_BASE_URL="http://localhost:3000"
    AUTH0_ISSUER_BASE_URL="YOUR_AUTH0_DOMAIN"
    AUTH0_CLIENT_ID="YOUR_AUTH0_CLIENT_ID"
    AUTH0_CLIENT_SECRET="YOUR_AUTH0_CLIENT_SECRET"

    # Stripe - https://stripe.com/
    STRIPE_SECRET_KEY="YOUR_STRIPE_SECRET_KEY"

    # Vercel Storage - https://vercel.com/
    # You can get these by creating a new Postgres database and Blob store on Vercel
    # and connecting them to your local project.
    POSTGRES_URL="YOUR_VERCEL_POSTGRES_CONNECTION_STRING"
    BLOB_READ_WRITE_TOKEN="YOUR_VERCEL_BLOB_TOKEN"

    # Google Maps - https://console.cloud.google.com/
    NEXT_PUBLIC_GOOGLE_MAPS_API="YOUR_GOOGLE_MAPS_API_KEY"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contact

Nika Rusishvili - nika.rusishvili.95@gmail.com - https://www.linkedin.com/in/nika-rusishvili-69a641228/

