import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import {Event} from '@mui/icons-material'
import Typography from '@mui/material/Typography'

const TimeLine = ({timelines=[]}) => {
  return (
    <Timeline position='alternate'>
      {
        timelines.map((item,index)=>(
            <TimelineItem key={index}>
                <TimelineOppositeContent sx={{0:'auto 0'}} align='right' variant='body2' color='text.secondary'>
                    20/07/2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot></TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6'>Title</Typography>
                    <Typography>Description</Typography>
                </TimelineContent>
            </TimelineItem>
        ))
      }
    </Timeline>
  )
}

export default TimeLine