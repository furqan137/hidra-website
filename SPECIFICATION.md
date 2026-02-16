# Hidra Vault - Complete Marketing Website Specification

## Project Overview

**Hidra Vault** is a secure password management application for iOS designed to protect users' sensitive data with military-grade encryption. This marketing website serves as the official presence for the app on the App Store and provides essential information about the product, privacy policies, and support.

**Website URL:** https://hidravault.app

---

## Website Pages

### 1. **Home Page** (`/`)
**Purpose:** Primary landing page showcasing the app and its key benefits

**Key Sections:**
- **Hero Section**
  - Headline: "Your passwords deserve better protection"
  - Subheading: Overview of Hidra Vault's security features
  - Call-to-Action buttons:
    - "Download on App Store" (primary)
    - "Learn More" (secondary, links to features)
  - App preview placeholder (can be replaced with actual screenshot)

- **Features Section** (6 features in 3x2 grid)
  - End-to-End Encryption
  - iOS Optimized
  - Biometric Lock (Face ID/Touch ID)
  - Password Generator
  - Breach Monitoring
  - Auto-Fill Integration
  - Each feature includes icon, title, and description

- **Security Section**
  - Detailed security information
  - Checklist of security features:
    - AES-256 Encryption Standard
    - End-to-End Encrypted Sync
    - Zero-Knowledge Architecture
    - Regular Security Audits
    - Open Source Components
    - No Cloud Storage of Passwords
  - Security image placeholder

- **Trust Section**
  - Statistics display:
    - 50K+ Active Users
    - 100% Data Encrypted
    - 4.8★ App Store Rating

- **Call-to-Action Section**
  - Final conversion section encouraging download

### 2. **About Page** (`/about`)
**Purpose:** Tell the story of Hidra Vault and build trust

**Key Sections:**
- **Mission Statement**
  - Company mission and vision
  - Commitment to privacy and security

- **Core Values** (4 columns)
  - User Privacy
  - Security First
  - User Empowerment
  - Continuous Innovation

- **Company Story**
  - Origin story
  - Journey and growth
  - Commitment to users

- **By The Numbers**
  - 50K+ Active Users
  - 5M+ Passwords Protected
  - 100% Encrypted
  - 4.8★ App Store Rating

- **Technology Stack**
  - AES-256 Encryption
  - End-to-End Encryption
  - Zero-Knowledge Architecture
  - Biometric Security
  - Regular Audits
  - Open Source Components

### 3. **Privacy Policy Page** (`/privacy`)
**Purpose:** Comply with Apple App Store requirements

**Key Sections:**
- Introduction
- Information We Collect
  - Personal Information (none collected)
  - Automatically Collected Information
  - Contact Information
- How We Use Information
- Data Security
  - AES-256 encryption details
  - Local device storage
  - No cloud storage of passwords
- Sharing of Information
- User Rights and Choices
- Children's Privacy
- Changes to Policy
- Contact Information

**Important:** This page fulfills Apple's requirement for privacy policy before app submission.

### 4. **Terms of Service Page** (`/terms`)
**Purpose:** Legal protection and user agreement

**Key Sections:**
- Agreement to Terms
- Use License
  - Non-exclusive license
  - Prohibited activities
- User Responsibilities
- Acceptable Use Policy
- Data Storage and Backup
- Third-Party Content and Links
- Disclaimer of Warranties
- Limitation of Liability
- Indemnification
- Modification of Terms
- Termination
- Governing Law
- Contact Information

**Important:** This page is recommended by Apple for app submissions.

### 5. **Contact Page** (`/contact`)
**Purpose:** Provide support and communication channels

**Key Sections:**
- **Contact Methods** (3 cards)
  - Email: hidra.supp@gmail.com
  - Contact Form (24-48 hour response)
  - In-app Support (7 days a week)

- **Contact Form**
  - Name field
  - Email field
  - Subject dropdown:
    - Report a Bug
    - Feature Request
    - Technical Support
    - Account Help
    - Security Concern
    - Other
  - Message textarea
  - Submit button
  - Success message confirmation

- **FAQ Section**
  - Is Hidra Vault free to use?
  - How secure is Hidra Vault?
  - Can I sync passwords across devices?
  - What if I forget my master password?
  - How do I report a security vulnerability?

---

## Header & Navigation

