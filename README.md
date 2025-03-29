# 🏪 Rentify - Frontend

## 📌 Overview

Rentify is a rental house listing platform built with Next.js (App Router). It provides features for **tenants**, **landlords**, and **admins** to manage rental properties, requests, and payments.

## 🌍 Live URL

Want to test your own, please use this link
[Live Deployment](https://rentify-client-app.vercel.app/)

## 🛠️ Features

-   🔐 **Authentication** (User Registration & Login, Role-Based Access)
-   🏠 **Public Routes** (Home, All Listings, Listing Details, About Us)
-   🔒 **Private Routes** (User & Admin Dashboard)
-   🛍️ **Product Management** (View, Search, Filter)
-   💳 **Payment Integration** (SSLCommerz)
-   🎨 **Fully Responsive & Intuitive UI**

## 🏗️ Tech Stack

-   **Frontend**: Next.js 14 (App Router), React.js, Tailwind CSS
-   **NextAuth.js**: For authentication
-   **Payment Gateway**: SSLCommerz

## 🏃‍♂️ Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/krHasan/ph-L2-M5-B4-assignment-client.git rentify-frontend
    cd rentify-frontend
    ```
2. Install dependencies:
    ```bash
    npm install --legacy-peer-deps
    ```
3. Set up environment variables in a `.env` file:
    ```env
    NEXT_PUBLIC_BASE_API=http://54.253.12.199:5000/api/v1
    NEXT_PUBLIC_FRONTEND_URL=https://rentify-client-app.vercel.app
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Available Routes

### Public Routes

```
✅️ Login				/login
✅️ Registration			/register
✅️ Forgot Password		/forgot-password
✅️ Reset Password		/reset-password


✅️ Home					/
✅️ About Us				/about-us
✅️ Rental Houses		/rental-houses
✅️ Rental House Details	/rental-houses/[listingId]
```

### Private Routes

```
✅️ Profile					/profile

✅️ Landlord Dashboard	    /landlord
✅️ Add Rental House         /landlord/add-rental-house
✅️ Update Rental House      /landlord/update-rental-house/[listingId]
✅️ Manage Rental Houses     /landlord/manage-rental-houses
✅️ Rental House Request 	/landlord/rental-house-request

✅️ Tenant Dashboard			/tenant
✅️ Rental House Request 	/tenant/rental-house-request

✅️ Admin Dashboard			/admin
✅️ Manage Users				/admin/manage-users
✅️ Manage Rental Houses		/admin/manage-rental-houses
✅️ Rental House Request		/admin/rental-house-request

✅️ Payment		            /success
```

## Contribution

Contributions are welcome! Please fork the repository and create a pull request.

## License

MIT (do whatever you want to do :smile: )

Made by [krHasan](https://www.linkedin.com/in/kr-hasan/)

```

```
