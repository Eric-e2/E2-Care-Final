# E2-Care Landing Page - Backend Integration Contracts

## Overview
Full-stack bilingual landing page (EN/FR) with form submission, PDF generation, and TidyCal integration.

## Frontend Implementation Status ✅
- [x] Complete responsive landing page with all sections
- [x] Bilingual support (EN/FR) with URL routing
- [x] E2-Care design system implemented
- [x] Contact form with validation
- [x] Thank you page with TidyCal placeholder
- [x] Mock data for all sections

## Backend Implementation Needed

### 1. Contact Form API Endpoint
```
POST /api/contact
Body: {
  name: string,
  email: string,
  company?: string,
  role?: string,
  country?: string,
  useCase?: string,
  message?: string,
  language: "en" | "fr"
}
Response: { success: boolean, message: string }
```

### 2. PDF Generation Service
```
GET /api/pdf/download/:language
Response: PDF file stream
- E2-Care_1pager_EN.pdf
- E2-Care_1pager_FR.pdf

Content Structure (1-pager recto):
- Logo + claim "Connected care = peace of mind"
- 5 pillars (2–3 bullets each)
- How it works (Sensors → Relay → Cloud)
- Compliance (GDPR, EU hosting, audit-ready logs, GxP)
- ROI & benefits (fast ROI, fewer incidents, better service)
- CTA: Book a demo + contact@e2.dev
- Footer: E2 Technologies OÜ — Tallinn, Estonia
- Pricing: on request / sur demande
```

### 3. Email Integration
```
POST /api/email/send
- Send form data to contact@e2.dev
- Send confirmation email to user
- Language-specific templates
```

### 4. Analytics & Tracking
```
POST /api/analytics/event
- Track form submissions
- Track PDF downloads
- Track language switches
- Track button clicks
```

## Assets to Generate

### SVG Icons (9 Total) - /public/assets/icons/
1. **elderly-care.svg** - senior figure + motion waves (coral/blue duotone)
2. **pharmacy-monitoring.svg** - medicine box + thermometer
3. **cold-chain-transport.svg** - truck + snowflake
4. **hospital-asset-tracking.svg** - hospital bed + locator pin
5. **smartwatch.svg** - round watch + pulse
6. **pill-dispenser.svg** - pillbox + alert bubble
7. **voice-ai-interaction.svg** - microphone + sound waves
8. **partner-integrator.svg** - handshake / network
9. **roi-peace-mind.svg** - chart + heart overlay

### Dashboard Mockups (5 Total) - /public/assets/dashboards/
1. **behavioral-dashboard.png** - E2-Care: activity, sleep, air quality + score
2. **pharmacy-dashboard.png** - temp grid, 1 coral alert, "Audit Logs" label
3. **co2-map.png** - Cities/Schools: colored ppm dots
4. **asset-tracker.png** - Hospital: mini floorplan + status dots
5. **cold-chain-tracker.png** - route map + temperature curve

Style: Quicksand font, white cards, coral alerts, blue headers

## Integration Points

### Current Mock Data Locations
- `/src/data/content.js` - All bilingual content
- Form submission → mock console.log in ContactSection.js
- PDF download → mock console.log in Header.js, HeroSection.js, ThankYouPage.js
- TidyCal → placeholder div with URL comment

### Frontend Components to Update
1. **ContactSection.js** - Replace mock submission with API call
2. **Header.js** - Replace PDF mock with API endpoint
3. **HeroSection.js** - Replace PDF mock with API endpoint  
4. **ThankYouPage.js** - Replace PDF mock with API endpoint, add real TidyCal embed

### Environment Variables Needed
```
# Backend .env
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=contact@e2.dev
TIDYCAL_EMBED_URL=https://tidycal.com/ericbrisset/30-minute-meeting
PDF_STORAGE_PATH=/app/assets/pdf/
```

## Database Schema (Optional)
```sql
-- Contact submissions tracking
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  role VARCHAR(255),
  country VARCHAR(255),
  use_case VARCHAR(255),
  message TEXT,
  language VARCHAR(2) NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Analytics events
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY,
  event_type VARCHAR(50) NOT NULL, -- 'form_submit', 'pdf_download', 'language_switch'
  event_data JSONB,
  language VARCHAR(2),
  session_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  ip_address INET
);
```

## Testing Requirements

### Backend Testing Checklist
- [ ] Contact form API endpoint validation
- [ ] PDF generation for both languages
- [ ] Email sending functionality
- [ ] Error handling and validation
- [ ] Rate limiting implementation
- [ ] CORS configuration for frontend

### Frontend Integration Testing
- [ ] Form submission workflow
- [ ] PDF download functionality
- [ ] Error handling and user feedback
- [ ] Language persistence across pages
- [ ] TidyCal integration
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

## Deployment Notes
- PDF files should be generated on-demand or pre-generated and served statically
- Email templates should be stored in `/templates/` directory
- Assets should be optimized and served via CDN if needed
- Consider implementing caching for PDF generation
- Set up monitoring for form submission rates and success rates