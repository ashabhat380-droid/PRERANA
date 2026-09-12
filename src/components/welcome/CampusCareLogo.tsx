import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCampusTheme } from '@/context/ThemeContext';

export default function CampusCareLogo() {
  const { colors } = useCampusTheme();
  return (
    <View style={styles.wrap}>
      <Text style={[styles.mark, { color: colors.green }]}>♧</Text>
      <Text style={[styles.name, { color: colors.textPrimary }]}>PRERANA</Text>
    </View>
  );
}
const styles = StyleSheet.create({ wrap: { alignItems: 'center' }, mark: { fontSize: 64, lineHeight: 66, transform: [{ rotate: '180deg' }] }, name: { fontSize: 17, fontWeight: '800', marginTop: 2 } });
