


## Analysis and Preprocessing Workflow

### Data Preprocessing
- **Missing Values**: Handled missing values through interpolation. Documented the rationale behind choosing interpolation and criteria for setting values to zero.
- **Feature Engineering**: Created new features `diffOrg` and `diffDest` by combining `oldbalance`, `newbalance`, and `amount`. These features capture transaction patterns more effectively.

### Normalization
- **Transformations**: Applied mean normalization and log transformation to manage scale and skewness. Ensure these transformations are consistently applied during both training and evaluation phases.

### Data Visualization
- **Visualization**: Utilized clear and informative visualizations to understand data distribution and relationships. Violin plots effectively demonstrate the distribution of fraud and flagged fraud across different transaction types.

### Handling Imbalanced Data
- **Oversampling**: Used SMOTE to address class imbalance in the dataset. Applied SMOTE only on the training data to prevent data leakage.

### Next Steps
1. **Model Training**:
   - Split data into training and testing sets.
   - Experiment with various algorithms and assess their performance on the balanced dataset.

2. **Model Evaluation**:
   - Evaluate model performance using metrics such as precision, recall, F1-score, and ROC-AUC, with a focus on handling class imbalance effectively.

