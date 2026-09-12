import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Radius } from '@/constants/spacing';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

export default function MoodCard({ title, description, icon, selected, onPress, tone }: {
  title: string; description: string; icon: string; selected: boolean; onPress: () => void; tone: 'green'|'blue'|'yellow'|'purple'|'red';
}) {
  const { colors } = useCampusTheme();
  const accent = tone === 'green' ? colors.green : tone === 'blue' ? colors.info : tone === 'yellow' ? colors.warning : tone === 'purple' ? colors.purpleBright : colors.danger;
  return (
    <Pressable onPress={onPress} style={[styles.card, { backgroundColor: colors.surface, borderColor: selected ? accent : colors.border }, selected && { shadowColor: accent, shadowOpacity: 0.35, shadowRadius: 10, elevation: 4 }]}>
      <Text style={[styles.icon, { color: accent, borderColor: accent }]}>{icon}</Text>
      <Text style={[Typography.h3, { color: colors.textPrimary, textAlign: 'center' }]}>{title}</Text>
      <Text style={[Typography.caption, { color: colors.textMuted, textAlign: 'center', marginTop: 5 }]}>{description}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({ card: { width: '48%', minHeight: 142, borderWidth: 1, borderRadius: Radius.lg, padding: 13, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }, icon: { width: 48, height: 48, borderRadius: 24, borderWidth: 1, textAlign: 'center', textAlignVertical: 'center', fontSize: 24, marginBottom: 9 } });
