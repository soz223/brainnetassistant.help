import React from 'react'
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { graphql } from 'gatsby'
import Typewriter from "typewriter-effect";

// import headerImage from '../images/header-image.svg'

import headerImage from '../images/header-image.svg'

// const headerHeight = '500px'

// const useStyles = makeStyles({
//   title: {
//     '&:after': {
//       content: '""',
//       position: 'absolute',
//       height: headerHeight,
//       width: '100%',
//       opacity: '.45',
//       // backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundColor: '#e3f2fd'
//     }
//   }
// })

const IndexPage = ({ data }) => {
  // const theme = useTheme()
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  // const classes = useStyles()
  return (
    <Grid
      direction='row'
      justifyContent="center"
      alignItems="stretch"
      display="flex"
      container
    >
      <Grid flexDirection="row"
            justifyContent={'center'}
            display='flex' style={{ backgroundColor: '#f6fafd'}} container>
        <Grid item xs={8} sm={4} style={{ marginTop: "60px", marginBottom: "30px" }}>
          <img src={headerImage} alt="header"/>
        </Grid>
        <Grid
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          display='flex'
          // spacing={3}
          minWidth="500px"
          marginLeft="40px"
          marginBottom="80px"
        >
          <Grid item style={{
            fontFamily: 'Courier New',
            fontWeight: 'bolder',
            fontSize: '100px',
            // color: '#1e376d', // dark blue
            color: '#1976D2', // blue
            alignItems: 'flex-start',
          }}>
            <Typewriter
                options={{
                  strings: 'BrainNet',
                  autoStart: true,
                  loop: false,
                }}
            />
          </Grid>

          <Grid item>
            <Typography variant="h6" style={{ color: '#555', fontFamily: 'Roboto', marginBottom: '20px', maxWidth: '480px' }}>
              A systematic benchmark for functional brain network generation and analysis from resting-state fMRI.
            </Typography>
          </Grid>
          <Grid item style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="contained" component="a" href="/get-started">
              Get Started
            </Button>
            <Button variant="outlined" component="a" href="/advanced">
              Methods
            </Button>
            <Button variant="outlined" component="a" href="/models">
              Leaderboard
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ height: "20px" }} />

      <Grid item style={{ margin: "50px" }}>
        <Container component="article" dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}/>
      </Grid>
    </Grid>
  )
}

export default IndexPage
export const pageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fileAbsolutePath: {regex: "/posts/index.md$/"}) {
            html
        }
    }
`
