# nodejs_crash_course

## Important command
1. Create package.json (-y is not necessary)
```bash
npm init -y
```
2. Install nodemon
```bash
npm i -D nodemon
```
3. Update package.json
```bash
"type": "module"
"scripts": {
  "start": "nodemon --env-file=.env server3.js"
}
```

## Fundamental API
1. File system (write, append, read)
```bash
import fs from 'fs/promises';
```
2. Path (utilities for working with file and directory paths)
```bash
import path from 'path';
import url from 'url';
```
3. Operating System (userInfo(), totalmem(), freemem())
4. Crypto (cryptographic functionality)
```bash
import crypto from 'crypto';
```
5. Events Emitter
```bash
import { EventEmitter } from 'events';
```
