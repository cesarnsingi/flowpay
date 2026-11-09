# FlowPay — Next.js Payment Landing Page

A responsive fintech landing page concept recreated from the supplied FrontendPro Payment Landing Page challenge and expanded into a complete Next.js App Router project.

## Stack
- Next.js 15 App Router
- React 19 + TypeScript
- Tailwind CSS (with a custom responsive design system)
- lucide-react icons

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Use the EN / PT control in the header to switch languages.

## Included interactions
- English, Portuguese and French language switcher (EN / PT), including the mobile menu
- Locale-aware number formatting in the currency preview
- Responsive navigation with a working mobile hamburger menu
- Clickable dashboard quick actions with feedback notifications
- Interactive currency preview (illustrative fixed demo rates)
- Expandable FAQ accordion
- Email waitlist form with client-side validation and success state
- Responsive layouts and reduced-motion support

## Important
FlowPay is a fictional product concept. The interface does not connect to a bank, process payments, store personal data, or provide live exchange rates. The waitlist form is front-end only; connect it to your preferred backend/email service before production use.

## Project structure
```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  payment-landing.tsx
public/
```
