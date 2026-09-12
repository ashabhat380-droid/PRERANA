import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/common/ScreenHeader';
import CampusCard from '@/components/common/CampusCard';
import CampusButton from '@/components/common/CampusButton';
import { useCampusTheme } from '@/context/ThemeContext';
import { Typography } from '@/constants/typography';

const tiers=['Self-guided support','Trusted person / community','Case worker / rehabilitation','Mental-health professional','Emergency / crisis support'];
export default function Support(){const router=useRouter();const{colors}=useCampusTheme();return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><ScreenHeader title="Support & Next Steps" subtitle="From understanding to action"/><CampusCard><Text style={[Typography.caption,{color:colors.textMuted}]}>YOUR SUPPORT TIER</Text><Text style={[Typography.h1,{color:colors.warning,marginTop:4}]}>Moderate Concern</Text><Text style={[Typography.bodySmall,{color:colors.textSecondary}]}>A case worker / rehabilitation pathway may be appropriate based on the current demo evidence.</Text></CampusCard><Text style={[Typography.h3,{color:colors.textPrimary,marginTop:18,marginBottom:8}]}>Support pathways</Text>{tiers.map((t,i)=><View key={t} style={[styles.row,{backgroundColor:colors.surface,borderColor:colors.border}]}><Text style={[styles.num,{backgroundColor:i===4?colors.danger:colors.purple,color:colors.white}]}>{i+1}</Text><Text style={[Typography.body,{color:colors.textPrimary,fontWeight:'700',flex:1}]}>{t}</Text></View>)}<CampusButton title="Recovery Navigator →" onPress={()=>router.push('/recovery-navigator')} variant="purple" style={{marginTop:14}}/><CampusButton title="Additional Support Tools" onPress={()=>router.push('/support-tools')} variant="outline" style={{marginTop:9}}/><CampusButton title="Next Check-in" onPress={()=>router.push('/next-steps')} variant="outline" style={{marginTop:9}}/></ScrollView>}
const styles=StyleSheet.create({container:{flexGrow:1,padding:20,paddingTop:38},row:{minHeight:48,borderWidth:1,borderRadius:10,padding:9,marginTop:7,flexDirection:'row',alignItems:'center'},num:{width:28,height:28,borderRadius:14,textAlign:'center',textAlignVertical:'center',fontWeight:'800',marginRight:10}});
