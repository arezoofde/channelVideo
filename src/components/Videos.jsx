import { Stack, Box } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.lenght) return <div style={{color:'#fff'}}>Loading...</div>;
  return (
    <Stack direction={direction || "row"} spacing={2} flexWrap="wrap">
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard chanelDetail={item} />}
          {item.id.channelId && <ChannelCard chanelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos