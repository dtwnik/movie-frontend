import axios from 'axios'
import React, { useEffect, useState } from 'react';
import TSeat from '../component/TSeat';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const Test = (name) => {
    const [seans, setSeans] = useState([]);
    const [value, setValue] = useState('1');
    const title = name.name.title
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const apiUrl = 'https://movie-drf-backend.herokuapp.com/api/TSeans/';
        axios.get(apiUrl, {
            params: {
                name: title
            }
        }).then((resp) => {
            const allSeans = resp.data;
            setSeans(allSeans);
        });
    }, [setSeans]);
    return (
        <>

            <Box sx={{ width: '100%', typography: 'body1', margin_bottom:"100px"}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                            {seans && seans.map((Time) =>
                                <Tab className='test1' label={Time.time.slice(0,5)} value={Time.time} sx={{ color: 'white', margin: '0 30px'}} />
                            )}
                        </TabList>
                    </Box>
                    {seans.map((seat) =>
                        <TabPanel className='test' value={seat.time} >
                            <TSeat data={seat} selected />
                        </TabPanel>
                    )}
                </TabContext>
            </Box>
        </>
    );
}

export default Test;