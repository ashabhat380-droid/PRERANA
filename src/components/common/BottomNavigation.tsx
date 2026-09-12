import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { useCampusTheme } from '@/context/ThemeContext';
import { Radius } from '@/constants/spacing';

const items = [
  { label: 'Home', icon: '⌂', route: '/dashboard' },
  { label: 'Support', icon: '♡', route: '/support' },
  { label: 'Resources', icon: '◇', route: '/emotional-expression' },
  { label: 'Profile', icon: '○', route: '/profile' },
];

export default function BottomNavigation() {
  const router = useRouter();
  const path = usePathname();
  const { colors } = useCampusTheme();
  return (
    <View style={[styles.bar, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {items.map(item => {
        const active = path === item.route;
        return (
          <Pressable key={item.label} onPress={() => router.push(item.route as any)} style={[styles.item, active && { backgroundColor: colors.greenSoft }]}>
            <Text style={{ color: active ? colors.green : colors.textMuted, fontSize: 20 }}>{item.icon}</Text>
            <Text style={{ color: active ? colors.green : colors.textMuted, fontSize: 10, fontWeight: '700' }}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({ bar: { flexDirection: 'row', borderWidth: 1, borderRadius: Radius.xl, padding: 6, marginTop: 14 }, item: { flex: 1, alignItems: 'center', paddingVertical: 7, borderRadius: Radius.md, gap: 2 } });
