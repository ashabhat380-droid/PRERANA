import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

export default function ScreenHeader({ title, subtitle, back = true }: { title: string; subtitle?: string; back?: boolean }) {
  const router = useRouter();
  const { colors } = useCampusTheme();
  return (
    <View style={styles.wrap}>
      {back ? <Pressable onPress={() => router.back()} style={styles.back}><Text style={[styles.arrow, { color: colors.textPrimary }]}>‹</Text></Pressable> : <View style={styles.back} />}
      <View style={{ flex: 1 }}>
        <Text style={[Typography.h2, { color: colors.textPrimary }]}>{title}</Text>
        {subtitle ? <Text style={[Typography.bodySmall, { color: colors.textMuted }]}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({ wrap: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 }, back: { width: 36 }, arrow: { fontSize: 32, lineHeight: 34 } });
