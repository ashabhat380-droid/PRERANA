import React from 'react';
import QuestionScreen from '@/components/assessment/QuestionScreen';
const q=['Feeling nervous, anxious or on edge?','Not being able to stop or control worrying?','Worrying too much about different things?','Trouble relaxing?','Being so restless that it is hard to sit still?','Becoming easily annoyed or irritable?','Feeling afraid as if something awful might happen?'];
export default function GAD7(){return <QuestionScreen title="GAD-7" questions={q} scoreKey="gad7" scaleLabels={['Not at all','Several days','More than half the days','Nearly every day']} description="Over the last 2 weeks, how often have you been bothered by the following?" nextRoute="/dass21" compute={a=>a.reduce((x,y)=>x+y,0)}/>;}
