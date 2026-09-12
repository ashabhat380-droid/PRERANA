import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CampusCard from '@/components/common/CampusCard';
import { Typography } from '@/constants/typography';
import { useCampusTheme } from '@/context/ThemeContext';

export default function LocationPatternsModule({permitted=false}:{permitted?:boolean}){const{colors}=useCampusTheme();return <CampusCard><Text style={[Typography.h3,{color:colors.textPrimary}]}>⌖  Location Patterns</Text><Text style={[Typography.bodySmall,{color:colors.textMuted}]}>Optional general area trends</Text><View style={[styles.box,{backgroundColor:permitted?colors.greenSoft:colors.purpleSoft,borderColor:permitted?colors.green:colors.purple}]}><Text style={[Typography.h3,{color:permitted?colors.green:colors.purple}]}>{permitted?'Permission provided':'Permission required'}</Text><Text style={[Typography.bodySmall,{color:colors.textSecondary,marginTop:4}]}>Only use location patterns with explicit consent. This demo does not perform real tracking.</Text></View></CampusCard>}
const styles=StyleSheet.create({box:{marginTop:14,borderWidth:1,borderRadius:10,padding:12}});
