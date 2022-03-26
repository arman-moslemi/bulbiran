import React,{useEffect,useState,useRef} from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaginationCustom({setPage,count}) {
  const [page,setPages]=useState(1)
  const handleChange = (event, value) => {
    setPages(value);
    setPage(value)
  };
  return (
    <Stack spacing={5}>
      <Pagination
        count={count}
        color="primary"
        size="large"
        variant="outlined"
        //  shape="rounded"
        page={page} onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}