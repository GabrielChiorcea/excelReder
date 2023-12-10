import style from '../styles/Layout.module.scss';

const Layout = (props) => {
  return <div className={style.layout}>{props.children}</div>;
};

export default Layout;
