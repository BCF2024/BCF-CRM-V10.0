from pathlib import Path
import re, sys
version=sys.argv[1] if len(sys.argv)>1 else None
if not version: raise SystemExit("Usage: python BUILD_RELEASE.py 13.0.1")
root=Path(__file__).parent
cfg=root/"config.js"
s=cfg.read_text(); s=re.sub(r'appVersion:\s*"[^"]+"',f'appVersion: "{version}"',s); cfg.write_text(s)
idx=root/"index.html"; s=idx.read_text(); s=re.sub(r'v=\d+\.\d+\.\d+',f'v={version}',s); idx.write_text(s)
print(f"Runtime version set to {version}. Update CACHE_NAME in service-worker.js for each release.")
