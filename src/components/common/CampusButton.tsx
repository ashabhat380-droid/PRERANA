import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { Radius } from '@/constants/spacing';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

export default function CampusButton({
  title, onPress, variant = 'green', style,
}: { title: string; onPress: () => void; variant?: 'green'|'purple'|'outline'; style?: ViewStyle }) {
  const { colors } = useCampusTheme();
  const bg = variant === 'green' ? colors.green : variant === 'purple' ? colors.purple : 'transparent';
  return (
    <Pressable onPress={onPress} style={[styles.base, { backgroundColor: bg, borderColor: colors.borderStrong }, style]}>
      <Text style={[Typography.button, { color: variant === 'outline' ? colors.textPrimary : colors.background }]}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  base: { minHeight: 48, paddingHorizontal: 18, borderRadius: Radius.md, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
});
