Place the exported TensorFlow.js ear detector here:

```text
frontend/public/assets/models/ear-detector/model.json
frontend/public/assets/models/ear-detector/group1-shard*.bin
```

The AR try-on page loads `model.json` automatically when it exists.

Expected detector output:

- `[1, N, 6]` or `[N, 6]`
- each row as `[x1, y1, x2, y2, score, class]`
- normalized `0..1` boxes or pixel boxes are both accepted
- center boxes `[cx, cy, w, h, score, class]` are also accepted when `x2 < x1` or `y2 < y1`

If no model is present, the app uses the face bounding box to estimate left and right ear regions.
