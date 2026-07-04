# Danur Portfolio

Portfolio website for Danur Isa Prabutama.

## Overview

This site presents selected engineering work in a presentation-style format, with a strong focus on backend systems, DevOps, infrastructure, and technical product development.

Current featured projects:

- Network Monitoring Platform
- Private Cloud Provisioning with OpenNebula and Terraform
- Flutter Delivery Workflow Bug Fixing

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Features

- Monospaced portfolio UI based on `DESIGN-opencode.ai.md`
- True-slide project decks with route-based navigation
- Resume-style home page sections for experience, education, skills, and certifications
- Static asset support for diagrams, screenshots, and downloadable CV

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

## Project Structure

```txt
app/            Next.js routes
components/     Shared UI and deck components
content/        Profile, resume, and project content
lib/            Small utilities
public/         Images, diagrams, and CV assets
```

## Deployment

This project is ready for GitHub and Vercel deployment.

Recommended flow:

1. Push repository to GitHub
2. Import repository into Vercel
3. Set production domain if needed
4. Redeploy

## Notes

- Source CV markdown is stored outside `public/` so it is not exposed directly as a public asset.
- Public CV file remains available at `public/cv/cv.pdf`.
