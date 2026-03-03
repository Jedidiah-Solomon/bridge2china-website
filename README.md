# Bridge2China Platform

Visit: [https://bridge2china.jedidiahsolomon.name.ng](https://bridge2china.jedidiahsolomon.name.ng/)

**Bridge2China** connects businesses globally with reliable sourcing, logistics, payment solutions, and business consultation services. We bridge opportunities between continents with expert-driven expertise.

## 🌐 Website Overview

Bridge2China is a modern, responsive web platform that showcases:

- **Sourcing Solutions** — Product & supplier sourcing services
- **Logistics** — Air and sea freight options
- **Payment Solutions** — Secure payment handling
- **Study Services** — Admission processing for international education
- **Business Consultation** — Expert guidance on China business operations

## 🛠 Tech Stack

| Layer                  | Technology           |
| ---------------------- | -------------------- |
| **Frontend Framework** | React 18             |
| **Language**           | TypeScript           |
| **Build Tool**         | Vite 5               |
| **Styling**            | Tailwind CSS         |
| **UI Components**      | shadcn/ui            |
| **Animation**          | Framer Motion        |
| **HTTP Client**        | TanStack React Query |
| **Form Handling**      | React Hook Form      |
| **Date Picker**        | date-fns             |
| **State Management**   | React Hooks          |
| **Code Quality**       | ESLint               |
| **Testing**            | Vitest               |

## 📋 Key Features

✅ **Responsive Design** — Mobile-first, fully responsive layout  
✅ **Contact Form** — Integrated with FormSubmit for submissions  
✅ **Meeting Booking** — Linked to Setmore scheduling  
✅ **SEO Optimized** — Comprehensive meta tags and canonical URLs  
✅ **Dynamic Favicon** — Custom branding with favicon  
✅ **File Uploads** — Support for PDF, DOC, and image attachments (max 10MB)  
✅ **Animation** — Smooth scroll and fade-in animations  
✅ **Accessible** — WCAG standards compliance

## 🔗 Third-Party Services

- **Form Submission**: [FormSubmit](https://formsubmit.co/) — Submissions sent to onwubikojedidiah@gmail.com
- **Meeting Scheduler**: [Setmore](https://go.setmore.com/) — Book meetings at https://bridge2china.setmore.com

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (install with [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone <THE_GIT_URL>

# Navigate to project
cd bridge-2-china-website

# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

### Code Quality

```bash
# Run linter
npm run lint

# Run tests
npm run test
npm run test:watch
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx               # Navigation with dynamic scroll styling
│   ├── ContactForm.tsx          # Form with FormSubmit integration
│   ├── HeroBanner.tsx           # Hero section
│   ├── Footer.tsx               # Footer with links
│   ├── FAQSection.tsx           # Frequently asked questions
│   ├── TalkToUsModal.tsx        # CTA modal
│   └── ui/                      # shadcn/ui components
├── pages/
│   ├── Index.tsx                # Homepage
│   ├── About.tsx                # About page
│   ├── Services.tsx             # Services page
│   ├── Contact.tsx              # Contact page
│   └── NotFound.tsx             # 404 page
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── App.tsx                      # Main app component
└── main.tsx                     # React DOM entry
```

## 🎨 Customization

### Update Meta Tags

Edit `index.html` for SEO meta, title, description, OpenGraph, and Twitter Card settings.

### Modify Contact Email

Update the FormSubmit endpoint in `src/components/ContactForm.tsx` to change recipient email.

### Change Booking Link

Update the Setmore URL in `src/components/ContactForm.tsx` (success popup "Book a Meeting" button).

### Update Colors & Branding

- Colors defined in `tailwind.config.ts`
- Logo in `src/assets/logo.jpg`
- Favicon in `public/favicon.ico`

## 📦 Build Output

Production builds output to `dist/` with:

- Optimized CSS (~66 KB gzipped)
- Minified JavaScript (~157 KB gzipped)
- Optimized images with hashed filenames
- Sourcemaps for debugging

## 🔐 Security & Performance

- ✅ File upload validation (max 10MB, allowed types: PDF, DOC, DOCX, JPG, JPEG, PNG, GIF)
- ✅ reCAPTCHA enabled on FormSubmit (default)
- ✅ Responsive images and lazy loading
- ✅ SEO-friendly meta tags
- ✅ Canonical URL configuration

## 📞 Support & Contact

For inquiries or form submissions: **onwubikojedidiah@gmail.com**  
Book a meeting: https://bridge2china.setmore.com

Form submission: https://formsubmit.co/
Calendar: https://go.setmore.com/

---

**Bridge2China** — Bridging Businesses. Building Futures. 🌍
