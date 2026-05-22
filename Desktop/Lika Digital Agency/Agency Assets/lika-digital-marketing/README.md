# Lika Digital Marketing

This is a Next.js landing page built for Vercel deployment with a config-driven content system in `config/client.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.example` in Vercel → Project Settings → Environment Variables.
4. Redeploy.

## Form email notifications

Both the hero form and the contact form submit to `app/api/lead/route.ts`.

To receive lead emails, set these variables:

```bash
RESEND_API_KEY=your_resend_api_key
LEAD_FROM_EMAIL=leads@yourdomain.com
LEAD_NOTIFICATION_EMAIL=likadigitalmarketing@gmail.com
```

- `RESEND_API_KEY`: get this from your Resend account.
- `LEAD_FROM_EMAIL`: must be from a domain verified in Resend.
- `LEAD_NOTIFICATION_EMAIL`: inbox that receives form notifications.
- If `LEAD_NOTIFICATION_EMAIL` is omitted, the app falls back to the email in `config/client.ts`.

## Recommended pre-deploy checklist

- Set the real production domain in `config/client.ts`.
- Confirm `header.logo.imageSrc` and all image paths load correctly.
- Test one hero form submission locally.
- Test one contact form submission locally.
- Add all required Vercel environment variables.
- Verify your sender domain in Resend before launching.

## Build commands

```bash
npm run build
npm run start
```
