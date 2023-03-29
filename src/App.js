import { Paper, Typography, Box, Grid, Card, Divider } from '@mui/material';
import { css3 } from '@toolz/css3/src/css3';
import { useMemo } from 'react';

export const App = () => {
   const cardStyle = useMemo(() => {
      return {
         backgroundColor: '#888888',
         marginBottom: '20px',
         marginTop: '5px',
         padding: '10px',
      };
   }, []);
   const centeredTextStyle = useMemo(() => {
      return {
         color: '#eeeeee',
         textAlign: css3.textAlign.center,
      };
   }, []);
   const dividerStyle = useMemo(() => {
      return {
         borderColor: '#ffffff',
         marginBottom: '5px',
         marginTop: '5px',
      };
   }, []);
   const linkStyle = useMemo(() => {
      return { color: '#D1F2EB' };
   }, []);
   const paperStyle = useMemo(() => {
      return {
         backgroundColor: '#252525',
         margin: '20px',
         padding: '20px',
      };
   }, []);
   const sectionTextStyle = useMemo(() => {
      return {
         color: '#00CC33',
         fontSize: '1.2em',
      };
   }, []);
   const smallerTextStyle = useMemo(() => {
      return {
         color: '#eeeeee',
         fontSize: '0.85em',
      };
   }, []);
   const textStyle = useMemo(() => {
      return { color: '#eeeeee'};
   }, []);

   return <>
      <Box sx={{flexGrow: 1}}>
         <Grid
            container={true}
            spacing={2}
         >
            <Grid
               item={true}
               xs={0} sm={1} md={2} lg={3} xl={4}
            />
            <Grid
               item={true}
               xs={12} sm={10} md={8} lg={6} xl={4}
            >
               <Paper
                  style={paperStyle}
                  variant={'outlined'}
               >
                  <Typography style={centeredTextStyle}>Your one-stop shop for everything about Adam Nathaniel Davis</Typography>
                  <br/>
                  <Typography style={sectionTextStyle}>Worldbuilding:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Hegemony International (Active Project!)
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Speculative fiction, absurdist, science fiction, dystopian, worldbuilding
                        <br/>
                        <a
                           href={'https://www.worldanvil.com/w/hegemony-international'}
                           style={linkStyle}
                        >
                           https://www.worldanvil.com/w/hegemony-international
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Excilior
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Planetary romance, science fiction, worldbuilding
                        <br/>
                        <a
                           href={'https://www.worldanvil.com/w/excilior'}
                           style={linkStyle}
                        >
                           https://www.worldanvil.com/w/excilior
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Paintings:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        #BlobLife
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Finished works and in-progress photos
                        <br/>
                        <a
                           href={'https://photos.app.goo.gl/L1ij8QfCsSwpX3VdA'}
                           style={linkStyle}
                        >
                           https://photos.app.goo.gl/L1ij8QfCsSwpX3VdA
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Long-Form Fiction:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        A Dusk Forever Waning
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Novel, science fiction, dystopian
                        <br/>
                        <a
                           href={'https://www.amazon.com/Dusk-Forever-Waning-Dispatches-Torrenth/dp/0615998607'}
                           style={linkStyle}
                        >
                           https://www.amazon.com/Dusk-Forever-Waning-Dispatches-Torrenth/dp/0615998607
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Slipstream
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Science fiction, absurdist
                        <br/>
                        <a
                           href={'https://docs.google.com/document/d/1iAju18U3L908qughBDlE9sDB7X7_DFnFXNm2oS_sdns'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1iAju18U3L908qughBDlE9sDB7X7_DFnFXNm2oS_sdns
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Short Fiction:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        COVID
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        <a
                           href={'https://docs.google.com/document/d/1aHj0mInDffaOKGYDrhMkviSjZKmlsTZBn9tQJkTGo1k'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1aHj0mInDffaOKGYDrhMkviSjZKmlsTZBn9tQJkTGo1k
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Fractal Dreams
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        <a
                           href={'https://docs.google.com/document/d/1c-rxMbWm43eIPaYomGH3HD-OCMLHT8eUb1WJvbCFKzU'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1c-rxMbWm43eIPaYomGH3HD-OCMLHT8eUb1WJvbCFKzU
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        The Republic of Mushlandia
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        <a
                           href={'https://docs.google.com/document/d/1ZxoJNsI_N_ZbJu1LVOo6YPR75-zlK_OBCJZgBU9rv_4'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1XUz4JJXkM1AxFSmDX9qSWYQG0ZuLWCy--8Jc44Aiy30
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Time After Time
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        <a
                           href={'https://docs.google.com/document/d/1XUz4JJXkM1AxFSmDX9qSWYQG0ZuLWCy--8Jc44Aiy30'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1ZxoJNsI_N_ZbJu1LVOo6YPR75-zlK_OBCJZgBU9rv_4
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Plays:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        OK, Sierra
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Play, science fiction, dystopian
                        <br/>
                        <a
                           href={'https://docs.google.com/document/d/13X6NYD9ZLfZ4FyAL_JmF74w7YTfgHD6z'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/13X6NYD9ZLfZ4FyAL_JmF74w7YTfgHD6z
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Into the Swamp
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Play, absurdist
                        <br/>
                        <a
                           href={'https://docs.google.com/document/d/1A1dG-5CnP0bn79VMgkkmzWrZRf1MNlawT_StNofpfmM'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1A1dG-5CnP0bn79VMgkkmzWrZRf1MNlawT_StNofpfmM
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        The Marionette
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        Play, science fiction
                        <br/>
                        <a
                           href={'https://docs.google.com/document/d/1PE-u210TP6VsoAqsB4KxqTIOy_dKWbpr'}
                           style={linkStyle}
                        >
                           https://docs.google.com/document/d/1PE-u210TP6VsoAqsB4KxqTIOy_dKWbpr
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        New Play Exchange
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        A collection of my plays
                        <br/>
                        <a
                           href={'https://newplayexchange.org/users/7276/adam-nathaniel-davis'}
                           style={linkStyle}
                        >
                           https://newplayexchange.org/users/7276/adam-nathaniel-davis
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Poetry:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Shared Google Drive folder of poems
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        <a
                           href={'https://drive.google.com/drive/folders/1eM04-OHzlmtX8KAo8tG5f7lXCGJ-j6mg'}
                           style={linkStyle}
                        >
                           https://drive.google.com/drive/folders/1eM04-OHzlmtX8KAo8tG5f7lXCGJ-j6mg
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Social Media:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Facebook
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My Facebook profile
                        <br/>
                        <a
                           href={'https://www.facebook.com/jaxcreator'}
                           style={linkStyle}
                        >
                           https://www.facebook.com/jaxcreator
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Instagram
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My Instagram profile
                        <br/>
                        <a
                           href={'https://www.instagram.com/bytebodger'}
                           style={linkStyle}
                        >
                           https://www.instagram.com/bytebodger
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        YouTube
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My YouTube channel
                        <br/>
                        <a
                           href={'https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag'}
                           style={linkStyle}
                        >
                           https://www.youtube.com/channel/UCHNDtVFC4WQTcp_awD9c1Ag
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Twitter
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My Twitter profile
                        <br/>
                        <a
                           href={'https://twitter.com/WritingVoyage'}
                           style={linkStyle}
                        >
                           https://twitter.com/WritingVoyage
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Professional:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Dev.to
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My blogs on software development
                        <br/>
                        <a
                           href={'https://dev.to/bytebodger'}
                           style={linkStyle}
                        >
                           https://dev.to/bytebodger
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        NPM
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My NPM packages
                        <br/>
                        <a
                           href={'https://www.npmjs.com/search?q=%40toolz'}
                           style={linkStyle}
                        >
                           https://www.npmjs.com/search?q=%40toolz
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        GitHub
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My GitHub repositories
                        <br/>
                        <a
                           href={'https://github.com/bytebodger?tab=repositories'}
                           style={linkStyle}
                        >
                           https://github.com/bytebodger?tab=repositories
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        LinkedIn
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        My LinkedIn profile
                        <br/>
                        <a
                           href={'https://www.linkedin.com/in/bytebodger'}
                           style={linkStyle}
                        >
                           https://www.linkedin.com/in/bytebodger
                        </a>
                     </Typography>
                  </Card>
                  <Divider style={dividerStyle}/>
                  <Typography style={sectionTextStyle}>Apps/Sites:</Typography>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Professional Profile
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        CV for Adam Nathaniel Davis
                        <br/>
                        <a
                           href={'https://www.adamdavis.codes'}
                           style={linkStyle}
                        >
                           https://www.adamdavis.codes
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Spotify Toolz
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        A free public utility for managing Spotify playlists
                        <br/>
                        <a
                           href={'https://www.spotifytoolz.com'}
                           style={linkStyle}
                        >
                           https://www.spotifytoolz.com
                        </a>
                     </Typography>
                  </Card>
                  <Card
                     raised={true}
                     style={cardStyle}
                  >
                     <Typography style={textStyle}>
                        Paint Map Studio
                     </Typography>
                     <Typography style={smallerTextStyle}>
                        A free public utility for mapping colors in digital images to paints
                        <br/>
                        <a
                           href={'https://www.paintmap.studio/'}
                           style={linkStyle}
                        >
                           https://www.paintmap.studio/
                        </a>
                     </Typography>
                  </Card>
                  <br/>
                  <Typography style={centeredTextStyle}>Adam Nathaniel Davis can be reached at: me@adamdavis.codes</Typography>
                  <br/>
               </Paper>
            </Grid>
            <Grid
               item={true}
               xs={0} sm={1} md={2} lg={3} xl={4}
            />
         </Grid>
      </Box>
   </>;
}
