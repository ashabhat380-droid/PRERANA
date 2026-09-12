import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function Profile(){const{colors,toggleTheme,mode}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Profile" subtitle="Privacy, preferences and support"/><CampusCard><Text style={[Typography.h3,{color:colors.textPrimary}]}>Theme</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:4}]}>Current mode: {mode}</Text><CampusButton title="Toggle Light / Dark Mode" onPress={toggleTheme} variant="outline" style={{marginTop:12}}/></CampusCard><CampusCard style={{marginTop:10}}><Text style={[Typography.h3,{color:colors.textPrimary}]}>Privacy & dignity</Text><Text style={[Typography.bodySmall,{color:colors.textMuted,marginTop:5}]}>Your information should be handled confidentially and used only for appropriate support and care pathways.</Text></CampusCard></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38}});
