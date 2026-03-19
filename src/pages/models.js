import React from 'react'
import {
  Container, Divider, Typography, Box,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Tabs, Tab,
} from '@mui/material'

// ADNI dataset results (HC vs AD, AAL116, 30% Absolute Thresholding)
const adniRows = [
  { group: 'Static Pairwise', method: 'Pearson Correlation',       auroc: '0.671', acc: '0.736', sens: '0.791', spec: '0.674', f1: '0.746' },
  { group: 'Static Pairwise', method: 'Spearman Correlation',      auroc: '0.664', acc: '0.750', sens: '0.790', spec: '0.717', f1: '0.765' },
  { group: 'Static Pairwise', method: 'Kendall Correlation',       auroc: '0.660', acc: '0.694', sens: '0.760', spec: '0.626', f1: '0.720' },
  { group: 'Static Pairwise', method: 'Partial Correlation',       auroc: '0.562', acc: '0.517', sens: '0.534', spec: '0.503', f1: '0.523' },
  { group: 'Static Pairwise', method: 'Mutual Information',        auroc: '0.609', acc: '0.590', sens: '0.598', spec: '0.583', f1: '0.592' },
  { group: 'Static Pairwise', method: 'Distance Correlation',      auroc: '0.695', acc: '0.698', sens: '0.786', spec: '0.600', f1: '0.733' },
  { group: 'Static Pairwise', method: 'Coherence',                 auroc: '0.592', acc: '0.553', sens: '0.512', spec: '0.593', f1: '0.533' },
  { group: 'Static Pairwise', method: 'Euclidean Distance',        auroc: '0.665', acc: '0.751', sens: '0.860', spec: '0.611', f1: '0.771' },
  { group: 'Static Pairwise', method: 'Cosine Similarity',         auroc: '0.690', acc: '0.675', sens: '0.765', spec: '0.577', f1: '0.702' },
  { group: 'Static Pairwise', method: 'Granger Causality',         auroc: '0.578', acc: '0.659', sens: '0.669', spec: '0.654', f1: '0.663' },
  { group: 'Static HOFC',     method: "Correlation's Correlation", auroc: '0.689', acc: '0.734', sens: '0.804', spec: '0.650', f1: '0.744' },
  { group: 'Static HOFC',     method: 'tHOFC',                     auroc: '0.608', acc: '0.572', sens: '0.537', spec: '0.598', f1: '0.557' },
  { group: 'Static HOFC',     method: 'aHOFC',                     auroc: '0.601', acc: '0.587', sens: '0.601', spec: '0.573', f1: '0.577' },
  { group: 'Static HOFC',     method: 'dHOFC',                     auroc: '0.607', acc: '0.541', sens: '0.509', spec: '0.570', f1: '0.520' },
  { group: 'Static End-to-end', method: 'FBNetGen',                auroc: '0.666', acc: '0.734', sens: '0.794', spec: '0.687', f1: '0.763' },
  { group: 'Static End-to-end', method: 'DABNet',                  auroc: '0.565', acc: '0.500', sens: '0.490', spec: '0.510', f1: '0.482' },
  { group: 'Static End-to-end', method: 'Graph Autoencoder',       auroc: '0.566', acc: '0.617', sens: '0.601', spec: '0.636', f1: '0.616' },
]

// HCP dataset results (gender classification, AAL116, 30% Absolute Thresholding)
const hcpRows = [
  { group: 'Static Pairwise', method: 'Pearson Correlation',       auroc: '0.844', acc: '0.782', sens: '0.875', spec: '0.713', f1: '0.809' },
  { group: 'Static Pairwise', method: 'Spearman Correlation',      auroc: '0.735', acc: '0.767', sens: '0.850', spec: '0.688', f1: '0.788' },
  { group: 'Static Pairwise', method: 'Kendall Correlation',       auroc: '0.741', acc: '0.659', sens: '0.742', spec: '0.580', f1: '0.689' },
  { group: 'Static Pairwise', method: 'Partial Correlation',       auroc: '0.680', acc: '0.566', sens: '0.524', spec: '0.606', f1: '0.540' },
  { group: 'Static Pairwise', method: 'Mutual Information',        auroc: '0.702', acc: '0.601', sens: '0.622', spec: '0.576', f1: '0.608' },
  { group: 'Static Pairwise', method: 'Distance Correlation',      auroc: '0.696', acc: '0.502', sens: '0.639', spec: '0.375', f1: '0.570' },
  { group: 'Static Pairwise', method: 'Cosine Similarity',         auroc: '0.794', acc: '0.804', sens: '0.894', spec: '0.708', f1: '0.814' },
  { group: 'Static Pairwise', method: 'Euclidean Distance',        auroc: '0.764', acc: '0.749', sens: '0.777', spec: '0.727', f1: '0.751' },
  { group: 'Static Pairwise', method: 'Granger Causality',         auroc: '0.680', acc: '0.575', sens: '0.533', spec: '0.599', f1: '0.553' },
  { group: 'Static HOFC',     method: "Correlation's Correlation", auroc: '0.752', acc: '0.798', sens: '0.868', spec: '0.729', f1: '0.821' },
  { group: 'Static HOFC',     method: 'tHOFC',                     auroc: '0.701', acc: '0.647', sens: '0.669', spec: '0.617', f1: '0.651' },
  { group: 'Static HOFC',     method: 'aHOFC',                     auroc: '0.682', acc: '0.559', sens: '0.599', spec: '0.515', f1: '0.582' },
  { group: 'Static End-to-end', method: 'FBNetGen',                auroc: '0.738', acc: '0.658', sens: '0.620', spec: '0.706', f1: '0.643' },
  { group: 'Static End-to-end', method: 'DABNet',                  auroc: '0.722', acc: '0.634', sens: '0.666', spec: '0.607', f1: '0.649' },
  { group: 'Static End-to-end', method: 'Graph Autoencoder',       auroc: '0.707', acc: '0.561', sens: '0.554', spec: '0.553', f1: '0.559' },
]

