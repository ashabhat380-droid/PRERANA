import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampusCard from '@/components/common/CampusCard';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

const signals=['Safety context','Family/community context','Financial or relief activity','Support-service engagement'];
export default function ContextSignalsModule(){const{colors}=useCampusTheme();return <CampusCard><Text style={[Typography.h3,{color:colors.textPrimary}]}>✓  Context Signals</Text><Text style={[Typography.bodySmall,{color:colors.textMuted}]}>Supplementary life-context signals</Text>{signals.map(s=><View key={s} style={[styles.row,{backgroundColor:colors.surfaceSoft,borderColor:colors.borderSoft}]}><Text style={{color:colors.green,fontWeight:'800'}}>✓</Text><Text style={[Typography.bodySmall,{color:colors.textSecondary,marginLeft:9,fontWeight:'600'}]}>{s}</Text></View>)}<Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:12}]}>Context is supplementary and should be interpreted with other evidence.</Text></CampusCard>}
const styles=StyleSheet.create({row:{flexDirection:'row',alignItems:'center',borderWidth:1,borderRadius:10,padding:10,marginTop:7}});
