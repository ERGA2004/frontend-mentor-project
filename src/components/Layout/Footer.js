import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        Челлендж взять из {" "}
        <a
          href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        .<br />
        Кодил &hearts; {" "}
        <a href="" target="_blank" rel="noreferrer">
          Erga
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
