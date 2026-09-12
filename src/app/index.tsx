import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import CampusButton from '@/components/common/CampusButton';
import CampusCareLogo from '@/components/welcome/CampusCareLogo';
import CampusCard from '@/components/common/CampusCard';
import { Typography } from '@/constants/typography';
import { Radius } from '@/constants/spacing';
import { useCampusTheme } from '@/context/ThemeContext';

const points = ['Confidential & secure','Personalized support','Access to government schemes','Track your progress'];

export default function Welcome() {
  const router = useRouter(); const { colors } = useCampusTheme();
  return <ScrollView contentContainerStyle={[styles.container,{backgroundColor:colors.background}]}><View style={styles.hero}><CampusCareLogo/><Text style={[Typography.display,{color:colors.textPrimary,textAlign:'center',marginTop:20}]}>Welcome to <Text style={{color:colors.green}}>PRERANA
  </Text></Text><Text style={[Typography.body,{color:colors.textSecondary,textAlign:'center',marginTop:12}]}>You are not alone.{'\n'}We are here to support your wellbeing, recovery, and next steps.{'\n'}Your safety, privacy and dignity matter to us.</Text></View><CampusCard style={{marginTop:22}}>{points.map((p,i)=><View key={p} style={[styles.point,i>0&&{borderTopWidth:1,borderTopColor:colors.borderSoft}]}><Text style={{color:colors.green,fontSize:19,width:34}}>{['⌾','♙','▣','↗'][i]}</Text><Text style={[Typography.body,{color:colors.textPrimary,fontWeight:'600'}]}>{p}</Text></View>)}</CampusCard><CampusButton title="Get started" onPress={()=>router.push('/check-in')} style={{marginTop:18}}/><Text onPress={()=>router.push('/dashboard')} style={[Typography.bodySmall,{color:colors.green,textAlign:'center',marginTop:13,fontWeight:'700'}]}>Maybe later</Text><Text style={[Typography.caption,{color:colors.textDim,textAlign:'center',marginTop:30}]}>LISTEN  •  SUPPORT  •  EMPOWER</Text></ScrollView>;
}
const styles=StyleSheet.create({container:{flexGrow:1,padding:22,paddingTop:42},hero:{alignItems:'center'},point:{flexDirection:'row',alignItems:'center',paddingVertical:13},});
