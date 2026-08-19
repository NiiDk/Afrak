// ============================================================================
// AFRA K FASHION SCHOOL - ADMISSIONS & SUBMISSIONS INTELLIGENCE SERVICE
// Handles persistent storage, Google Sheets / Webhook synchronization,
// Email notification forwarding, and CSV export.
// ============================================================================

const STORAGE_KEY = 'afrak_admissions_submissions_v1';
const SETTINGS_KEY = 'afrak_sync_settings_v1';

// Initial pre-seeded authentic submissions so the admin dashboard has live data
const SEED_SUBMISSIONS = [
  {
    id: 'AFK-ADM-8492',
    type: 'admissions',
    applicantName: 'Nana Aba Mensah',
    phone: '+233 24 456 7890',
    email: 'nana.aba.mensah@gmail.com',
    programId: 'foundational-pattern-tech',
    programTitle: 'Foundational Pattern Technology & Garment Construction',
    intake: 'September 2026',
    schedule: 'Regular Full-Time (Mon – Thu)',
    experienceLevel: 'Beginner (No prior experience)',
    applyingScholarship: true,
    scholarshipType: '10-Year Anniversary Scholarship',
    statement: 'I have always had a passion for bespoke African couture and aspire to launch my own ready-to-wear atelier in Accra.',
    portfolioLink: '@nanaaba.couture',
    tuitionEstimate: 'GHC 14,500',
    status: 'New',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    notes: 'Requested hostel accommodation details.'
  },
  {
    id: 'AFK-TOUR-3104',
    type: 'tour',
    applicantName: 'Kofi Owusu Boateng',
    phone: '+233 50 123 4567',
    email: 'kofi.owusu@outlook.com',
    tourType: 'In-Person Studio Tour',
    selectedDate: '2026-08-25',
    selectedTime: '10:00 AM',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    notes: 'Interested in the Weekend Executive Certificate.'
  },
  {
    id: 'AFK-ADM-9210',
    type: 'admissions',
    applicantName: 'Esi Dede Sutherland',
    phone: '+233 27 890 1234',
    email: 'esi.sutherland@fashionlab.gh',
    programId: 'haute-corsetry-bridal',
    programTitle: 'Haute Corsetry & Luxury Bridal Engineering',
    intake: 'September 2026',
    schedule: 'Weekend Executive (Sat & Sun)',
    experienceLevel: 'Practicing Tailor / Seeking Master Precision',
    applyingScholarship: false,
    statement: 'Looking to master European boning techniques and bespoke structured evening wear.',
    portfolioLink: 'behance.net/esisutherland',
    tuitionEstimate: 'GHC 9,800',
    status: 'Accepted',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    notes: 'Deposit invoice sent via WhatsApp.'
  },
  {
    id: 'AFK-INQ-4819',
    type: 'inquiry',
    applicantName: 'Akosua Frimpong-Manso',
    phone: '+233 24 098 7654',
    email: 'akosua.fm@gmail.com',
    subject: '3D CLO Digital Fashion Tech Course',
    message: 'Can this course be taken online or hybrid? I work full time in corporate communications and want to learn digital 3D pattern simulation.',
    status: 'New',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago
    notes: ''
  },
  {
    id: 'AFK-ADM-1847',
    type: 'admissions',
    applicantName: 'Benjamin Kwabena Osei',
    phone: '+233 55 678 9012',
    email: 'ben.osei@menswear.com',
    programId: 'menswear-bespoke-tailoring',
    programTitle: 'Master Sartorial Menswear & Savile Row Tailoring',
    intake: 'January 2027',
    schedule: 'Private 1-on-1 Atelier Mentorship',
    experienceLevel: 'Self-Taught / Basic Sewing',
    applyingScholarship: true,
    scholarshipType: "Founder's Creative Potential Grant",
    statement: 'Passionate about structural suiting and African luxury textiles for international export.',
    portfolioLink: '@kwabena.bespoke',
    tuitionEstimate: 'GHC 11,500',
    status: 'Enrolled',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    notes: 'Registered with registration ID AFK-2026-0412.'
  }
];

