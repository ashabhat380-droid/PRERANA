import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Radius } from '@/constants/spacing';
import { useCampusTheme } from '@/context/ThemeContext';

export default function CampusCard({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  const { colors } = useCampusTheme();
  return <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }, style]}>{children}</View>;
}
const styles = StyleSheet.create({ card: { borderWidth: 1, borderRadius: Radius.lg, padding: 16 } });
