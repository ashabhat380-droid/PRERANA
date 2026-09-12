import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

export default function ExpressiveTask({title,prompt}:{title:string;prompt:string}){const router=useRouter();const{colors}=useCampusTheme();const[text,setText]=useState('');return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title={title} subtitle="Expressive activity"/><Text style={[Typography.h2,{color:colors.textPrimary}]}>{prompt}</Text><TextInput value={text} onChangeText={setText} multiline placeholder="Take your time. There is no right or wrong response." placeholderTextColor={colors.textMuted} style={[styles.input,{backgroundColor:colors.surface,borderColor:colors.border,color:colors.textPrimary}]}/><CampusButton title="Save response →" onPress={()=>router.push('/projective-results')} variant="purple" style={{marginTop:14}}/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38},input:{minHeight:210,borderWidth:1,borderRadius:12,padding:14,textAlignVertical:'top',marginTop:20}});
