import React, { useState, useEffect } from 'react';
import { 
  X, Search, Filter, Download, MessageSquare, Phone, Mail, 
  CheckCircle2, Clock, Calendar, Sparkles, ExternalLink, Trash2, 
  RefreshCw, Check, Copy, Settings, ShieldAlert, Award, FileSpreadsheet,
  Users, Layers, ArrowUpRight, ChevronRight, Eye, Edit3, Send
} from 'lucide-react';
import { Logo } from './Logo';
import { 
  getSubmissions, updateSubmissionStatus, deleteSubmission, 
  exportSubmissionsToCSV, getSyncSettings, saveSyncSettings, 
  dispatchWebhookSync, getGoogleAppsScriptTemplate, saveSubmission 
} from '../utils/submissionsManager';

export const AdminDashboardModal = ({ isOpen, onClose }) => {
  const [submissions, setSubmissions] = useState([]);
  const [activeTab, setActiveTab] = useState('inbox'); // 'inbox', 'sync', 'analytics'
  const [filterType, setFilterType] = useState('all'); // 'all', 'admissions', 'tour', 'inquiry'
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [notesDraft, setNotesDraft] = useState('');

  // Sync settings state
  const [syncConfig, setSyncConfig] = useState(getSyncSettings());
  const [testStatus, setTestStatus] = useState(null); // null, 'testing', 'success', 'error'
  const [copiedCode, setCopiedCode] = useState(false);
  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const loadData = () => {
    setSubmissions(getSubmissions());
    setSyncConfig(getSyncSettings());
  };

  if (!isOpen) return null;

  // Filter Submissions
  const filteredSubmissions = submissions.filter(item => {
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      item.applicantName?.toLowerCase().includes(query) ||
      item.phone?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.id?.toLowerCase().includes(query) ||
      (item.programTitle && item.programTitle.toLowerCase().includes(query));

    return matchesType && matchesStatus && matchesSearch;
  });

  // Calculate Metrics
  const totalCount = submissions.length;
  const newCount = submissions.filter(s => s.status === 'New').length;
  const admissionsCount = submissions.filter(s => s.type === 'admissions').length;
  const toursCount = submissions.filter(s => s.type === 'tour').length;
  const enrolledCount = submissions.filter(s => s.status === 'Enrolled' || s.status === 'Accepted').length;

  const handleStatusChange = (id, newStatus) => {
    const res = updateSubmissionStatus(id, newStatus);
    if (res.success) {
      setSubmissions(res.submissions);
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status: newStatus });
      }
    }
  };

  const handleSaveNotes = (id) => {
    const res = updateSubmissionStatus(id, selectedSubmission.status, notesDraft);
    if (res.success) {
      setSubmissions(res.submissions);
      setSelectedSubmission({ ...selectedSubmission, notes: notesDraft });
    }
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this submission?')) {
      const res = deleteSubmission(id);
      if (res.success) {
        setSubmissions(res.submissions);
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      }
    }
  };

  const handleTestSync = async () => {
    setTestStatus('testing');
    const testPayload = {
      id: `AFK-TEST-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'test_ping',
      applicantName: 'Afra K Connection Test',
      phone: '+233 24 018 7828',
      email: syncConfig.adminEmail,
      programTitle: 'System Diagnostic Verification',
      status: 'Verified',
      createdAt: new Date().toISOString(),
      notes: 'Automated ping from Afra K Admin Dashboard'
    };

    const res = await dispatchWebhookSync(testPayload);
    if (res.dispatched) {
      setTestStatus('success');
      setTimeout(() => setTestStatus(null), 4000);
    } else {
      setTestStatus('error');
    }
  };

  const handleSaveSyncSettings = (e) => {
    e.preventDefault();
    saveSyncSettings(syncConfig);
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 3000);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(getGoogleAppsScriptTemplate());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleSimulateNewApplicant = () => {
    const sampleNames = ['Ama Serwaa Prempeh', 'Kwame Nkrumah Boateng', 'Abena Pokuaa', 'David Mensah', 'Farida Al-Hassan'];
    const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const newRecord = {
      type: 'admissions',
      applicantName: randomName,
      phone: '+233 24 ' + Math.floor(1000000 + Math.random() * 9000000),
      email: `${randomName.toLowerCase().replace(' ', '.')}@gmail.com`,
      programId: 'foundational-pattern-tech',
      programTitle: 'Foundational Pattern Technology & Garment Construction',
      intake: 'September 2026',
      schedule: 'Regular Full-Time',
      experienceLevel: 'Beginner',
      applyingScholarship: Math.random() > 0.5,
      scholarshipType: '10-Year Anniversary Scholarship',
      statement: 'Passionate about haute couture, pattern drafting, and luxury garment construction.',
      tuitionEstimate: 'GHC 14,500',
      status: 'New'
    };

    saveSubmission(newRecord).then(() => {
      loadData();
    });
  };

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-obsidian-950/98 backdrop-blur-2xl animate-fade-in text-alabaster-100">
      <div className="bg-obsidian-900 border border-gold-500/40 rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Header Bar */}
        <div className="px-4 sm:px-6 py-4 border-b border-white/10 bg-obsidian-950 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <Logo variant="crest" size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-lg sm:text-xl font-bold text-alabaster-50">
                  Admissions & Leads Intelligence Console
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/30 text-[10px] font-mono text-gold-300 uppercase">
                  v2.6 LIVE
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-mono">
                Afra K Fashion School • Academic Registrar & Inquiries Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={exportSubmissionsToCSV}
              className="px-3 py-1.5 rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/15 text-gold-300 hover:text-white text-xs font-semibold uppercase font-mono flex items-center gap-1.5 cursor-pointer transition-all shadow-sm"
              title="Download entire submissions spreadsheet as CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={onClose}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-4 sm:px-6 bg-obsidian-950/60 border-b border-white/5 shrink-0 text-xs">
          <div className="p-3 rounded-lg bg-obsidian-900 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Total Inquiries</span>
              <span className="text-xl font-bold font-mono text-alabaster-50">{totalCount}</span>
            </div>
            <div className="p-2 rounded bg-gold-500/10 text-gold-400">
              <Users className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-obsidian-900 border border-amber-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-amber-400 block">New / Pending</span>
              <span className="text-xl font-bold font-mono text-amber-300">{newCount}</span>
            </div>
            <div className="p-2 rounded bg-amber-500/10 text-amber-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-obsidian-900 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-emerald-400 block">Accepted / Enrolled</span>
              <span className="text-xl font-bold font-mono text-emerald-400">{enrolledCount}</span>
            </div>
            <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-obsidian-900 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Studio Tours</span>
              <span className="text-xl font-bold font-mono text-gold-400">{toursCount}</span>
            </div>
            <div className="p-2 rounded bg-gold-500/10 text-gold-400">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="px-4 sm:px-6 pt-3 flex items-center justify-between border-b border-white/10 bg-obsidian-950/40 shrink-0">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('inbox')}
              className={`pb-2.5 text-xs font-semibold uppercase tracking-wider font-mono flex items-center gap-2 cursor-pointer border-b-2 transition-all ${
                activeTab === 'inbox'
                  ? 'border-gold-400 text-gold-300'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Submissions Inbox ({filteredSubmissions.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('sync')}
              className={`pb-2.5 text-xs font-semibold uppercase tracking-wider font-mono flex items-center gap-2 cursor-pointer border-b-2 transition-all ${
                activeTab === 'sync'
                  ? 'border-gold-400 text-gold-300'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Email & Google Sheets Sync</span>
              {syncConfig.webhookUrl ? (
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" title="Sync setup pending"></span>
              )}
            </button>
          </div>

          <button
            onClick={handleSimulateNewApplicant}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 rounded bg-gold-500/15 hover:bg-gold-500 hover:text-obsidian-950 border border-gold-500/30 text-[10.5px] font-mono text-gold-300 transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>+ Simulate New Lead</span>
          </button>
        </div>

        {/* Main Body View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* TAB 1: SUBMISSIONS INBOX */}
          {activeTab === 'inbox' && (
            <div className="space-y-4">
              
              {/* Filter & Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-obsidian-950 p-3 rounded-lg border border-white/10">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search applicant name, phone, email, reference ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-obsidian-900 border border-white/10 rounded pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-neutral-400 hover:text-white text-xs cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Type Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'admissions', label: 'Admissions' },
                    { id: 'tour', label: 'Tours' },
                    { id: 'inquiry', label: 'Inquiries' },
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setFilterType(t.id)}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono uppercase transition-all cursor-pointer shrink-0 ${
                        filterType === t.id
                          ? 'bg-gold-500 text-obsidian-950 font-bold'
                          : 'bg-obsidian-900 border border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-obsidian-900 border border-white/10 rounded px-3 py-1.5 text-xs text-neutral-300 focus:outline-none focus:border-gold-400 cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  <option value="New">New Only</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Enrolled">Enrolled</option>
                </select>
              </div>

              {/* Submissions List / Table */}
              {filteredSubmissions.length === 0 ? (
                <div className="p-12 text-center border border-white/10 rounded-xl bg-obsidian-950/60 space-y-3">
                  <ShieldAlert className="w-8 h-8 text-neutral-500 mx-auto" />
                  <h4 className="font-editorial text-lg text-alabaster-100">No Submissions Found</h4>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto font-light">
                    No records matched your search filters. Try clearing search keywords or clicking "Simulate New Lead" to test.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredSubmissions.map((sub) => {
                    const cleanPhone = sub.phone ? sub.phone.replace(/[^0-9]/g, '') : '';
                    const whatsappLink = `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(sub.applicantName || 'there')},%20this%20is%20Afra%20K%20Fashion%20School%20Admissions%20regarding%20your%20application...`;

                    return (
                      <div
                        key={sub.id}
                        onClick={() => {
                          setSelectedSubmission(sub);
                          setNotesDraft(sub.notes || '');
                        }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group ${
                          selectedSubmission?.id === sub.id
                            ? 'bg-obsidian-850 border-gold-400 shadow-xl'
                            : 'bg-obsidian-950 border-white/10 hover:border-gold-500/40 hover:bg-obsidian-900'
                        }`}
                      >
                        {/* Left Info */}
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">
                              {sub.id}
                            </span>
                            <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                              sub.type === 'admissions' ? 'bg-gold-500/20 text-gold-300 border border-gold-500/30' :
                              sub.type === 'tour' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                              'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }`}>
                              {sub.type}
                            </span>
                            <span className="text-[11px] text-neutral-400 font-mono">
                              {new Date(sub.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-baseline gap-2">
                            <h4 className="font-editorial text-lg text-alabaster-50 font-bold group-hover:text-gold-300 transition-colors">
                              {sub.applicantName}
                            </h4>
                            <span className="text-xs text-neutral-300 font-light">
                              • {sub.programTitle || sub.tourType || sub.subject}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3 text-gold-400" />
                              {sub.phone}
                            </span>
                            {sub.email && (
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3 text-gold-400" />
                                {sub.email}
                              </span>
                            )}
                            {sub.applyingScholarship && (
                              <span className="px-1.5 py-0.5 rounded bg-gold-500/10 text-gold-400 text-[10px] font-mono">
                                🌟 Scholarship Requested
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right Action & Status Control */}
                        <div className="flex items-center gap-2 sm:gap-3 self-start md:self-auto shrink-0" onClick={(e) => e.stopPropagation()}>
                          {/* WhatsApp Direct Reply */}
                          {cleanPhone && (
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1.5 rounded bg-emerald-500/15 hover:bg-emerald-500 hover:text-obsidian-950 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow"
                              title="Chat directly with student on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="hidden sm:inline">WhatsApp</span>
                            </a>
                          )}

                          {/* Status Selector Dropdown */}
                          <select
                            value={sub.status}
                            onChange={(e) => handleStatusChange(sub.id, e.target.value)}
                            className={`rounded px-2.5 py-1.5 text-xs font-mono font-bold uppercase border cursor-pointer ${
                              sub.status === 'New' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                              sub.status === 'Contacted' ? 'bg-blue-500/20 text-blue-300 border-blue-500/40' :
                              sub.status === 'Accepted' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                              sub.status === 'Enrolled' ? 'bg-gold-500 text-obsidian-950 border-gold-400' :
                              'bg-neutral-800 text-neutral-400 border-white/10'
                            }`}
                          >
                            <option value="New">● New</option>
                            <option value="Contacted">● Contacted</option>
                            <option value="Accepted">● Accepted</option>
                            <option value="Enrolled">● Enrolled</option>
                            <option value="Archived">● Archived</option>
                          </select>

                          {/* Delete Action */}
                          <button
                            onClick={(e) => handleDelete(sub.id, e)}
                            className="p-1.5 rounded hover:bg-rose-500/20 text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
                            title="Delete record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: EMAIL & GOOGLE SHEETS SYNC HUB */}
          {activeTab === 'sync' && (
            <div className="space-y-6">
              
              {/* Instructions Banner */}
              <div className="p-5 rounded-xl bg-obsidian-950 border border-gold-500/30 space-y-3">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-xs uppercase font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Real-Time Cloud Synchronization Engine</span>
                </div>
                <h3 className="font-editorial text-xl text-alabaster-50">
                  Connect Submissions to Google Sheets & Instant Email Alerts
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Every time a prospective student applies or books a tour, their record is stored locally in this dashboard and automatically dispatched to your Google Sheet and sent to your email inbox!
                </p>
              </div>

              {/* Webhook Configuration Form */}
              <form onSubmit={handleSaveSyncSettings} className="p-5 sm:p-6 rounded-xl bg-obsidian-950 border border-white/10 space-y-4">
                <h4 className="font-editorial text-base text-alabaster-50 font-bold">
                  Webhook & Notification Endpoints
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                      Target Administration Email
                    </label>
                    <input
                      type="email"
                      required
                      value={syncConfig.adminEmail}
                      onChange={(e) => setSyncConfig({ ...syncConfig, adminEmail: e.target.value })}
                      placeholder="e.g. afrakfashionschoolgh@gmail.com"
                      className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-xs text-alabaster-100 outline-none"
                    />
                    <span className="text-[10.5px] text-neutral-500 font-mono block mt-1">
                      New lead email alerts are addressed here.
                    </span>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-mono text-neutral-300 block mb-1.5">
                      Google Apps Script / Webhook URL
                    </label>
                    <input
                      type="url"
                      value={syncConfig.webhookUrl}
                      onChange={(e) => setSyncConfig({ ...syncConfig, webhookUrl: e.target.value })}
                      placeholder="https://script.google.com/macros/s/AKfycbx.../exec"
                      className="w-full bg-obsidian-900 border border-white/15 focus:border-gold-400 rounded p-3 text-xs text-alabaster-100 outline-none"
                    />
                    <span className="text-[10.5px] text-neutral-500 font-mono block mt-1">
                      Paste your deployed Google Apps Script Web App URL.
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded bg-gold-gradient text-obsidian-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 cursor-pointer shadow-md shadow-gold-500/20"
                    >
                      Save Sync Configuration
                    </button>

                    {savedSettingsNotice && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Settings Saved!
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleTestSync}
                    disabled={testStatus === 'testing'}
                    className="px-4 py-2.5 rounded bg-obsidian-850 hover:bg-obsidian-800 border border-white/15 text-xs text-alabaster-200 uppercase font-mono flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-gold-400" />
                    <span>{testStatus === 'testing' ? 'Testing Ping...' : 'Send Test Ping'}</span>
                  </button>
                </div>

                {testStatus === 'success' && (
                  <div className="p-3 rounded bg-emerald-500/15 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Test payload successfully dispatched to Google Sheets / Webhook!</span>
                  </div>
                )}

                {testStatus === 'error' && (
                  <div className="p-3 rounded bg-rose-500/15 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Please enter a valid Webhook URL before sending test ping.</span>
                  </div>
                )}
              </form>

              {/* Ready-to-use Google Apps Script Code Snippet */}
              <div className="p-5 sm:p-6 rounded-xl bg-obsidian-950 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-editorial text-base text-alabaster-50 font-bold">
                      Pre-Packaged Google Apps Script Webhook Code
                    </h4>
                    <p className="text-xs text-neutral-400 font-light">
                      Copy this exact script into your Google Sheets to receive leads and email alerts automatically:
                    </p>
                  </div>

                  <button
                    onClick={handleCopyScript}
                    className="px-3.5 py-1.5 rounded bg-gold-500/20 hover:bg-gold-500 hover:text-obsidian-950 border border-gold-500/40 text-gold-300 text-xs font-mono uppercase font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Script'}</span>
                  </button>
                </div>

                <div className="rounded-lg bg-obsidian-900 border border-white/10 p-4 font-mono text-[11px] text-neutral-300 max-h-56 overflow-y-auto">
                  <pre>{getGoogleAppsScriptTemplate()}</pre>
                </div>

                {/* 3 Step Setup Guide */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded bg-obsidian-900 border border-white/5 space-y-1">
                    <span className="text-gold-400 font-mono font-bold block">Step 1</span>
                    <p className="text-neutral-300 font-light">
                      Create a Google Sheet and click <strong>Extensions → Apps Script</strong>.
                    </p>
                  </div>

                  <div className="p-3 rounded bg-obsidian-900 border border-white/5 space-y-1">
                    <span className="text-gold-400 font-mono font-bold block">Step 2</span>
                    <p className="text-neutral-300 font-light">
                      Paste the code above, then click <strong>Deploy → New deployment → Web app</strong>.
                    </p>
                  </div>

                  <div className="p-3 rounded bg-obsidian-900 border border-white/5 space-y-1">
                    <span className="text-gold-400 font-mono font-bold block">Step 3</span>
                    <p className="text-neutral-300 font-light">
                      Copy the Web App URL and paste it into the Webhook field above. Done!
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Applicant Full Dossier Inspection Drawer (Modal) */}
        {selectedSubmission && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/95 backdrop-blur-2xl animate-fade-in text-alabaster-100">
            <div className="bg-obsidian-900 border border-gold-500/50 rounded-xl max-w-2xl w-full p-5 sm:p-8 relative shadow-2xl space-y-5 max-h-[92vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedSubmission(null)}
                className="absolute top-4 right-4 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase text-gold-400 font-bold">
                    {selectedSubmission.id}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    • Submitted on {new Date(selectedSubmission.createdAt).toLocaleString('en-GB')}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-alabaster-50 font-bold">
                  {selectedSubmission.applicantName}
                </h3>
                <p className="text-xs text-gold-300 font-mono">
                  {selectedSubmission.programTitle || selectedSubmission.tourType || selectedSubmission.subject}
                </p>
              </div>

              {/* Core Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-obsidian-950 p-4 rounded-lg border border-white/10">
                <div>
                  <span className="text-[10.5px] uppercase font-mono text-neutral-400 block">WhatsApp Phone:</span>
                  <span className="text-white font-medium">{selectedSubmission.phone}</span>
                </div>
                <div>
                  <span className="text-[10.5px] uppercase font-mono text-neutral-400 block">Email Address:</span>
                  <span className="text-white font-medium">{selectedSubmission.email || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-[10.5px] uppercase font-mono text-neutral-400 block">Intake / Date:</span>
                  <span className="text-white font-medium">{selectedSubmission.intake || selectedSubmission.selectedDate || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-[10.5px] uppercase font-mono text-neutral-400 block">Study Format:</span>
                  <span className="text-white font-medium">{selectedSubmission.schedule || selectedSubmission.selectedTime || 'N/A'}</span>
                </div>
                {selectedSubmission.experienceLevel && (
                  <div>
                    <span className="text-[10.5px] uppercase font-mono text-neutral-400 block">Prior Experience:</span>
                    <span className="text-white font-medium">{selectedSubmission.experienceLevel}</span>
                  </div>
                )}
                {selectedSubmission.portfolioLink && (
                  <div>
                    <span className="text-[10.5px] uppercase font-mono text-neutral-400 block">Portfolio / Handle:</span>
                    <span className="text-gold-300 font-mono">{selectedSubmission.portfolioLink}</span>
                  </div>
                )}
              </div>

              {/* Statement / Message */}
              {(selectedSubmission.statement || selectedSubmission.message) && (
                <div className="p-4 rounded-lg bg-obsidian-950 border border-white/10 space-y-1.5 text-xs">
                  <span className="text-[10.5px] uppercase font-mono text-gold-400 font-bold block">
                    Applicant Statement / Message:
                  </span>
                  <p className="text-neutral-200 font-light leading-relaxed whitespace-pre-wrap">
                    "{selectedSubmission.statement || selectedSubmission.message}"
                  </p>
                </div>
              )}

              {/* Scholarship Details */}
              {selectedSubmission.applyingScholarship && (
                <div className="p-3.5 rounded bg-gold-500/10 border border-gold-500/30 text-xs text-gold-200 space-y-1">
                  <span className="font-bold block text-gold-300">Scholarship Consideration:</span>
                  <p className="text-neutral-300">
                    Applying for: <strong>{selectedSubmission.scholarshipType || '10-Year Anniversary Grant'}</strong>
                  </p>
                </div>
              )}

              {/* Internal Notes Editor */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono text-neutral-300 block">
                  Registrar Internal Notes & Follow-Up Log:
                </label>
                <textarea
                  rows={3}
                  value={notesDraft}
                  onChange={(e) => setNotesDraft(e.target.value)}
                  placeholder="Record admissions interview notes, deposit payments, interview schedules..."
                  className="w-full bg-obsidian-950 border border-white/15 focus:border-gold-400 rounded p-3 text-xs text-alabaster-100 outline-none"
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleSaveNotes(selectedSubmission.id)}
                    className="px-4 py-1.5 rounded bg-obsidian-850 hover:bg-gold-500 hover:text-obsidian-950 text-xs font-mono font-semibold uppercase border border-white/15 transition-all cursor-pointer"
                  >
                    Save Notes
                  </button>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-mono text-neutral-400">Current Status:</span>
                  <select
                    value={selectedSubmission.status}
                    onChange={(e) => handleStatusChange(selectedSubmission.id, e.target.value)}
                    className="rounded px-2.5 py-1 text-xs font-mono font-bold uppercase bg-obsidian-950 border border-gold-500/40 text-gold-300 cursor-pointer"
                  >
                    <option value="New">● New</option>
                    <option value="Contacted">● Contacted</option>
                    <option value="Accepted">● Accepted</option>
                    <option value="Enrolled">● Enrolled</option>
                    <option value="Archived">● Archived</option>
                  </select>
                </div>

                <a
                  href={`https://wa.me/${selectedSubmission.phone?.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedSubmission.applicantName || 'there')},%20this%20is%20Afra%20K%20Fashion%20School%20Admissions...`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded bg-emerald-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-lg hover:opacity-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
