import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampusCard from '@/components/common/CampusCard';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

export default function ActivityPatternsModule(){const{colors}=useCampusTheme();const rows=[['08:00','72%'],['14:00','48%'],['20:00','64%']];return <CampusCard><Text style={[Typography.h3,{color:colors.textPrimary}]}>▣  Activity Patterns</Text><Text style={[Typography.bodySmall,{color:colors.textMuted}]}>Active and inactive periods</Text>{rows.map(([time,width])=><View key={time} style={styles.row}><Text style={[styles.time,{color:colors.textMuted}]}>{time}</Text><View style={[styles.track,{backgroundColor:colors.surfaceSoft}]}><View style={[styles.fill,{width,backgroundColor:colors.green}]}/></View></View>)}<Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:8}]}>Demo patterns illustrate routine and engagement changes.</Text></CampusCard>}
const styles=StyleSheet.create({row:{flexDirection:'row',alignItems:'center',marginTop:12},time:{width:48,fontSize:10},track:{flex:1,height:9,borderRadius:99,overflow:'hidden'},fill:{height:'100%',borderRadius:99}});
