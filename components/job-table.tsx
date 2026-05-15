// components/job-table.tsx
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, X, MapPin, Building2, Briefcase, ArrowUpRight, Search, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  link: string;
  roleDescription?: string;
}

interface JobTableProps {
  jobs: Job[];
}

const typeColors = [
  'bg-primary/10 text-secondary-foreground',
  'bg-secondary/20 text-secondary-foreground',
  'bg-accent/10 text-secondary-foreground',
];

/* ─── Job Detail Modal ──────────────────────────────────────────────────── */
function JobModal({ job, index, onClose }: { job: Job; index: number; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, []);

  if (!mounted) return null;

  const modalContent = (
    /* Backdrop - Fixed, centered positioning */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 space-y-6 animate-slide-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold font-montserrat text-slate-900 leading-tight">{job.title}</h3>
            <span className={`mt-2 inline-block px-3 py-1 text-xs font-semibold font-inter rounded-full ${typeColors[index % 3]}`}>
              {job.type}
            </span>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-slate-600">
            <Building2 className="w-5 h-5 shrink-0 text-primary" />
            <span className="font-medium">{job.company}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <MapPin className="w-5 h-5 shrink-0 text-primary" />
            <span className="font-medium">{job.location}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <Briefcase className="w-5 h-5 shrink-0 text-primary" />
            <span className="font-medium">{job.type}</span>
          </div>
        </div>

        {/* Role Description */}
        {job.roleDescription && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Role Description
            </h4>
            <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {job.roleDescription}
            </div>
          </div>
        )}

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all"
        >
          <a href={job.link} target="_blank" rel="noopener noreferrer">
            Apply Now <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );

  // Render modal as a portal outside the table
  return typeof document !== 'undefined' ? ReactDOM.createPortal(modalContent, document.body) : null;
}

