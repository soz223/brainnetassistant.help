## Quick Start

Install the open-source `brainnet-graph` package from PyPI:

```bash
pip install brainnet-graph
```

Full documentation and usage examples are available at [brainnet-graph.readthedocs.io](https://brainnet-graph.readthedocs.io/).

---

## What is BrainNet?

BrainNet is a systematic benchmark and open toolkit for constructing ROI-based functional brain networks from resting-state fMRI data. It evaluates **33 pipelines** under a unified framework, covering:

- **Node parcellations**: AAL116, Schaefer100, Power264
- **Connectivity measures**: Pairwise (Pearson, Spearman, Kendall, Partial Correlation, Mutual Information, etc.), Higher-Order FC (tHOFC, aHOFC, dHOFC), End-to-end models (FBNetGen, Graph Autoencoder, DABNet)
- **Sparsification strategies**: Absolute thresholding, Proportional thresholding, OMST, Binarization
- **Graph types**: Static and Dynamic

---

## Key Features

| Feature | Details |
|---------|---------|
| **20+ connectivity methods** | Pairwise correlations, HOFC, end-to-end learned edges |
| **3 parcellation atlases** | AAL116, Schaefer100, Power264 |
| **3 benchmark datasets** | ADNI, HCP S1200, ADHD-200 |
| **Unified GNN classifier** | Fixed NeuroGraph-based evaluation protocol |
| **PyTorch Geometric output** | Exports `.pt` graph files or `.csv` edge lists |
| **Python API + CLI** | Seamless integration into neuroimaging pipelines |

---

## Python API Example

```python
from brainnet_graph import build_graph

# Build a static functional brain graph using Pearson correlation
graph = build_graph(
    bold_timeseries="subject_bold.csv",  # ROI x time matrix
    method="pearson",
    parcellation="AAL116",
    threshold=0.3,
    threshold_type="proportional",
)

# graph is a PyTorch Geometric Data object
print(graph)
```

---

## Supported Connectivity Methods

### Pairwise Correlation
- Pearson Correlation
- Spearman Correlation
- Kendall Correlation
- Partial Correlation
- Cosine Similarity
- Euclidean Distance
- Mutual Information
- Wavelet Coherence
- Granger Causality
- Distance Correlation
- And more...

### Higher-Order Functional Connectivity (HOFC)
- Correlation's Correlation (tHOFC)
- Associated HOFC (aHOFC)
- Dynamics-Based HOFC (dHOFC)

### End-to-End Models
- FBNetGen
- Graph Autoencoder
- DABNet

---

## Output Formats

```
brainnet-graph outputs/
├── graph.pt          ← PyTorch Geometric Data object
├── adjacency.csv     ← edge list in CSV format
└── report.json       ← runtime metadata and graph statistics
```

---

## Benchmark Protocol

All methods are evaluated under a unified 5-fold cross-validation protocol:

1. **Preprocessing**: fMRIPrep-based pipeline (brain extraction, motion correction, normalization, smoothing)
2. **Parcellation**: Map BOLD signals to ROI atlases (AAL116 / Schaefer100 / Power264)
3. **Connectivity construction**: Apply chosen method to compute ROI-level adjacency matrix
4. **Filtering**: Apply sparsification (absolute or proportional threshold)
5. **GNN classification**: NeuroGraph-based classifier (graph convolution + residual + MLP)
6. **Evaluation**: AUROC, Accuracy, Sensitivity, Specificity, F1, Precision — mean ± s.d. over 5 folds
