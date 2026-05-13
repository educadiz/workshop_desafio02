<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World — Eduardo Cadiz</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0c10;
      --surface: #13141a;
      --accent: #00e5ff;
      --accent2: #ff3cac;
      --text: #f0f0f0;
      --muted: #6c6f7b;
      --border: rgba(255,255,255,0.07);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Space Mono', monospace;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      overflow: hidden;
    }

    /* Background grid */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
      z-index: 0;
    }

    /* Glow blobs */
    .blob {
      position: fixed;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.18;
      pointer-events: none;
      z-index: 0;
    }
    .blob-1 {
      width: 500px; height: 500px;
      background: var(--accent);
      top: -150px; left: -100px;
    }
    .blob-2 {
      width: 400px; height: 400px;
      background: var(--accent2);
      bottom: -100px; right: -80px;
    }

    /* Main card */
    .card {
      position: relative;
      z-index: 1;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 3.5rem 4rem;
      max-width: 680px;
      width: 100%;
      box-shadow: 0 0 0 1px rgba(0,229,255,0.06), 0 32px 80px rgba(0,0,0,0.5);
      animation: fadeUp 0.7s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Badge */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(0,229,255,0.08);
      border: 1px solid rgba(0,229,255,0.2);
      color: var(--accent);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 0.35rem 0.85rem;
      border-radius: 999px;
      margin-bottom: 2rem;
      animation: fadeUp 0.7s 0.1s ease both;
    }
    .badge::before {
      content: '';
      width: 7px; height: 7px;
      background: var(--accent);
      border-radius: 50%;
      box-shadow: 0 0 6px var(--accent);
    }

    /* Code label */
    .code-label {
      font-size: 0.75rem;
      color: var(--muted);
      letter-spacing: 0.06em;
      margin-bottom: 0.6rem;
      animation: fadeUp 0.7s 0.2s ease both;
    }

    /* Hello World */
    .hello {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.8rem, 8vw, 4.6rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.02em;
      background: linear-gradient(90deg, #ffffff 30%, var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.3rem;
      animation: fadeUp 0.7s 0.25s ease both;
    }

    /* Divider */
    .divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, var(--accent), var(--accent2), transparent);
      margin: 1.8rem 0;
      opacity: 0.35;
      animation: fadeUp 0.7s 0.3s ease both;
    }

    /* Name block */
    .name-block {
      animation: fadeUp 0.7s 0.35s ease both;
    }
    .name-label {
      font-size: 0.72rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.4rem;
    }
    .name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.6rem, 5vw, 2.6rem);
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.01em;
    }
    .name span {
      color: var(--accent2);
    }

    /* Info row */
    .info-row {
      display: flex;
      gap: 1.5rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      animation: fadeUp 0.7s 0.45s ease both;
    }

    .info-item {
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.7rem 1.1rem;
      flex: 1 1 140px;
    }
    .info-item .label {
      font-size: 0.65rem;
      color: var(--muted);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }
    .info-item .value {
      font-size: 0.85rem;
      color: var(--accent);
    }

    /* Code snippet */
    .snippet {
      margin-top: 2rem;
      background: rgba(0,0,0,0.4);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.2rem 1.4rem;
      font-size: 0.8rem;
      line-height: 1.75;
      overflow-x: auto;
      animation: fadeUp 0.7s 0.55s ease both;
    }
    .snippet .kw  { color: #ff3cac; }
    .snippet .fn  { color: #00e5ff; }
    .snippet .str { color: #a8ff78; }
    .snippet .cm  { color: var(--muted); font-style: italic; }
    .snippet .num { color: #f9ca24; }

    /* Footer */
    .footer {
      margin-top: 2rem;
      font-size: 0.7rem;
      color: var(--muted);
      text-align: center;
      letter-spacing: 0.06em;
      animation: fadeUp 0.7s 0.65s ease both;
    }
  </style>
</head>
<body>

  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>

  <div class="card">

    <div class="badge">Node.js · Express</div>

    <div class="code-label">// output</div>
    <div class="hello">Hello, World!</div>

    <div class="divider"></div>

    <div class="name-block">
      <div class="name-label">desenvolvedor</div>
      <div class="name">Eduardo <span>Cadiz</span></div>
    </div>

    <div class="info-row">
      <div class="info-item">
        <div class="label">Runtime</div>
        <div class="value">Node.js</div>
      </div>
      <div class="info-item">
        <div class="label">Framework</div>
        <div class="value">Express</div>
      </div>
      <div class="info-item">
        <div class="label">Porta</div>
        <div class="value">3000</div>
      </div>
    </div>

    <div class="snippet">
<span class="kw">const</span> express = <span class="fn">require</span>(<span class="str">'express'</span>);<br>
<span class="kw">const</span> app = <span class="fn">express</span>();<br>
<br>
<span class="cm">// rota principal</span><br>
app.<span class="fn">get</span>(<span class="str">'/'</span>, (req, res) =&gt; {<br>
&nbsp;&nbsp;res.<span class="fn">send</span>(<span class="str">'Hello, World!'</span>);<br>
});<br>
<br>
app.<span class="fn">listen</span>(<span class="num">3000</span>);
    </div>

    <div class="footer">apresentação — turma de desenvolvimento web</div>

  </div>

</body>
</html>
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});