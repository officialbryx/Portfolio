# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key**

## Step 5: Update Environment Variables

Update your `.env` file with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

## Step 6: Test the Form

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check if you receive the email

## Template Variables Available:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (recipient)

## Free Tier Limits:

- 200 emails per month
- EmailJS branding in emails
- Basic support

For production use, consider upgrading to a paid plan for more emails and no branding.

## Troubleshooting:

- Make sure all environment variables are set correctly
- Check EmailJS dashboard for delivery status
- Verify your email service connection
- Check browser console for any errors
