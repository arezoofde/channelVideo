import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelDetail as ChannelDetailComponent } from './';  // Alias the import
import { fetchFromAPI } from "../utils/fechFromApi";

const ChannelDetail = () => {  // Keep the component name

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  console.log(channelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part="snippet&order=data`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <div>
      <Box minHeight="95vh">
        <Box>
          <div style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 52%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
          />
          <ChannelDetailComponent channelDetail={channelDetail}  // Use the aliased import
            marginTop="-93px"
          />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' } }} />
            <Videos videos={videos} />
         
        </Box>
      </Box>
    </div>
  )
}

export default ChannelDetail;
