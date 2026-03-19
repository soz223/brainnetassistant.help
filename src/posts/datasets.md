## Alzheimer's Disease Neuroimaging Initiative (ADNI)

The Alzheimer's Disease Neuroimaging Initiative (ADNI) is a multi-site, longitudinal cohort designed to accelerate biomarker discovery and clinical trial readiness for Alzheimer's disease (AD). It covers the spectrum from cognitively normal aging through mild cognitive impairment (MCI) to dementia. Resting-state fMRI has been acquired in dedicated phases (ADNI-GO/ADNI-2 and later) at a subset of sites, with standardized instructions for task-free scanning (eyes-open) to promote uniform brain state.

For this benchmark, we adopt a modern, reproducible preprocessing workflow implemented via **fMRIPrep**, including slice-timing and motion correction, susceptibility distortion handling, spatial normalization, nuisance regression, and careful quality control — producing analysis-ready outputs for subsequent ROI-based time-series extraction and graph construction.

&nbsp;

---

## HCP S1200

The WU-Minn Human Connectome Project (HCP) S1200 release comprises >1,000 young adults (ages ~22–35) with high-quality multimodal MRI and deep behavioral phenotyping. Resting-state fMRI was acquired on a customized 3T Siemens Skyra using multiband EPI (TR = 0.72 s, TE = 33.1 ms), providing ~1,200 volumes per run with both phase-encoding polarities. Data were distributed with the **HCP Minimal Preprocessing Pipelines (MPP)** including gradient unwarping, EPI distortion correction, motion correction, registration to structural surfaces/volumes, and ICA-FIX denoising.

HCP's exceptional spatiotemporal resolution and standardized preprocessing enable high signal-to-noise ROI time series and provide a strong ceiling for evaluating graph construction methods in healthy, high-quality data.

&nbsp;

---

## ADHD-200

The ADHD-200 Sample aggregates resting-state fMRI and structural MRI from 973 participants across eight international sites, spanning children, adolescents, and young adults, with clinical labels (ADHD subtypes and typically developing controls) and phenotypic measures. As a multi-site initiative, acquisition parameters vary by site (scanner vendor/model, TR typically in the ~2–3 s range, 3–4 mm voxels, run durations of roughly 5–8 min).

To standardize access, three community preprocessing baselines were released: (i) *Athena* (AFNI+FSL) providing nuisance regression and band-pass filtered time series, (ii) *Burner* (SPM) emphasizing voxel-based morphometry, and (iii) *NIAK* (PSOM) featuring ICA-based denoising and rigorous QC.

ADHD-200's multi-site heterogeneity and clinically meaningful labels make it a stringent evaluation context for robustness and generalization of ROI-based graph construction methods.
