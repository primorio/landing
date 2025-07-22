This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Configuration

For email notifications and Strapi blog integration to work, you need to create a `.env.local` file in the root directory with the following configuration:

```bash
# SMTP Configuration for Email Notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password

# Strapi Configuration for Blog
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-api-token
```

**Note:** For Gmail, you'll need to use an App Password instead of your regular password. Enable 2FA on your Google account and generate an App Password at: https://support.google.com/accounts/answer/185833

**Strapi Setup:**

-   Set `NEXT_PUBLIC_STRAPI_URL` to your Strapi instance URL (e.g., `https://your-strapi-instance.com`)
-   Set `STRAPI_API_TOKEN` to a read-only API token generated in your Strapi admin panel
-   Make sure your Strapi instance has an "article" collection type with the following fields:
    -   title (Text)
    -   slug (UID based on title)
    -   content (Rich Text - Blocks)
    -   excerpt (Text, optional)
    -   featuredImage (Media, optional)
    -   author (Relation to User, optional)
    -   categories (Relation to Category collection, optional)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
