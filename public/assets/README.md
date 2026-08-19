# Afra K Fashion School — Asset Management Guide

All media files, images, videos, and documents used throughout the website are organized in this `public/assets/` directory. When you add or replace files here, they are immediately accessible in the app.

---

## 📁 Directory Structure & Where to Put Files

```
c:\Users\USER\Desktop\Afrak\public\
├── afrak-crest.png                 <-- Official Afra K Golden Eagle Crest (used in Navbar & Favicon)
├── afrak-official-logo.jpg         <-- Official Full Logo with shield & motto
└── assets/
    ├── images/                     <-- ALL PHOTOGRAPHS & HIGH-RES MEDIA (99 downloaded assets from live site)
    │   ├── 2017-GRAD-5.jpg         (2017 Graduation Ceremony)
    │   ├── 2018-GRAD-6.jpg         (2018 Graduation Cohort)
    │   ├── IMG_8350...jpeg         (Lesley Aidoo Mensah - Founder & CEO portrait)
    │   ├── Bethel-Mawuenam...png   (Bethel Mawuenam Gbewonyo - General Manager)
    │   ├── AMOO-AYODEJI...png      (Amoo Ayodeji - Pattern Drafting Facilitator)
    │   ├── DSC03270...jpg          (Sewing & Production Studio)
    │   ├── DSC04068...jpg          (Cutting & Finishing Area)
    │   ├── Hostel.png              (On-Campus Student Hostel Accommodation)
    │   ├── Evore-collections...jpg (Evore by Pamela Makafui Amevor - Mercedes Benz Fashion Week)
    │   ├── Akarey-By-Martina...jpg (Akarey by Martina Akarey - Mercedes Benz Fashion Week)
    │   ├── Eslyne-By-Benedicta...jpg (Eslyne by Benedicta Apenu)
    │   ├── Nifos-By-Benjamin...jpg (Nifos by Benjamin Fosu - 'Ancient Gods' collection)
    │   ├── Louisa-Akua-Dufie...jpg (Kylie Amaris by Louisa Akua Dufie)
    │   ├── YABAp...jpg             (YABA Runway Collection)
    │   ├── FAR...jpg               (Fashion Effect Runway Show)
    │   └── ... (All other 80+ lookbook and orientation archive photos)
    │
    ├── videos/                     <-- PLACE YOUR VIDEO FILES HERE (.mp4, .webm, .mov)
    │   ├── runway_showcase.mp4     (Main runway highlight reel)
    │   ├── studio_tour.mp4         (Atelier walkthrough video)
    │   └── founder_interview.mp4   (Lesley Aidoo interview video)
    │
    └── documents/                  <-- PLACE YOUR PDF BROCHURES & ADMISSIONS FORMS HERE
        ├── AfraK_Prospectus_2026.pdf
        ├── CTVET_Accreditation_Certificate.pdf
        └── Foundational_Curriculum_Syllabus.pdf
```

---

## 🎥 Adding New Videos
1. Drop your `.mp4` or `.webm` files directly into `public/assets/videos/`.
2. In your components (e.g. `Hero.jsx`, `AtelierTour.jsx`), reference them with `/assets/videos/your-video-name.mp4`.
3. For YouTube/Vimeo links, simply paste the embed URL or video ID into `src/data/originalSiteData.js`.

---

## 📸 Adding or Replacing Images
1. Drop any new high-resolution photo into `public/assets/images/`.
2. Reference it anywhere in React using `/assets/images/your-image-filename.jpg`.
3. To add a new photo to the **Gallery**, add an entry into `galleryImages` inside `src/data/originalSiteData.js`:
   ```javascript
   { src: "/assets/images/your-photo.jpg", title: "Your Photo Title", category: "Runway" }
   ```
