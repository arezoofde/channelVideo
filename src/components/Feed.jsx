import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/fechFromApi';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sm: 'column', md: "row" } }}>
      <Box sx={{
        height: { sx: 'auto', md: '90vh' }, borderRight: '1px solid #3d3d3d',
        px: { sm: 0, md: 2 },
      }}>

        <SideBar
          selectedCategory=
          {selectedCategory}
          setSelectedCategory=
          {setSelectedCategory}
        />
        <Typography className='copyright'
          variant='body2' sx={{ mt: 1.3, color: '#fff' }}>
          Edit As Fadaei
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>Video</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
export default Feed