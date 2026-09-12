import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampusCard from '@/components/common/CampusCard';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

export default function AppUsageModule() {
  const { colors } = useCampusTheme();
  return <CampusCard><Text style={[Typography.h3,{color:colors.textPrimary}]}>◉  App Usage</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:3}]}>Session and usage patterns</Text><View style={styles.row}><Metric label="Sessions" value="6"/><Metric label="Avg. duration" value="14m"/><Metric label="Trend" value="Stable"/></View><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:12}]}>Demo data shows session frequency, duration and time-of-use patterns.</Text></CampusCard>;
}
function Metric({label,value}:{label:string;value:string}){const {colors}=useCampusTheme();return <View style={[styles.metric,{backgroundColor:colors.surfaceSoft,borderColor:colors.borderSoft}]}><Text style={[styles.value,{color:colors.textPrimary}]}>{value}</Text><Text style={[Typography.caption,{color:colors.textMuted}]}>{label}</Text></View>}
const styles=StyleSheet.create({row:{flexDirection:'row',gap:8,marginTop:14},metric:{flex:1,borderWidth:1,borderRadius:10,padding:10},value:{fontSize:15,fontWeight:'800',marginBottom:3}});
