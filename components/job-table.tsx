// components/job-table.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, X, MapPin, Building2, Briefcase, ArrowUpRight } from 'lucide-react';

export interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  link: string;
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
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 space-y-6 animate-slide-up"
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
            <span className="font-medium">{job.department}</span>
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
}

/* ─── Job Table ─────────────────────────────────────────────────────────── */
export function JobTable({ jobs }: JobTableProps) {
  const [selectedJob, setSelectedJob] = useState<{ job: Job; index: number } | null>(null);

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
    <>
      {/* ── MOBILE: Card list (single column) ── */}
      <div className="sm:hidden space-y-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 shadow-sm animate-slide-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="min-w-0">
              <p className="font-bold text-slate-900 truncate">{job.title}</p>
              <span className={`mt-1 inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors[index % 3]}`}>
                {job.type}
              </span>
            </div>
            <Button
              size="sm"
              onClick={() => setSelectedJob({ job, index })}
              className="shrink-0 rounded-full bg-primary hover:bg-primary/90 text-white text-xs px-4 py-2 hover:scale-105 transition-all shadow-sm"
            >
              View
            </Button>
          </div>
        ))}
      </div>

      {/* ── DESKTOP: Full table ── */}
      <table className="hidden sm:table w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary/10 bg-muted/30">
            <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
              Position
            </th>
            <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
              Department
            </th>
            <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
              Location
            </th>
            <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
              Type
            </th>
            <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-center whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={index}
              className="border-b border-border/60 hover:bg-primary/5 transition-all duration-200 animate-slide-up group"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <td className="py-4 px-3 sm:px-4 font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {job.title}
              </td>
              <td className="py-4 px-3 sm:px-4 text-muted-foreground whitespace-nowrap">
                {job.department}
              </td>
              <td className="py-4 px-3 sm:px-4 text-muted-foreground whitespace-nowrap">
                {job.location}
              </td>
              <td className="py-4 px-3 sm:px-4 whitespace-nowrap">
                <span className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-full ${typeColors[index % 3]}`}>
                  {job.type}
                </span>
              </td>
              <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform shadow-sm hover:shadow-primary/30 hover:shadow-md text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                >
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    Apply <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── Modal (mobile "View" trigger) ── */}
      {selectedJob && (
        <JobModal
          job={selectedJob.job}
          index={selectedJob.index}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
}