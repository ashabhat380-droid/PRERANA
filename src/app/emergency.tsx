import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function Emergency(){const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Emergency Safety Support" subtitle="Immediate help is available"/><CampusCard style={{borderColor:colors.danger}}><Text style={[Typography.h1,{color:colors.danger}]}>If you are in immediate danger</Text><Text style={[Typography.body,{color:colors.textSecondary,marginTop:8}]}>Contact local emergency services or a trusted person who can help you reach safety. Do not wait for an assessment to finish if you need urgent help.</Text></CampusCard><CampusCard style={{marginTop:10}}><Text style={[Typography.h3,{color:colors.textPrimary}]}>Trusted support</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:5}]}>A support person, case worker, medical professional or emergency service can help you take the next safe step.</Text></CampusCard><CampusButton title="Return to Support" onPress={()=>{}} variant="outline" style={{marginTop:14}}/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