// ADHD-200 dataset results (HC vs ADHD, AAL116, 30% Absolute Thresholding)
const adhdRows = [
  { group: 'Static Pairwise', method: 'Pearson Correlation',       auroc: '0.611', acc: '0.620', sens: '0.685', spec: '0.572', f1: '0.655' },
  { group: 'Static Pairwise', method: 'Spearman Correlation',      auroc: '0.639', acc: '0.633', sens: '0.743', spec: '0.514', f1: '0.674' },
  { group: 'Static Pairwise', method: 'Kendall Correlation',       auroc: '0.662', acc: '0.696', sens: '0.754', spec: '0.643', f1: '0.709' },
  { group: 'Static Pairwise', method: 'Partial Correlation',       auroc: '0.570', acc: '0.577', sens: '0.595', spec: '0.557', f1: '0.590' },
  { group: 'Static Pairwise', method: 'Mutual Information',        auroc: '0.578', acc: '0.471', sens: '0.450', spec: '0.494', f1: '0.460' },
  { group: 'Static Pairwise', method: 'Distance Correlation',      auroc: '0.692', acc: '0.703', sens: '0.781', spec: '0.624', f1: '0.723' },
  { group: 'Static Pairwise', method: 'Cosine Similarity',         auroc: '0.631', acc: '0.613', sens: '0.736', spec: '0.487', f1: '0.644' },
  { group: 'Static Pairwise', method: 'Euclidean Distance',        auroc: '0.692', acc: '0.734', sens: '0.811', spec: '0.667', f1: '0.765' },
  { group: 'Static Pairwise', method: 'Granger Causality',         auroc: '0.550', acc: '0.553', sens: '0.558', spec: '0.543', f1: '0.540' },
  { group: 'Static HOFC',     method: "Correlation's Correlation", auroc: '0.612', acc: '0.609', sens: '0.722', spec: '0.492', f1: '0.643' },
  { group: 'Static HOFC',     method: 'tHOFC',                     auroc: '0.554', acc: '0.484', sens: '0.505', spec: '0.465', f1: '0.490' },
  { group: 'Static HOFC',     method: 'aHOFC',                     auroc: '0.572', acc: '0.637', sens: '0.630', spec: '0.649', f1: '0.635' },
  { group: 'Static End-to-end', method: 'FBNetGen',                auroc: '0.611', acc: '0.672', sens: '0.731', spec: '0.604', f1: '0.686' },
  { group: 'Static End-to-end', method: 'DABNet',                  auroc: '0.540', acc: '0.533', sens: '0.493', spec: '0.585', f1: '0.506' },
  { group: 'Static End-to-end', method: 'Graph Autoencoder',       auroc: '0.536', acc: '0.477', sens: '0.446', spec: '0.513', f1: '0.459' },
]

const datasetMap = { 0: adniRows, 1: hcpRows, 2: adhdRows }
const datasetLabels = [
  'ADNI (HC vs AD)',
  'HCP S1200 (Gender)',
  'ADHD-200 (HC vs ADHD)',
]

// Color rows by group
const groupColors = {
  'Static Pairwise': '#f0f4ff',
  'Static HOFC': '#f0fff4',
  'Static End-to-end': '#fff8f0',
}

const headerStyle = {
  fontWeight: 'bold',
  backgroundColor: '#1e376d',
  color: 'white',
}

function LeaderboardTable({ rows }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={headerStyle}>Group</TableCell>
            <TableCell sx={headerStyle}>Method</TableCell>
            <TableCell sx={headerStyle}>AUROC</TableCell>
            <TableCell sx={headerStyle}>Acc</TableCell>
            <TableCell sx={headerStyle}>Sens</TableCell>
            <TableCell sx={headerStyle}>Spec</TableCell>
            <TableCell sx={headerStyle}>F1</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} sx={{ backgroundColor: groupColors[row.group] || 'white' }}>
              <TableCell>{row.group}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>{row.auroc}</TableCell>
              <TableCell>{row.acc}</TableCell>
              <TableCell>{row.sens}</TableCell>
              <TableCell>{row.spec}</TableCell>
              <TableCell>{row.f1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const Leaderboard = () => {
  const [tab, setTab] = React.useState(0)

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Benchmark Leaderboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Performance comparison of connectivity construction methods using the <strong>AAL116</strong> parcellation
        and <strong>30% Absolute Thresholding</strong> sparsification. Results are mean over 5-fold cross-validation.
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        {datasetLabels.map((label, i) => (
          <Tab key={i} label={label} />
        ))}
      </Tabs>

      <LeaderboardTable rows={datasetMap[tab]} />

      <Box sx={{ mt: 3 }}>
        <Typography variant="caption" color="text.secondary">
          Color coding: <span style={{ background: '#f0f4ff', padding: '2px 8px' }}>Static Pairwise</span>{' '}
          <span style={{ background: '#f0fff4', padding: '2px 8px' }}>Static HOFC</span>{' '}
          <span style={{ background: '#fff8f0', padding: '2px 8px' }}>Static End-to-end</span>
        </Typography>
      </Box>
    </Container>
  )
}

export default Leaderboard