**Desktop Navigation:**
- Hidra Vault Logo (clickable home link)
- Nav Menu:
  - Features (links to #features)
  - Security (links to #security)
  - Privacy (links to /privacy)
  - Contact (links to /contact)
- Download Button (links to App Store)

**Mobile Navigation:**
- Hamburger menu toggle
- Same navigation items in dropdown
- Download button in menu

**Header Features:**
- Fixed header with blur effect
- Responsive design
- Active link indicators

---

## Footer

**Footer Sections:**
- **Company Info**
  - Logo and tagline
  
- **Product Links**
  - Features
  - Security
  - Download
  
- **Legal Links**
  - Privacy Policy
  - Terms of Service
  
- **Support Links**
  - Contact Us
  - Email Support

**Footer Bottom:**
- Copyright notice
- Privacy statement

---

## Design System

### Color Palette
- **Primary:** Blue (#1e40af) - Used for buttons, links, and highlights
- **Secondary:** Light Gray (#f0f2f5) - Used for background sections
- **Foreground:** Dark Gray (#0f1419) - Used for text
- **Muted:** Medium Gray (#808080) - Used for secondary text
- **Border:** Light Gray (#e5e7eb) - Used for dividers
- **Accent:** Blue (#1e40af) - Used for accents and highlights

### Typography
- **Headings:** Bold weights (600-700) for hierarchy
- **Body:** Regular weight (400) for readability
- **Links:** Hover states with color transitions

### Spacing
- Padding: 4px, 8px, 16px, 24px, 32px, 48px, 64px scale
- Margins: Consistent spacing with grid alignment
- Gap: Flexbox gap for consistent spacing

### Border Radius
- 0.75rem for rounded corners (12px)
- 3xl for large rounded elements

---

## Technical Implementation

### Technology Stack
- **Framework:** Next.js 16 (React)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

### File Structure
```
/app
  /layout.tsx - Root layout with metadata
  /page.tsx - Home page
  /privacy/page.tsx - Privacy policy
  /terms/page.tsx - Terms of service
  /contact/page.tsx - Contact page
  /about/page.tsx - About page
  /globals.css - Global styles and design tokens
/components
  /header.tsx - Navigation header
  /footer.tsx - Footer component
/public
  /sitemap.xml - SEO sitemap
  /robots.txt - SEO robots file
```

### Key Features
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Metadata, sitemap, robots.txt
- **Accessible** - ARIA labels, semantic HTML
- **Dark Mode Support** - CSS variables for theming
- **Fast Performance** - Next.js optimization

---

## Apple App Store Requirements

This website fulfills all Apple App Store requirements:

✅ **Privacy Policy** - Detailed privacy policy page at /privacy
✅ **Terms & Conditions** - Terms of service page at /terms
✅ **Contact Information** - Support email (hidra.supp@gmail.com) provided
✅ **App Screenshots** - Placeholder sections ready for actual screenshots
✅ **App Description** - Comprehensive feature descriptions on homepage
✅ **Company Information** - About page with company details
✅ **Support Page** - Contact page with FAQ

---

## Deployment Instructions

### For Apple App Store Submission:

1. **Marketing URL (Required)**
   - Use: https://hidravault.app
   - This is the primary support/information URL for your app

2. **Privacy Policy URL (Required)**
   - Use: https://hidravault.app/privacy
   - Apple requires a valid privacy policy URL

3. **Support URL (Recommended)**
   - Use: https://hidravault.app/contact
   - Provides users with support options

4. **Screenshots & Previews**
   - The website has placeholder sections for:
     - App preview on home page (Hero section)
     - Security features image
   - Replace placeholders with actual app screenshots in:
     - `/app/page.tsx` - Hero section image area
     - `/app/page.tsx` - Security section image area

---

## Configuration

### Environment Variables
No environment variables required for basic deployment.

### Email Configuration
- Support email: hidra.supp@gmail.com
- Update in:
  - `/components/footer.tsx`
  - `/components/header.tsx`
  - `/app/contact/page.tsx`

---

## SEO Optimization

### Meta Tags
- Title: "Hidra Vault - Secure Password Manager for iOS"
- Description: "Keep your sensitive data safe with Hidra Vault..."
- Theme Color: #1e40af
- Open Graph tags for social sharing

### Sitemap
- `public/sitemap.xml` - XML sitemap for search engines

### Robots File
- `public/robots.txt` - Search engine crawling instructions

---

## Content Guidelines

### Placeholders to Replace
1. **App Preview Images**
   - Home page hero section
   - Security section
   - Replace with actual iOS screenshots

2. **Statistics**
   - 50K+ Active Users - Update with real numbers
   - 4.8★ App Rating - Update after launch
   - 5M+ Passwords Protected - Update with real data

3. **Contact Information**
   - Email: hidra.supp@gmail.com (provided)
   - Update other contact methods as needed

4. **Support Hours**
   - Current: "24-48 hour response time"
   - Update based on actual support capability

---

## Maintenance

### Regular Updates
- Update stats and metrics quarterly
- Update user testimonials/reviews
- Monitor and fix any broken links
- Keep privacy policy current with app changes
- Update terms of service as needed

### Monitoring
- Check for broken links monthly
- Monitor form submissions
- Review app reviews and feedback
- Update FAQ based on support tickets

---

## Future Enhancements

1. **Blog/News Section**
   - Security tips and best practices
   - Product updates
   - Industry news

2. **User Testimonials**
   - Real user reviews and ratings
   - Trust-building social proof

3. **Video Tutorials**
   - Getting started guides
   - Feature walkthroughs
   - Security explanations

4. **Newsletter**
   - Security updates
   - New features
   - Tips and tricks

5. **Community Forum**
   - User support
   - Feature discussions
   - Bug reports

---

## Support Contact
**Email:** hidra.supp@gmail.com

This comprehensive marketing website is now ready for Apple App Store submission. All required pages and information are in place to meet App Store guidelines.
