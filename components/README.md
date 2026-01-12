# Components Organization

This directory contains all React components organized by their usage and purpose:

## 📁 Structure

### `/blog`
Blog-related components
- `BlogCard.tsx` - Individual blog post card
- `BlogReactions.tsx` - Like/dislike functionality
- `CodeBlock.tsx` - Syntax highlighted code blocks
- `MarkdownRenderer.tsx` - Renders markdown content

### `/common`
Shared/utility components used across the application
- `Contact-Me.tsx` - Contact form and information
- `Home.tsx` - Homepage main content
- `Magazine-Layout.tsx` - Magazine-style layout wrapper
- `Social-Links.tsx` - Social media links component
- `theme-provider.tsx` - Theme context provider

### `/data`
Data files and configurations
- `projects.js` - Project data
- `selectedProjectsData.ts` - Featured projects data

### `/layout`
Navigation and layout components
- `Header.tsx` - Main navigation header
- `Footer.tsx` - Site footer
- `Secondary-Header.tsx` - Secondary navigation

### `/portfolio`
Portfolio and project-related components
- `Contribution.tsx` - GitHub contributions display
- `Portfolio-Card.tsx` - Main portfolio card
- `Project-Detail-Card.tsx` - Detailed project information
- `Public-Activity.tsx` - Public activity feed
- `Selected-Projects.tsx` - Featured projects section
- `SelectedProjectCard.tsx` - Individual project card

### `/profile`
Personal information and skills components
- `About.tsx` - About me section
- `Education.tsx` - Education history
- `Experience.tsx` - Work experience
- `Languages.tsx` - Programming languages
- `Profile-Container.tsx` - Main profile container
- `Skill.tsx` - Skills display
- `Testimonials.tsx` - Client testimonials

### `/ui`
Reusable UI components (shadcn/ui)
- Various UI primitives and components