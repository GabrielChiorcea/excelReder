import style from './Powers.module.scss';

const Powers = () => {
  return (
    <div className={style.PowerContainer}>
      <h2 className={style.header}>Powers</h2>
      <div className={style.itemA}>
        <span>
          You can ask the Powers anything about your excel and he will give you
          the answer.
        </span>
      </div>
      <div className={style.itemB}>
        <span>Powers can calculate, aggregate and create chart for you.</span>
      </div>
      <div className={style.itemC}>
        <span>
          Your chart or Excel can be downloaded with all the changes made by
          Powers to present the results to the your BI team.
        </span>
      </div>
    </div>
  );
};

export default Powers;
