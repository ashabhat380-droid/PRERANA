import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/context/ThemeContext';
import { AssessmentProvider } from '@/context/AssessmentContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AssessmentProvider>
        <Stack screenOptions={{ headerShown: false, animation: 'fade' }} />
      </AssessmentProvider>
    </ThemeProvider>
  );
}
