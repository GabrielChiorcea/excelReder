import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footerConteiner}>
      <div className={style.line}></div>
      <span className={style.rights}>
        All rights reserved by Gabriel Chiorcea
      </span>
      <div className={style.line}></div>
    </div>
  );
};

export default Footer;
