import React, { createContext, useContext, useMemo, useState } from 'react';

export type AssessmentHistory = {
  id: string;
  date: string;
  phq9?: number;
  gad7?: number;
  dass21?: number;
  who5?: number;
  source: 'objective' | 'projective' | 'check-in';
};

type AssessmentContextValue = {
  checkInLevel: number | null;
  setCheckInLevel: (value: number) => void;
  scores: { phq9?: number; gad7?: number; dass21?: number; who5?: number };
  setScore: (key: keyof AssessmentContextValue['scores'], value: number) => void;
  selectedPassive: string[];
  setSelectedPassive: React.Dispatch<React.SetStateAction<string[]>>;
  history: AssessmentHistory[];
  addHistory: (entry: AssessmentHistory) => void;
};

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [checkInLevel, setCheckInLevel] = useState<number | null>(null);
  const [scores, setScores] = useState<AssessmentContextValue['scores']>({});
  const [selectedPassive, setSelectedPassive] = useState(['app', 'typing', 'activity', 'context']);
  const [history, setHistory] = useState<AssessmentHistory[]>([
    { id: '1', date: '2026-08-18', phq9: 16, gad7: 14, dass21: 22, who5: 38, source: 'objective' },
    { id: '2', date: '2026-08-26', phq9: 14, gad7: 12, dass21: 20, who5: 42, source: 'objective' },
    { id: '3', date: '2026-09-03', phq9: 10, gad7: 10, dass21: 18, who5: 48, source: 'objective' },
  ]);

  const value = useMemo(() => ({
    checkInLevel,
    setCheckInLevel,
    scores,
    setScore: (key: keyof AssessmentContextValue['scores'], value: number) =>
      setScores(prev => ({ ...prev, [key]: value })),
    selectedPassive,
    setSelectedPassive,
    history,
    addHistory: (entry: AssessmentHistory) => setHistory(prev => [...prev, entry]),
  }), [checkInLevel, scores, selectedPassive, history]);

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error('useAssessment must be used inside AssessmentProvider');
  return ctx;
}
