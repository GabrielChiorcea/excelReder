import style from './ChartBtn.module.scss';

const ChartBtn = (props) => {
  const passName = () => {
    props.onClick(props.col);
  };

  return (
    <button className={style.btn} key={props.name} onClick={passName}>
      {props.name}
    </button>
  );
};

export default ChartBtn;
