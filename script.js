const codeLines = [
  '<span class="t-comment">// Software Developer</span>\n',
  '<span class="t-keyword">const</span> dev = {\n',
  '  name: <span class="t-string">"Thabang"</span>,\n',
  '  skills: [<span class="t-string">"Web"</span>, <span class="t-string">"Auto"</span>, <span class="t-string">"Design"</span>],\n',
  '  status: <span class="t-string">"Building..."</span>\n',
  '};\n\n',
  '<span class="t-func">deploy</span>(dev);'
];

const target = document.getElementById("terminal-code");
let lineIdx = 0;
let charIdx = 0;
let currentHTML = "";

function typeCode() {
  if (lineIdx < codeLines.length) {
    const currentLine = codeLines[lineIdx];

    if (currentLine.startsWith('<span')) {
      currentHTML += currentLine;
      target.innerHTML = currentHTML;
      lineIdx++;
      setTimeout(typeCode, 100);
    } else {
      currentHTML += currentLine.charAt(charIdx);
      target.innerHTML = currentHTML;
      charIdx++;

      if (charIdx < currentLine.length) {
        setTimeout(typeCode, Math.random() * 30 + 20);
      } else {
        charIdx = 0;
        lineIdx++;
        setTimeout(typeCode, 120);
      }
    }
  } else {
    setTimeout(() => {
      currentHTML = "";
      target.innerHTML = "";
      lineIdx = 0;
      charIdx = 0;
      typeCode();
    }, 4000);
  }
}

typeCode();
