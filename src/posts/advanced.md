## Taxonomy of Graph Construction Methods

BrainNet provides a comprehensive taxonomy of functional brain graph construction, organized into three main components: **node definition**, **connectivity computation**, and **filtering schemes**.

---

## Node Definition (Parcellation)

Nodes in functional brain graphs represent regions of interest (ROIs). BrainNet evaluates three representative parcellation schemes:

| Parcellation | Regions | Type | Description |
|-------------|---------|------|-------------|
| **AAL116** | 116 | Anatomical | Based on gyral/cytoarchitectonic landmarks. Consistent across subjects, easy to interpret. |
| **Schaefer100** | 100 | Functional | Derived from resting-state fMRI using local gradients of functional connectivity. Higher functional resolution. |
| **Power264** | 264 | Data-driven | Derived by clustering resting-state fMRI data. Captures individual variability. |

---

## Connectivity as Edge

### Pairwise Correlation (Static)

Pairwise methods compute a single scalar between two ROI time series. BrainNet covers 20+ methods:

| Method | Formula | Properties |
|--------|---------|------------|
| **Pearson Correlation** | $r_{xy} = \frac{\text{cov}(x,y)}{\sqrt{\text{var}(x)\cdot\text{var}(y)}}$ | Linear, ubiquitous baseline |
| **Partial Correlation** | Controls for indirect connections via precision matrix | Removes confounds from other ROIs |
| **Spearman Correlation** | Rank-based, robust to outliers | Captures monotonic (nonlinear) relationships |
| **Mutual Information** | $I(X;Y) = H(X)+H(Y)-H(X,Y)$ | Captures linear and nonlinear dependencies |
| **Cosine Similarity** | $S_C(A,B) = \frac{A \cdot B}{\|A\|\|B\|}$ | Direction-based, robust to outliers |
| **Wavelet Coherence** | Frequency-domain phase consistency | Captures oscillatory dynamics |
| **Granger Causality** | F-test on VAR models | Directed (asymmetric) interactions |
| **Distance Correlation** | Captures both linear and nonlinear dependencies | Zero iff independent |

### Higher-Order Functional Connectivity (HOFC)

HOFC methods extend beyond pairwise correlations to capture organizational principles not visible at the signal level:

**tHOFC (Correlation's Correlation)**

$$\text{HOFC}_{ij} = \text{corr}(L_i, L_j)$$

where $L_i$ is the FC profile of region $i$ (its connectivity to all other regions). Captures mesoscale organizational similarity.

**aHOFC (Associated HOFC)**

Quantifies the inter-level association between a region's HOFC topography and another region's LOFC topography. Improves classification performance over LOFC and tHOFC in clinical applications.

**dHOFC (Dynamics-Based HOFC)**

First computes sliding-window LOFC time series for each edge, then correlates edge trajectories to characterize synchrony among connections. Lives in $N^2 \times N^2$ edge-edge space.

### End-to-End Models

End-to-end models jointly learn graph construction and downstream prediction:

| Model | Description |
|-------|-------------|
| **FBNetGen** | 1D-CNN/biGRU encoder + differentiable graph generator + GNN |
| **DABNet** | Learns directed acyclic graphs (DAGs) for effective connectivity via Structural VAR |
| **Graph Autoencoder** | GCN encoder + inner-product decoder, trained by reconstruction loss |

---

## Filtering Schemes

Connectivity matrices are often dense. Filtering retains only the most significant connections:

| Scheme | Description | Trade-off |
|--------|-------------|-----------|
| **Absolute Thresholding** | Keep edges above a fixed weight | Simple; yields variable density across subjects |
| **Proportional Thresholding** | Keep a fixed % of strongest edges | Standardizes density; may discard weak but meaningful edges |
| **OMST** | Orthogonal Minimum Spanning Tree | Retains critical connections, minimizes redundancy |
| **Binarization** | Convert weights to 0/1 | Simplifies analysis; loses connection strength |

> **Key finding**: Sparsification choices can **invert method rankings**. Density is a first-class hyperparameter — always report results across multiple density levels.

---

## Static vs. Dynamic Graphs

### Static Graphs

Use the entire fMRI scan duration to compute a single connectivity matrix. Simple, reliable, and effective for many classification tasks.

### Dynamic Graphs (Temporal Statistical Estimation)

Capture time-varying connectivity using:

| Method | Approach |
|--------|---------|
| **Fixed Sliding Window (FSW)** | Divide BOLD into overlapping segments of fixed duration |
| **Tapered Sliding Window** | Apply Gaussian kernel to smooth boundary effects |
| **Adaptive Sliding Window** | Vary window width based on local signal characteristics |
| **EWMA** | Exponential Weighted Moving Average — data-driven adaptive window |
| **Hilbert Phase Synchronization** | Track moment-to-moment phase alignment of narrowband BOLD signals |
| **Wavelet Transform Coherence (WTC)** | Frequency-specific synchrony in the time-frequency domain |
| **Dynamic Conditional Correlation (DCC)** | GARCH(1,1)-based likelihood framework, no fixed sliding window |

### Dynamic Graphs (Temporal Latent Modeling)

| Method | Approach |
|--------|---------|
| **HMM** | Hidden Markov Model — probabilistic latent brain states |
| **Kalman Filter** | State-space MVAR model with sequential Kalman updates |
| **Time-Varying Graphical Lasso** | Regularized precision matrix sequence with temporal smoothness |
| **Change-Point Detection** | Detect abrupt transitions in covariance structure |
| **sr-DDL** | Structurally-Regularized Dynamic Dictionary Learning |

---

## Benchmark Findings Summary

### Robust Configurations (Across ADNI, HCP, ADHD-200)

Pipelines coupling:
1. **Moderate-resolution parcellations** (e.g., AAL116, Schaefer100)
2. **Multivariate connectivity estimators** (e.g., regularized partial correlation)
3. **Proportional sparsification** at appropriate densities

...consistently yield higher test-retest stability, reduced motion sensitivity, and preserved discriminability.

### Methodological Pitfalls

- **Aggressive thresholding** (high absolute cutoffs or unqualified binarization) → density-driven artifacts
- **Unconstrained learned-edge models** → overfit to site/scanner idiosyncrasies
- **Dynamic graphs without sufficient data quality** → added variance, no performance gain

### Implications for Machine Learning

Improving the **graph** (via better connectivity measure and principled sparsification) often yields larger gains than altering the classifier. Evaluate multiple node-edge-threshold combinations alongside standard ML hyperparameters.
