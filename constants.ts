import React from 'react';
import { Project, Partner } from './types';

// Placeholder Logo Components
// FIX: Replaced JSX with React.createElement to be valid in a .ts file.
const LogoPlaceholder1 = () => React.createElement('div', { className: "text-xl sm:text-2xl font-bold text-gray-500" }, 'GLOBAL MARINE');
const LogoPlaceholder2 = () => React.createElement('div', { className: "text-xl sm:text-2xl font-bold text-gray-500" }, 'APEX CONSTRUCT');
const LogoPlaceholder3 = () => React.createElement('div', { className: "text-xl sm:text-2xl font-bold text-gray-500" }, 'TECH SOLUTIONS');
const LogoPlaceholder4 = () => React.createElement('div', { className: "text-xl sm:text-2xl font-bold text-gray-500" }, 'AGRO-ALLIED');
const LogoPlaceholder5 = () => React.createElement('div', { className: "text-xl sm:text-2xl font-bold text-gray-500" }, 'LOGISTIX');
const LogoPlaceholder6 = () => React.createElement('div', { className: "text-xl sm:text-2xl font-bold text-gray-500" }, 'POWERGEN CORP');


export const PARTNERS_DATA: Partner[] = [
  // FIX: Replaced JSX component usage with React.createElement.
  { name: 'Global Marine Inc.', logo: React.createElement(LogoPlaceholder1) },
  { name: 'Apex Construction Ltd.', logo: React.createElement(LogoPlaceholder2) },
  { name: 'Tech Solutions PLC', logo: React.createElement(LogoPlaceholder3) },
  { name: 'Nigeria Agro-Allied Industries', logo: React.createElement(LogoPlaceholder4) },
  { name: 'Logistix Africa', logo: React.createElement(LogoPlaceholder5) },
  { name: 'PowerGen Corporation', logo: React.createElement(LogoPlaceholder6) },
];

export const PROJECTS_DATA: Project[] = [
    { 
        partner: 'Global Marine Inc.', 
        overview: 'Comprehensive supply of marine engine spare parts and maintenance equipment for the MV Sea Lion vessel.',
        image: 'https://picsum.photos/seed/marine/600/400'
    },
    { 
        partner: 'Apex Construction Ltd.', 
        overview: 'Sourced and delivered heavy-duty construction equipment and safety gear for the Eko Tower project.',
        image: 'https://picsum.photos/seed/construction/600/400'
    },
    { 
        partner: 'PowerGen Corporation', 
        overview: 'Facilitated the import of three high-capacity gas turbines and provided logistical support for a new power plant.',
        image: 'https://picsum.photos/seed/power/600/400'
    },
     { 
        partner: 'Nigeria Agro-Allied Industries', 
        overview: 'Managed the export of 500 metric tons of processed cassava to European markets, handling all documentation and shipping.',
        image: 'https://picsum.photos/seed/agro/600/400'
    },
];
