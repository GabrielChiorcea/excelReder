import style from '../htmlGenerator/Html.module.scss';
import Html from '../htmlGenerator/Html';
import { useSelector } from 'react-redux';

const BackEnResponse = () => {
  const chart = useSelector((state) => state.exe.chart);
  return (
    <div
      className={chart ? style.responseContainerChart : style.responseContainer}
    >
      {<Html />}
    </div>
  );
};

export default BackEnResponse;
