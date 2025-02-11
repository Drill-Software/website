'use client';

import { motion } from 'framer-motion';

const timelineEntries = [
  {
    date: 'February 9, 2024',
    title: 'Authentication, Teams & Incidents',
    description: [
      'Create an account and team, log in and reset password',
      'Invite a team member to your team',
      'Create and delete services',
      'Manually create an incident, assign to a team member, and track progress',
      'Delete an incident including all activities',
      'Add comments and mention team members',
      'Full incident timeline with comments, status updates and actions',
      'Start an integrated video and audio bridge via Daily',
      'Add a status page URL to the incident',
      'Add root cause to incident',
      'Update team settings such as name, logo and URL',
      'Delete a team with all data deleted',
      'Update profile including name, email, password and photo'
    ],
    tag: 'Release'
  }
];

const TimelineEntry = ({ date, title, description, tag, isLast }) => {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <div className="absolute left-3 top-3 -ml-px h-full w-0.5 bg-gray-800" aria-hidden="true" />
      )}
      <div className="relative flex items-start group">
        <motion.span 
          className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-[#040404]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
          </svg>
        </motion.span>
        <div className="min-w-0 flex-1 ml-4">
          <div className="text-sm font-medium text-gray-400">{date}</div>
          <div className="mt-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
                {tag}
              </span>
            </div>
            {Array.isArray(description) ? (
              <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-400">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Changelog() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Keep track of updates and improvements to our platform
          </p>
        </div>
        
        <div className="flow-root">
          <ul className="relative">
            {timelineEntries.map((entry, index) => (
              <li key={entry.date}>
                <TimelineEntry 
                  {...entry} 
                  isLast={index === timelineEntries.length - 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 