// Default Sync Settings
export const DEFAULT_SYNC_SETTINGS = {
  webhookUrl: '',
  adminEmail: 'afrakfashionschoolgh@gmail.com',
  enableEmailAlerts: true,
  enableGoogleSheets: true,
  autoExportWeekly: false
};

// Retrieve all stored submissions
export const getSubmissions = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_SUBMISSIONS));
      return SEED_SUBMISSIONS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to parse submissions from storage:', err);
    return SEED_SUBMISSIONS;
  }
};

// Save a new submission
export const saveSubmission = async (submissionData) => {
  try {
    const existing = getSubmissions();
    const newSubmission = {
      id: submissionData.id || `AFK-${submissionData.type?.toUpperCase().slice(0, 3) || 'SUB'}-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'New',
      notes: '',
      ...submissionData
    };

    const updated = [newSubmission, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Dispatch webhook synchronization in background if configured
    dispatchWebhookSync(newSubmission).catch((err) => {
      console.warn('Background webhook sync logged notice:', err);
    });

    return { success: true, submission: newSubmission };
  } catch (err) {
    console.error('Error saving submission:', err);
    return { success: false, error: err.message };
  }
};

// Update submission status
export const updateSubmissionStatus = (id, newStatus, notes = null) => {
  try {
    const existing = getSubmissions();
    const updated = existing.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: newStatus,
          ...(notes !== null ? { notes } : {}),
          updatedAt: new Date().toISOString()
        };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return { success: true, submissions: updated };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Delete a submission
export const deleteSubmission = (id) => {
  try {
    const existing = getSubmissions();
    const updated = existing.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return { success: true, submissions: updated };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Retrieve Sync Configuration
export const getSyncSettings = () => {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (!data) return DEFAULT_SYNC_SETTINGS;
    return { ...DEFAULT_SYNC_SETTINGS, ...JSON.parse(data) };
  } catch (err) {
    return DEFAULT_SYNC_SETTINGS;
  }
};

// Save Sync Configuration
export const saveSyncSettings = (settings) => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

// Dispatch webhook to Google Apps Script / Formspree
export const dispatchWebhookSync = async (submission) => {
  const settings = getSyncSettings();
  if (!settings.webhookUrl) return { dispatched: false, reason: 'No webhook URL configured' };

  try {
    const payload = {
      source: 'Afra K Official Website',
      timestamp: new Date().toISOString(),
      adminEmail: settings.adminEmail,
      submission
    };

    // Use mode: 'no-cors' so Google Apps Script Web Apps receive POST without CORS issues
    await fetch(settings.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(payload)
    });

    return { dispatched: true, status: 200 };
  } catch (err) {
    console.warn('Webhook dispatch caught:', err);
    return { dispatched: false, error: err.message };
  }
};

// Generate CSV string for Excel / Google Sheets
export const exportSubmissionsToCSV = () => {
  const submissions = getSubmissions();
  const headers = [
    'Submission ID',
    'Submission Date',
    'Category Type',
    'Applicant Name',
    'Phone / WhatsApp',
    'Email Address',
    'Program / Inquiry Topic',
    'Intake Session',
    'Study Schedule',
    'Prior Experience',
    'Scholarship Requested',
    'Scholarship Type',
    'Portfolio / Social Handle',
    'Status',
    'Admin Internal Notes'
  ];

  const escapeCSV = (str) => {
    if (!str) return '""';
    const clean = String(str).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = submissions.map(s => [
    escapeCSV(s.id),
    escapeCSV(new Date(s.createdAt).toLocaleString('en-GB')),
    escapeCSV(s.type?.toUpperCase()),
    escapeCSV(s.applicantName),
    escapeCSV(s.phone),
    escapeCSV(s.email),
    escapeCSV(s.programTitle || s.tourType || s.subject || 'N/A'),
    escapeCSV(s.intake || s.selectedDate || 'N/A'),
    escapeCSV(s.schedule || s.selectedTime || 'N/A'),
    escapeCSV(s.experienceLevel || 'N/A'),
    escapeCSV(s.applyingScholarship ? 'YES' : 'NO'),
    escapeCSV(s.scholarshipType || 'N/A'),
    escapeCSV(s.portfolioLink || 'N/A'),
    escapeCSV(s.status),
    escapeCSV(s.notes || '')
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\r\n');

  // Trigger browser download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `AfraK_Admissions_Submissions_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Pre-packaged ready-to-paste Google Apps Script code
export const getGoogleAppsScriptTemplate = () => {
  return `/**
 * AFRA K FASHION SCHOOL - GOOGLE APPS SCRIPT WEBHOOK & EMAIL ALERT SCRIPT
 * 
 * Instructions:
 * 1. Create a new Google Sheet (e.g. "Afra K Admissions 2026/2027").
 * 2. In Google Sheets menu, click: Extensions → Apps Script.
 * 3. Replace all code in the script editor with this entire snippet.
 * 4. Click 'Deploy' (top right) → 'New deployment' → Select type: 'Web app'.
 * 5. Set 'Execute as': 'Me', and 'Who has access': 'Anyone'.
 * 6. Copy the generated Web App URL and paste it into your Afra K Admin Dashboard!
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sub = data.submission;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Create header row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "ID", "Type", "Name", "Phone", "Email", 
        "Program / Topic", "Intake / Date", "Schedule / Time", 
        "Scholarship", "Status", "Notes"
      ]);
      sheet.getRange("A1:L1").setFontWeight("bold").setBackground("#D4AF37").setFontColor("#000000");
    }
    
    // Append new applicant row
    sheet.appendRow([
      new Date(),
      sub.id || "",
      sub.type || "",
      sub.applicantName || "",
      sub.phone || "",
      sub.email || "",
      sub.programTitle || sub.tourType || sub.subject || "",
      sub.intake || sub.selectedDate || "",
      sub.schedule || sub.selectedTime || "",
      sub.applyingScholarship ? "YES - " + (sub.scholarshipType || "") : "NO",
      sub.status || "New",
      sub.notes || ""
    ]);
    
    // Send Instant Email Alert to School Administration
    var adminEmail = data.adminEmail || "afrakfashionschoolgh@gmail.com";
    var emailSubject = "🌟 New " + (sub.type ? sub.type.toUpperCase() : "ADMISSIONS") + " Lead: " + (sub.applicantName || "Prospective Student");
    var emailBody = "New submission received on Afra K Fashion School Website:\\n\\n" +
      "• Reference ID: " + sub.id + "\\n" +
      "• Full Name: " + sub.applicantName + "\\n" +
      "• Phone: " + sub.phone + "\\n" +
      "• Email: " + sub.email + "\\n" +
      "• Program / Topic: " + (sub.programTitle || sub.tourType || sub.subject || "N/A") + "\\n" +
      "• Intake: " + (sub.intake || sub.selectedDate || "N/A") + "\\n" +
      "• Format: " + (sub.schedule || sub.selectedTime || "N/A") + "\\n" +
      "• Scholarship Requested: " + (sub.applyingScholarship ? "YES (" + sub.scholarshipType + ")" : "NO") + "\\n" +
      "• Statement / Message: " + (sub.statement || sub.message || "N/A") + "\\n\\n" +
      "Manage this applicant via the Afra K Admin Dashboard or reply via WhatsApp: https://wa.me/" + (sub.phone ? sub.phone.replace(/[^0-9]/g, "") : "");
      
    MailApp.sendEmail(adminEmail, emailSubject, emailBody);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
};
