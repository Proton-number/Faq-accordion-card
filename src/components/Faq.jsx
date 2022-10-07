import React, {useState} from 'react'
import {Paper, Container, Box, Typography, Accordion,  AccordionSummary, AccordionDetails, createTheme, ThemeProvider } from '@mui/material'
import womanMobile from '/src/images/illustration-woman-online-mobile.svg'
import womanDesktop from '/src/images/illustration-woman-online-desktop.svg'
import patternMobile from '/src/images/bg-pattern-mobile.svg'
import patternDesktop from '/src/images/bg-pattern-desktop.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import box from '/src/images/illustration-box-desktop.svg'

function Faq() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    

    const theme = createTheme({
        palette:{
            primary:{
                main:'hsl(12, 89%, 69%)'
            }
        }
    })

    // Used this to get the width of the window 😂
    // const width = window.innerWidth;

    // console.log(width)

  return (
   <>

   <Box className='top-img'>
<img src={womanMobile} alt="" id='woman-mobile' />
<img src={womanDesktop} alt="" id='woman-desktop' />
<img src={box} alt='' id='box-desktop' />
   </Box>

<Paper id='container' elevation={4}>
<Box>
<img src={patternMobile} alt='' id='pattern-mobile' />
<img src={patternDesktop} alt='' id='pattern-desktop' />
</Box>

       <Container id='main'>

        <Typography variant='h4'> Faq </Typography>
            
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={0}>

            <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ThemeProvider theme={theme}>
                <ExpandMoreIcon color='primary'/>
            </ThemeProvider>}>

               <Typography>How many team members can I invite?</Typography>

            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum reiciendis 
                </Typography>
            </AccordionDetails>

          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={0}>

<AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={
              <ThemeProvider theme={theme}>
                 <ExpandMoreIcon color='primary'/>
            </ThemeProvider>}>

   <Typography>What is the maximum file upload size?</Typography>

</AccordionSummary>

<AccordionDetails>
    <Typography>
        No more than 2GB. All files in your account must fit your alloted storage space.
    </Typography>
</AccordionDetails>

</Accordion>

<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={0}>

<AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={
               <ThemeProvider theme={theme}>   
                <ExpandMoreIcon color='primary'/>
            </ThemeProvider>}>

   <Typography>How do I reset my password?</Typography>

</AccordionSummary>

<AccordionDetails>
    <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum reiciendis.
    </Typography>
</AccordionDetails>

</Accordion>

<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={0}>

<AccordionSummary id='panel4-header' aria-controls='panel4-content' expandIcon={
                  <ThemeProvider theme={theme}>   
             <ExpandMoreIcon color='primary'/>
            </ThemeProvider>}>

   <Typography>Can I cancel my subscription?</Typography>

</AccordionSummary>

<AccordionDetails>
    <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum reiciendis culpa nesciunt eius hic amet odio.
    </Typography>
</AccordionDetails>

</Accordion>

<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={0}>

<AccordionSummary id='panel5-header' aria-controls='panel5-content' expandIcon={
                   <ThemeProvider theme={theme}>   
                <ExpandMoreIcon color='primary'/>
            </ThemeProvider>}>

   <Typography>Do you provide additional support?</Typography>

</AccordionSummary>

<AccordionDetails>
    <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum reiciendis culpa. 
    </Typography>
</AccordionDetails>

</Accordion>




       </Container>

    </Paper>


   </>
  )
}

export default Faq
