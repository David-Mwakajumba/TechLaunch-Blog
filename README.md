# TechLaunch-Blog

## Project Overview

A modern blog application built with:

-   Laravel 10
-   Inertia.js
-   React TypeScript
-   Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:

-   PHP 8.1+
-   Composer
-   Node.js (18.x or later)
-   npm
-   MySQL or PostgreSQL

## Local Setup Instructions

### 1. Clone the Repository

git clone https://github.com/David-Mwakajumba/TechLaunch-Blog.git
cd your-blog-app

# Install PHP dependencies. Make sure composer is installed https://getcomposer.org/

#### 2. Install Backend Dependencies

         composer install

### 3. Environment Configuration

        # Copy environment example file
        cp .env.example .env

        # Generate application key
        php artisan key:generate

### 4. Database Setup

        # Create a new MySQL database
        # Update .env file with your database credentials
        # DB_CONNECTION=mysql
        # DB_HOST=127.0.0.1
        # DB_PORT=3306
        # DB_DATABASE=tech_launch
        # DB_USERNAME=your_username
        # DB_PASSWORD=your_password

        # Run database migrations
          php artisan migrate

# 5. Seed database with sample data

     php artisan db:seed

# 6. Install Frontend Dependencies

        # Install npm packages
          npm install

        # Compile assets
          npm run dev

# 7. Install Frontend Dependencies

        # php artisan serve
