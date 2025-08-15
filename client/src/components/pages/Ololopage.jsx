import React from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

export default function Ololopage() {
  return (
    <div>
      <h1>Вы серьезно думали, что мы не прописали ололо?!</h1>
      <h2>"Мы всё видели... даже твой ололо." 😏</h2>
      <img
        src="https://masterpiecer-images.s3.yandex.net/dd7f70606dae11eebec4429f31467427:upscaled"
        alt="ololo img"
      />
      <Button variant="primary" as={Link} to="/">
        на главную
      </Button>
    </div>
  );
}
