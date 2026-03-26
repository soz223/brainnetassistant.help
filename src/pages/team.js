import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
import PersonCard from '../components/PersonCard'
import { Helmet } from 'react-helmet'

const titleName = "BrainNet - Team"

const TeamPage = () => {
  return (
    <Container style={{
      alignItems: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Helmet>
        <title>{titleName}</title>
      </Helmet>

      <h1 style={{ padding: '40px' }}>Faculty</h1>
      <Divider style={{ width: '100%', marginBottom: '50px' }} />

      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
        <Grid container spacing={1} justifyContent='center'>
          <PersonCard
            name="Lifang He"
            photo="/people/LifangHe.jpg"
            position="Lehigh University"
            link="https://engineering.lehigh.edu/faculty/lifang-he"
          />
          <PersonCard
            name="Carl Yang"
            photo="/people/CarlYang.jpg"
            position="Emory University"
            link="https://www.cs.emory.edu/~jyang71/"
          />
          <PersonCard
            name="Liang Zhan"
            photo="/people/LiangZhan.jpeg"
            position="University of Pittsburgh"
            link="https://www.engineeringx.pitt.edu/People/Faculty/Profiles/Liang-Zhan/"
          />
          <PersonCard
            name="Yu Zhang"
            photo=""
            position="Stanford University"
            link="https://profiles.stanford.edu/yu-zhang"
          />
          <PersonCard
            name="Lichao Sun"
            photo=""
            position="Lehigh University"
            link="https://lichao-sun.github.io/"
          />
          <PersonCard
            name="Randy Buckner"
            photo=""
            position="Harvard University"
            link="https://psychology.fas.harvard.edu/people/randy-l-buckner"
          />
          <PersonCard
            name="Xiang Li"
            photo=""
            position="Harvard Medical School"
            link="https://www.massgeneral.org/radiology"
          />
          <PersonCard
            name="Quanzheng Li"
            photo=""
            position="Harvard Medical School"
            link="https://www.massgeneral.org/radiology"
          />
        </Grid>
      </Grow>

      <h1 style={{ padding: '40px', paddingTop: '100px' }}>Students</h1>
      <Divider style={{ width: '100%', marginBottom: '50px' }} />

      <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
        <Grid container spacing={1} justifyContent='center' paddingBottom='20px'>
          <PersonCard
            name="Songlin Zhao"
            photo="/people/SonglinZhao.jpg"
            position="Lehigh University"
            link="https://www.songlin.my/"
          />
          <PersonCard
            name="Xinwei Luo"
            photo="/people/SonglinZhao.jpg"
            position="Lehigh University"
            link="https://www.google.com/search?q=Xinwei+Luo"
          />
          <PersonCard
            name="Yitian Yang"
            photo="/people/SonglinZhao.jpg"
            position="Lehigh University"
            link="https://www.google.com/search?q=Yitian+Yang"
          />
          <PersonCard
            name="Keqi Han"
            photo="/people/KeqiHan.jpg"
            position="Emory University"
            link="https://www.google.com/search?q=Keqi+Han"
          />
          <PersonCard
            name="Ruonan Gong"
            photo="/people/SonglinZhao.jpg"
            position="University of Miami"
            link="https://www.google.com/search?q=Ruonan+Gong"
          />
        </Grid>
      </Grow>
    </Container>
  )
}

export default TeamPage
