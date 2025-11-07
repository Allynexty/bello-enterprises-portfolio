// FIX: Import React to use the React.ReactNode type.
import React from 'react';

export interface Project {
  partner: string;
  overview: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: React.ReactNode;
}
