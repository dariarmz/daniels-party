<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>Type — Scale</title>
<link rel="stylesheet" href="../colors_and_type.css">
<style>
  body { margin: 0; padding: 24px; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 10px 0; border-bottom: 1px dashed var(--ink-3); vertical-align: middle; }
  tr:last-child td { border-bottom: none; }
  .token { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em; color: var(--neon-cyan); text-transform: uppercase; width: 160px; }
  .specs { font-family: var(--font-mono); font-size: 11px; color: var(--fg3); width: 110px; }
  .face  { font-family: var(--font-mono); font-size: 11px; color: var(--fg3); width: 130px; text-transform: uppercase; letter-spacing: 0.08em;}
  .sample { color: var(--fg1); }
</style>
</head>
<body class="tex">
  <table>
    <tr><td class="token">--fz-mega</td><td class="specs">200px / 0.85</td><td class="face">Display</td>
        <td class="sample" style="font-family:var(--font-display); font-size:64px; line-height:0.85; letter-spacing:-0.04em; color:var(--neon-acid);">08</td></tr>
    <tr><td class="token">--fz-display</td><td class="specs">128px / 0.95</td><td class="face">Display</td>
        <td class="sample" style="font-family:var(--font-display); font-size:42px;">МАРК</td></tr>
    <tr><td class="token">--fz-h1</td><td class="specs">72px / 1.05</td><td class="face">Display</td>
        <td class="sample" style="font-family:var(--font-display); font-size:36px;">КИБЕР</td></tr>
    <tr><td class="token">--fz-h2</td><td class="specs">44px / 1.05</td><td class="face">Display</td>
        <td class="sample" style="font-family:var(--font-display); font-size:28px;">СЕКТОР</td></tr>
    <tr><td class="token">--fz-h3</td><td class="specs">28px / 1.05</td><td class="face">Display</td>
        <td class="sample" style="font-family:var(--font-display); font-size:22px;">АГЕНТ</td></tr>
    <tr><td class="token">--fz-body-xl</td><td class="specs">22px / 1.55</td><td class="face">Space Grotesk</td>
        <td class="sample" style="font-family:var(--font-body); font-size:20px;">Большой подзаголовок</td></tr>
    <tr><td class="token">--fz-body-lg</td><td class="specs">18px / 1.55</td><td class="face">Space Grotesk</td>
        <td class="sample" style="font-family:var(--font-body); font-size:18px;">Основной текст</td></tr>
    <tr><td class="token">--fz-body-md</td><td class="specs">16px / 1.55</td><td class="face">Space Grotesk</td>
        <td class="sample" style="font-family:var(--font-body); font-size:16px;">Вторичный текст</td></tr>
    <tr><td class="token">--fz-mono-md</td><td class="specs">14px / 1.4</td><td class="face">JetBrains Mono</td>
        <td class="sample" style="font-family:var(--font-mono); font-size:13px; letter-spacing:0.08em; text-transform:uppercase; color:var(--neon-cyan);">// HUD_LABEL</td></tr>
  </table>
</body>
</html>
