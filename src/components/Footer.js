import React from "react";

function Footer() {
  return (
    <footer>
      <div style={{ marginTop: 5 }}>
        <center>
          {" "}
          Made with
          <heart> ❤ </heart> by
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ViAsmit"
            style={{ color: "#59b7ff" }}
          >
            {" "}
            Asmit Vimal{" "}
          </a>{" "}
          and
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bp"
            style={{ color: "#59b7ff" }}
          >
            {" "}
            Bharat Pratap
          </a>
        </center>
        <br />
        <center>Crowd Source Project</center>
      </div>
    </footer>
  );
}

export default Footer;

// data-color-scheme="no-preference: dark; light: dark; dark: dark;"
// data-color-scheme="no-preference: dark; light: dark; dark: dark;"

// const heart = styled.div`
//   color: red;
// `;
