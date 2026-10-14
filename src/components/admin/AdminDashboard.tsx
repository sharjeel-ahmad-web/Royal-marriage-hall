import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Users, Calendar, DollarSign, Clock, Search, Filter, 
  CheckCircle, XCircle, ArrowUpRight, MessageSquare, Phone, Edit, 
  Trash2, RefreshCw, FileText, ArrowLeft, LogOut, Check, ChevronRight, Lock
} from 'lucide-react';
import { Inquiry, InquiryStatus, Package, Venue } from '../../types';
import { 
  getInquiries, updateInquiryStatus, deleteInquiry, 
  getStoredVenues, updateStoredVenue, getStoredPackages, 
  updateStoredPackage, formatPricePkr, createWhatsAppChatUrl 
} from '../../lib/storage';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Logged in for easy demo access
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard Tab
  const [activeTab, setActiveTab] = useState<'inquiries' | 'venues' | 'packages' | 'visits'>('inquiries');

  // Data State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);

  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Selected Inquiry for Detail / Notes
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [adminNoteText, setAdminNoteText] = useState('');

  // Editing Venue / Package
  const [editingVenue, setEditingVenue] = useState<Venue | null>(null);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);

  const loadData = () => {
    setInquiries(getInquiries());
    setVenues(getStoredVenues());
    setPackages(getStoredPackages());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if ((username === 'admin' && password === 'royal2026') || (username === 'admin' && password === 'admin')) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid credentials. (Hint: Use admin / royal2026)');
    }
  };

  const handleStatusChange = (id: string, newStatus: InquiryStatus) => {
    updateInquiryStatus(id, newStatus);
    loadData();
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const handleSaveNotes = () => {
    if (!selectedInquiry) return;
    updateInquiryStatus(selectedInquiry.id, selectedInquiry.status, adminNoteText);
    loadData();
    setSelectedInquiry(prev => prev ? { ...prev, adminNotes: adminNoteText } : null);
  };

  const handleDeleteInquiry = (id: string) => {
    if (window.confirm(`Are you sure you want to delete inquiry ${id}?`)) {
      deleteInquiry(id);
      loadData();
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    }
  };

  const handleUpdateVenueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVenue) return;
    updateStoredVenue(editingVenue);
    loadData();
    setEditingVenue(null);
  };

  const handleUpdatePackageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPackage) return;
    updateStoredPackage(editingPackage);
    loadData();
    setEditingPackage(null);
  };

  // KPIs
  const totalInquiries = inquiries.length;
  const scheduledVisits = inquiries.filter(i => i.visitRequested || i.status === 'visit_scheduled').length;
  const confirmedWeddings = inquiries.filter(i => i.status === 'confirmed').length;
  const pipelineValue = inquiries
    .filter(i => i.status !== 'cancelled')
    .reduce((sum, i) => sum + (i.estimatedBudgetPkr || 0), 0);

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter(inq => {
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    const matchesSearch = 
      inq.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.eventType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: InquiryStatus) => {
    switch (status) {
      case 'new': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'visit_scheduled': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'quotation_sent': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'confirmed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'cancelled': return 'bg-stone-100 text-stone-600 border-stone-200';
      default: return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#1C1917] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#FDFBF7] rounded-2xl shadow-2xl border border-[#E7DFD5] p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#1C1917] text-[#DFC89B] flex items-center justify-center mx-auto mb-3 border border-[#B48C46]/40">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1917]">
              Royal Palace CMS Portal
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Authorized Management & Staff Login
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B48C46]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="royal2026"
                className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B48C46]"
              />
            </div>

            {authError && (
              <p className="text-xs text-red-600 font-medium">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#1C1917] hover:bg-[#2A2421] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              Sign In to Management
            </button>

            <div className="p-3 bg-[#F5EFEB] rounded-lg border border-[#E7DFD5] text-[11px] text-stone-600">
              <span className="font-bold block text-stone-800">Quick Demo Access:</span>
              <span>Username: <code className="font-mono font-bold text-stone-900">admin</code> · Password: <code className="font-mono font-bold text-stone-900">royal2026</code></span>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-stone-500 hover:text-stone-800"
              >
                &larr; Return to Public Website
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917]">
      {/* Top Header */}
      <header className="bg-[#1C1917] text-white border-b border-[#332D29] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="Return to Public Website"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Public Site</span>
              </button>
              <div className="h-6 w-px bg-white/20 hidden sm:block" />
              <div>
                <span className="font-serif-luxury font-bold text-lg text-white">
                  Royal Palace Management CMS
                </span>
                <span className="text-[10px] text-[#DFC89B] hidden md:inline ml-2">
                  Lahore Operations & Inquiries
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={loadData}
                className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Refresh Data"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-3 py-1.5 bg-red-950/60 hover:bg-red-900 text-red-200 text-xs rounded-lg border border-red-800/40 flex items-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main CMS Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-[#E7DFD5] shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Total Inquiries</span>
              <FileText className="w-4 h-4 text-[#B48C46]" />
            </div>
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold font-mono text-[#1C1917] mt-2 block">
              {totalInquiries}
            </span>
            <span className="text-[11px] text-stone-400 mt-1 block">Active pipeline leads</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E7DFD5] shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Scheduled Visits</span>
              <Calendar className="w-4 h-4 text-purple-600" />
            </div>
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold font-mono text-[#1C1917] mt-2 block">
              {scheduledVisits}
            </span>
            <span className="text-[11px] text-purple-700 font-medium mt-1 block">Upcoming family walkthroughs</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E7DFD5] shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Confirmed Weddings</span>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="font-serif-luxury text-2xl sm:text-3xl font-bold font-mono text-[#1C1917] mt-2 block">
              {confirmedWeddings}
            </span>
            <span className="text-[11px] text-emerald-700 font-medium mt-1 block">Tokens deposited</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E7DFD5] shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500">Estimated Pipeline</span>
              <DollarSign className="w-4 h-4 text-[#B48C46]" />
            </div>
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold font-mono text-[#9C7336] mt-2 block truncate">
              {formatPricePkr(pipelineValue)}
            </span>
            <span className="text-[11px] text-stone-400 mt-1 block">Inquiry banquet value</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#E7DFD5] pb-2 overflow-x-auto">
          {[
            { id: 'inquiries', label: `Inquiries Pipeline (${inquiries.length})` },
            { id: 'visits', label: `Venue Walkthroughs (${scheduledVisits})` },
            { id: 'venues', label: 'Manage Halls & Specs' },
            { id: 'packages', label: 'Manage Catering Packages' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#1C1917] text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-[#F5EFEB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: INQUIRIES PIPELINE */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E7DFD5]">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search customer, phone, event, ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 bg-[#FDFBF7] border border-[#E7DFD5] rounded-lg text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#B48C46]"
                />
              </div>

              {/* Status pills selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'new', label: 'New' },
                  { id: 'contacted', label: 'Contacted' },
                  { id: 'visit_scheduled', label: 'Visit' },
                  { id: 'quotation_sent', label: 'Quote' },
                  { id: 'confirmed', label: 'Confirmed' },
                  { id: 'cancelled', label: 'Cancelled' }
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => setStatusFilter(s.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                      statusFilter === s.id
                        ? 'bg-[#1C1917] text-white'
                        : 'bg-[#F5EFEB] text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiries Table / Grid */}
            <div className="bg-white rounded-2xl border border-[#E7DFD5] shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F5EFEB] border-b border-[#E7DFD5] text-stone-700 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3.5 px-4">Ref & Customer</th>
                      <th className="py-3.5 px-4">Event & Date</th>
                      <th className="py-3.5 px-4">Venue & Guests</th>
                      <th className="py-3.5 px-4">Est. Budget</th>
                      <th className="py-3.5 px-4">Walkthrough</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-stone-500">
                          No inquiries found matching this search or status filter.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => {
                        const vName = venues.find(v => v.id === inq.venueId)?.name || inq.venueId;
                        const whatsAppUrl = createWhatsAppChatUrl({
                          venueName: vName,
                          eventType: inq.eventType,
                          guestCount: inq.guestCount,
                          date: inq.eventDate,
                          customerName: inq.customerName,
                          referenceId: inq.id
                        });

                        return (
                          <tr key={inq.id} className="hover:bg-[#FDFBF7] transition-colors">
                            <td className="py-3.5 px-4">
                              <span className="font-mono text-[11px] text-stone-500 font-semibold block">{inq.id}</span>
                              <span className="font-bold text-stone-900 block mt-0.5">{inq.customerName}</span>
                              <span className="text-[11px] text-stone-500 font-mono">{inq.phone}</span>
                            </td>

                            <td className="py-3.5 px-4">
                              <span className="font-semibold uppercase text-stone-800 block">
                                {inq.eventType}
                              </span>
                              <span className="text-stone-600 block mt-0.5 font-mono">
                                {inq.eventDate} ({inq.timeSlot})
                              </span>
                            </td>

                            <td className="py-3.5 px-4">
                              <span className="font-medium text-stone-800 block truncate max-w-[180px]">
                                {vName}
                              </span>
                              <span className="text-stone-500 font-mono">
                                {inq.guestCount} Guests
                              </span>
                            </td>

                            <td className="py-3.5 px-4 font-mono font-semibold text-[#9C7336]">
                              {inq.estimatedBudgetPkr ? formatPricePkr(inq.estimatedBudgetPkr) : '—'}
                            </td>

                            <td className="py-3.5 px-4">
                              {inq.visitRequested && inq.visitDate ? (
                                <span className="text-purple-700 font-semibold block text-[11px]">
                                  {inq.visitDate} @ {inq.visitTime || 'TBD'}
                                </span>
                              ) : (
                                <span className="text-stone-400 text-[11px]">No visit set</span>
                              )}
                            </td>

                            <td className="py-3.5 px-4">
                              <select
                                value={inq.status}
                                onChange={(e) => handleStatusChange(inq.id, e.target.value as InquiryStatus)}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${getStatusColor(inq.status)} cursor-pointer`}
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="visit_scheduled">Visit Scheduled</option>
                                <option value="quotation_sent">Quotation Sent</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </td>

                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <a
                                  href={whatsAppUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-md transition-colors"
                                  title="Message on WhatsApp"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => {
                                    setSelectedInquiry(inq);
                                    setAdminNoteText(inq.adminNotes || '');
                                  }}
                                  className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
                                  title="View Details & Notes"
                                >
                                  <FileText className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                                  title="Delete Inquiry"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: SCHEDULED VENUE VISITS */}
        {activeTab === 'visits' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E7DFD5]">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917] mb-2">
                Upcoming Family Walkthrough Schedule
              </h3>
              <p className="text-xs text-stone-600 mb-6">
                List of confirmed walkthroughs where couples and family elders are visiting to inspect chandeliers, stage layout, and bridal dressing rooms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inquiries.filter(i => i.visitRequested && i.visitDate).map(inq => {
                  const vName = venues.find(v => v.id === inq.venueId)?.name || inq.venueId;
                  return (
                    <div key={inq.id} className="p-4 rounded-xl border border-[#E7DFD5] bg-[#FDFBF7] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                          {inq.visitDate}
                        </span>
                        <span className="text-xs font-semibold text-stone-600">{inq.visitTime}</span>
                      </div>
                      <p className="font-bold text-sm text-[#1C1917]">{inq.customerName}</p>
                      <p className="text-xs text-stone-600">Interested in: <span className="font-semibold">{vName}</span></p>
                      <p className="text-xs text-stone-500">Event: {inq.eventType.toUpperCase()} · {inq.guestCount} guests</p>
                      <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
                        <a href={`tel:${inq.phone}`} className="text-stone-700 font-mono font-semibold flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#B48C46]" />
                          <span>{inq.phone}</span>
                        </a>
                        <button
                          onClick={() => handleStatusChange(inq.id, 'confirmed')}
                          className="text-[11px] font-bold text-emerald-700 hover:underline"
                        >
                          Mark Confirmed
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MANAGE HALLS */}
        {activeTab === 'venues' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {venues.map(venue => (
                <div key={venue.id} className="bg-white p-6 rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <img src={venue.image} alt={venue.name} className="w-full h-36 object-cover rounded-xl" />
                    <h4 className="font-serif-luxury text-lg font-bold text-[#1C1917]">{venue.name}</h4>
                    <p className="text-xs text-stone-600 line-clamp-2">{venue.description}</p>
                    <div className="text-xs text-stone-700 space-y-1 font-mono">
                      <p>Capacity: {venue.capacityMin} – {venue.capacityMax} Guests</p>
                      <p>Covered Area: {venue.areaSqFt.toLocaleString()} sq.ft.</p>
                      <p className="text-[#9C7336] font-bold">Base Rate: {formatPricePkr(venue.startingPricePkr)}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-stone-100 mt-4">
                    <button
                      onClick={() => setEditingVenue(venue)}
                      className="w-full py-2 bg-[#F5EFEB] hover:bg-[#E7DFD5] text-stone-800 text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit Specifications</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MANAGE PACKAGES */}
        {activeTab === 'packages' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map(pkg => (
                <div key={pkg.id} className="bg-white p-6 rounded-2xl border border-[#E7DFD5] shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9C7336]">Tier {pkg.tier}</span>
                    <h4 className="font-serif-luxury text-xl font-bold text-[#1C1917]">{pkg.name}</h4>
                    <p className="font-mono text-2xl font-bold text-[#1C1917]">
                      Rs. {pkg.pricePerPersonPkr.toLocaleString()}
                      <span className="text-xs font-normal text-stone-500"> / head</span>
                    </p>
                    <p className="text-xs text-stone-600">{pkg.description}</p>
                    <p className="text-xs text-stone-500">Min Guests: {pkg.minGuests}</p>
                  </div>
                  <div className="pt-4 border-t border-stone-100 mt-4">
                    <button
                      onClick={() => setEditingPackage(pkg)}
                      className="w-full py-2 bg-[#F5EFEB] hover:bg-[#E7DFD5] text-stone-800 text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Edit Package Pricing</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Inquiry Detail & Staff Notes Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#E7DFD5] max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-xs font-mono text-stone-500 font-bold">{selectedInquiry.id}</span>
                <h3 className="font-serif-luxury text-lg font-bold text-[#1C1917]">{selectedInquiry.customerName}</h3>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="p-1 text-stone-400 hover:text-stone-700"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs space-y-2 text-stone-700">
              <div className="flex justify-between"><span className="text-stone-500">Phone:</span><span className="font-mono font-bold">{selectedInquiry.phone}</span></div>
              <div className="flex justify-between"><span className="text-stone-500">Email:</span><span>{selectedInquiry.email || 'N/A'}</span></div>
              <div className="flex justify-between"><span className="text-stone-500">City / Area:</span><span>{selectedInquiry.city}</span></div>
              <div className="flex justify-between"><span className="text-stone-500">Event Date:</span><span className="font-mono font-bold">{selectedInquiry.eventDate} ({selectedInquiry.timeSlot})</span></div>
              <div className="flex justify-between"><span className="text-stone-500">Expected Guests:</span><span className="font-mono font-bold">{selectedInquiry.guestCount}</span></div>
              {selectedInquiry.notes && (
                <div className="p-3 bg-[#F5EFEB] rounded-lg mt-2">
                  <span className="font-bold text-stone-800 block mb-1">Customer Note:</span>
                  <p>{selectedInquiry.notes}</p>
                </div>
              )}
            </div>

            {/* Staff Internal Notes */}
            <div className="pt-2 border-t border-stone-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Internal Staff Follow-Up Notes
              </label>
              <textarea
                rows={3}
                value={adminNoteText}
                onChange={(e) => setAdminNoteText(e.target.value)}
                placeholder="Log discussion details, family special requests, or advance payment status..."
                className="w-full p-2.5 bg-[#FDFBF7] border border-[#E7DFD5] rounded-lg text-xs"
              />
              <button
                onClick={handleSaveNotes}
                className="mt-2 px-4 py-2 bg-[#1C1917] text-white text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-colors"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Venue Modal */}
      {editingVenue && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form onSubmit={handleUpdateVenueSubmit} className="bg-white rounded-2xl border border-[#E7DFD5] max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-serif-luxury text-lg font-bold text-[#1C1917]">
              Edit {editingVenue.name}
            </h3>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Starting Price (PKR)</label>
              <input
                type="number"
                value={editingVenue.startingPricePkr}
                onChange={(e) => setEditingVenue({ ...editingVenue, startingPricePkr: Number(e.target.value) })}
                className="w-full p-2 border border-[#E7DFD5] rounded-lg text-xs font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Min Capacity</label>
                <input
                  type="number"
                  value={editingVenue.capacityMin}
                  onChange={(e) => setEditingVenue({ ...editingVenue, capacityMin: Number(e.target.value) })}
                  className="w-full p-2 border border-[#E7DFD5] rounded-lg text-xs font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Max Capacity</label>
                <input
                  type="number"
                  value={editingVenue.capacityMax}
                  onChange={(e) => setEditingVenue({ ...editingVenue, capacityMax: Number(e.target.value) })}
                  className="w-full p-2 border border-[#E7DFD5] rounded-lg text-xs font-mono"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setEditingVenue(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#B48C46] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#9C7336]"
              >
                Save Hall Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Package Modal */}
      {editingPackage && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form onSubmit={handleUpdatePackageSubmit} className="bg-white rounded-2xl border border-[#E7DFD5] max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="font-serif-luxury text-lg font-bold text-[#1C1917]">
              Edit {editingPackage.name} Pricing
            </h3>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Per Person Rate (PKR / Head)</label>
              <input
                type="number"
                value={editingPackage.pricePerPersonPkr}
                onChange={(e) => setEditingPackage({ ...editingPackage, pricePerPersonPkr: Number(e.target.value) })}
                className="w-full p-2 border border-[#E7DFD5] rounded-lg text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Minimum Guests Requirement</label>
              <input
                type="number"
                value={editingPackage.minGuests}
                onChange={(e) => setEditingPackage({ ...editingPackage, minGuests: Number(e.target.value) })}
                className="w-full p-2 border border-[#E7DFD5] rounded-lg text-xs font-mono"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setEditingPackage(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#B48C46] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#9C7336]"
              >
                Update Pricing
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