/* ─── Job Table ─────────────────────────────────────────────────────────── */
export function JobTable({ jobs }: JobTableProps) {
  const [selectedJob, setSelectedJob] = useState<{ job: Job; index: number } | null>(null);

  const [search, setSearch] = useState('');
  const [companyFilter, setCompanyFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const { filteredJobs, companies, locations, types } = useMemo(() => {
    if (!jobs) return { filteredJobs: [], companies: [], locations: [], types: [] };

    // Sort alphabetical
    const sorted = [...jobs].sort((a, b) => a.title.localeCompare(b.title));

    // Filter
    const filtered = sorted.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
      const matchesCompany = companyFilter === 'all' || job.company === companyFilter;
      const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
      const matchesType = typeFilter === 'all' || job.type === typeFilter;
      return matchesSearch && matchesCompany && matchesLocation && matchesType;
    });

    return {
      filteredJobs: filtered,
      companies: ['all', ...Array.from(new Set(jobs.map(j => j.company).filter(Boolean)))],
      locations: ['all', ...Array.from(new Set(jobs.map(j => j.location).filter(Boolean)))],
      types: ['all', ...Array.from(new Set(jobs.map(j => j.type).filter(Boolean)))]
    };
  }, [jobs, search, companyFilter, locationFilter, typeFilter]);

  // Helper function to display friendly labels
  const getDisplayLabel = (value: string, type: 'company' | 'location' | 'type') => {
    if (value === 'all') {
      switch (type) {
        case 'company': return 'All Companies';
        case 'location': return 'All Locations';
        case 'type': return 'All Types';
        default: return 'All';
      }
    }
    return value;
  };

  if (!jobs?.length) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl mb-2">🇷🇼</p>
        <p className="font-medium">No openings at the moment.</p>
        <p className="text-sm mt-1">Check back soon — we&rsquo;re growing!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* ── Filters ── */}
      <div className="flex flex-col sm:flex-row gap-4 mb-2 animate-fade-in">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-primary rounded-xl h-11"
          />
        </div>
        <div className="grid grid-cols-2 sm:flex gap-3">
          <Select value={companyFilter} onValueChange={setCompanyFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-slate-50 border-slate-200 focus:ring-primary rounded-xl h-11">
              <SelectValue placeholder="All Companies" />
            </SelectTrigger>
            <SelectContent>
              {companies.map(c => (
                <SelectItem key={c} value={c}>
                  {getDisplayLabel(c, 'company')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-slate-50 border-slate-200 focus:ring-primary rounded-xl h-11">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(l => (
                <SelectItem key={l} value={l}>
                  {getDisplayLabel(l, 'location')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="col-span-2 sm:col-span-1">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[160px] bg-slate-50 border-slate-200 focus:ring-primary rounded-xl h-11">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                {types.map(t => (
                  <SelectItem key={t} value={t}>
                    {getDisplayLabel(t, 'type')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground animate-fade-in">
          <p className="font-medium text-slate-600 mb-4">No matching jobs found.</p>
          <Button 
            variant="outline" 
            onClick={() => { 
              setSearch(''); 
              setCompanyFilter('all'); 
              setLocationFilter('all'); 
              setTypeFilter('all'); 
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <>
          {/* ── MOBILE: Card list (single column) ── */}
          <div className="lg:hidden space-y-3">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 shadow-sm animate-slide-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-slate-900 truncate">{job.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{job.company}</p>
                  <span className={`mt-1 inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors[index % 3]}`}>
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedJob({ job, index })}
                    className="rounded-full text-xs px-4 shadow-sm h-8 bg-primary hover:bg-primary/90 text-white"
                  >
                    Description
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-primary hover:bg-primary/90 text-white text-xs px-4 shadow-sm h-8"
                  >
                    <a href={job.link} target="_blank" rel="noopener noreferrer">Apply</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* ── DESKTOP: Full table (no horizontal scroll) ── */}
          <div className="hidden lg:block w-full">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="border-b-2 border-primary/10 bg-muted/30">
                  <th className="py-4 px-4 font-bold text-foreground tracking-wide text-left">
                    Position
                  </th>
                  <th className="py-4 px-4 font-bold text-foreground tracking-wide text-left">
                    Company
                  </th>
                  <th className="py-4 px-4 font-bold text-foreground tracking-wide text-left">
                    Location
                  </th>
                  <th className="py-4 px-4 font-bold text-foreground tracking-wide text-left">
                    Type
                  </th>
                  <th className="py-4 px-4 font-bold text-foreground tracking-wide text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/60 hover:bg-primary/5 transition-all duration-200 animate-slide-up group"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <td className="py-4 px-4 font-semibold text-foreground group-hover:text-primary transition-colors break-words">
                      {job.title}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground break-words">
                      {job.company}
                    </td>
                    <td className="py-4 px-4 text-muted-foreground break-words">
                      {job.location}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${typeColors[index % 3]}`}>
                        {job.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedJob({ job, index })}
                          className="rounded-full bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform shadow-sm hover:shadow-primary/30 hover:shadow-md text-sm px-4 h-9"
                        >
                          Role Description
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform shadow-sm hover:shadow-primary/30 hover:shadow-md text-sm px-4 h-9"
                        >
                          <a href={job.link} target="_blank" rel="noopener noreferrer">
                            Apply <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── TABLET: Slightly smaller table view ── */}
          <div className="hidden sm:block lg:hidden w-full overflow-x-auto">
            <table className="min-w-[800px] w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/10 bg-muted/30">
                  <th className="py-4 px-3 font-bold text-foreground tracking-wide text-left">
                    Position
                  </th>
                  <th className="py-4 px-3 font-bold text-foreground tracking-wide text-left">
                    Company
                  </th>
                  <th className="py-4 px-3 font-bold text-foreground tracking-wide text-left">
                    Location
                  </th>
                  <th className="py-4 px-3 font-bold text-foreground tracking-wide text-left">
                    Type
                  </th>
                  <th className="py-4 px-3 font-bold text-foreground tracking-wide text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/60 hover:bg-primary/5 transition-all duration-200 animate-slide-up group"
                  >
                    <td className="py-3 px-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </td>
                    <td className="py-3 px-3 text-muted-foreground">
                      {job.company}
                    </td>
                    <td className="py-3 px-3 text-muted-foreground">
                      {job.location}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${typeColors[index % 3]}`}>
                        {job.type}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedJob({ job, index })}
                          className="rounded-full text-xs px-3 h-8"
                        >
                          Details
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full bg-primary hover:bg-primary/90 text-white text-xs px-3 h-8"
                        >
                          <a href={job.link} target="_blank" rel="noopener noreferrer">
                            Apply
                          </a>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── Modal ── */}
      {selectedJob && (
        <JobModal
          job={selectedJob.job}
          index={selectedJob.index}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}