import React from 'react';

export enum AppRoute {
  DASHBOARD = '/',
  STUDY = '/study',
  SIMULATION = '/simulation',
  HISTORY = '/history',
  SETTINGS = '/settings'
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: AppRoute;
}

export enum Difficulty {
  EASY = 'Fácil',
  HARD = 'Difícil',
  HARDEST = 'Muito Difícil'
}

// Placeholder for future Question type
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  difficulty: Difficulty;
}