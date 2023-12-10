import style from './ChartSettings.module.scss';
import btn from '../../components/artifacts/ChartBtn.module.scss';
import { useState } from 'react';
import ChartBtn from '../artifacts/ChartBtn';
import { useDispatch, useSelector } from 'react-redux';
import { excelAction } from '../../store/excel-slice';

const ChartSettings = () => {
  const arr = useSelector((select) => select.exe.excelResponse);
  const c = useSelector((state) => state.exe.chart);
  const dispatch = useDispatch();
  const [colXoane, setColXoane] = useState('');
  const [colXtow, setColXtow] = useState('');
  const [colY, setColY] = useState('');
  const [full, setFull] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [s, setS] = useState(false);
  const [err, setErr] = useState(false);

  //////option

  const [selectedColorXoane, setSelectedColorXoane] = useState('Blue');
  const [selectedColorXtow, setSelectedColorXtow] = useState('Blue');

  const handleColorChangeXoane = (event) => {
    setSelectedColorXoane(event.target.value);
  };
  const handleColorChangeXtow = (event) => {
    setSelectedColorXtow(event.target.value);
  };

  /////option end

  const setCol = (name) => {
    if (colXoane === '') {
      setColXoane(name);
    } else if (colXtow === '') {
      setColXtow(name);
      setFull(true);
    } else if (colXoane !== '' && colXtow !== '') {
      return;
    }
  };

  const setY = (name) => {
    setColY(name);
  };

  const json = {
    columnX1: [colXoane, selectedColorXoane],
    columnX2: [colXtow, selectedColorXtow],
    Y: colY,
  };

  const createChart = async () => {
    try {
      // Realizați o cerere POST către API-ul dvs.
      const response = await fetch('http://127.0.0.1:5000/chart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
      });

      if (!response.ok) {
        throw new Error('Eroare la cerere');
      }

      // Conversie la tipul de imagine dorit (de exemplu, JPEG)
      const blob = await response.blob();

      // Conversie la URL obișnuit
      const imageUrl = URL.createObjectURL(blob);

      // Setarea datelor imaginii pentru a le afișa

      setImageData(imageUrl);
      dispatch(excelAction.chart(true));
      setS(true);
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
      setErr('This combination does not make sens');
    }
    console.log(json);
  };
  const restore = () => {
    setColXoane('');
    setColXtow('');
    setColY('');
    setFull(false);
    setImageData(null);
    setS(false);
    setSelectedColorXoane('Blue');
    setSelectedColorXtow('Blue');
    dispatch(excelAction.chart(false));
    setErr(false);
  };

  const relode = (
    <button className={btn.btn} onClick={restore}>
      relode
    </button>
  );

  const colNames = arr.res.map((el) => (
    <ChartBtn key={el} name={el} col={el} onClick={full ? setY : setCol} />
  ));

  const tablesChios = (
    <>
      <table className={style.tableConatiner}>
        <thead>
          <tr>
            <th className={style.thead}>Axis X</th>
            <th className={style.thead}>Color for X</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className={style.tableContent}
              style={{ color: selectedColorXoane, fontWeight: 'bold' }}
            >
              {colXoane}
            </td>

            <td className={style.tableContent}>
              <select
                className={style.select}
                value={selectedColorXoane}
                onChange={handleColorChangeXoane}
              >
                <option className={style.option} value="Blue">
                  Blue
                </option>
                <option className={style.option} value="Red">
                  Red
                </option>
                <option className={style.option} value="Green">
                  Green
                </option>
                <option className={style.option} value="Yellow">
                  Yellow
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td
              className={style.tableContent}
              style={{ color: selectedColorXtow, fontWeight: 'bold' }}
            >
              {colXtow}
            </td>

            <td className={style.tableContent}>
              <select
                value={selectedColorXtow}
                onChange={handleColorChangeXtow}
              >
                <option value="Blue">Albastru</option>
                <option value="Red">Roșu</option>
                <option value="Green">Verde</option>
                <option value="Yellow">Galben</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <table className={style.tableConatiner}>
        <thead>
          <tr>
            <th className={style.thead}>Axis Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style.tableContent} style={{ fontWeight: 'bold' }}>
              {colY}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );

  const img = (
    <div className={style.imgChart}>
      {imageData && (
        <img className={style.img} src={imageData} alt="Descriere imagine" />
      )}
    </div>
  );

  const chart = (
    <div className={style.create}>
      <div className={style.chartContainerBtn}>
        <svg
          className={style.svgBtn}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 32 32"
        >
          <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM14 24c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-16c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v16zM26 18c0 1.1-0.9 2-2 2h-4c-1.1 0-2-0.9-2-2v-10c0-1.1 0.9-2 2-2h4c1.1 0 2 0.9 2 2v10z"></path>
        </svg>
        <button onClick={createChart} className={style.chartBtnStart}>
          Create
        </button>
      </div>
      {err && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'red' }}>{err}</span>
          {relode}
        </div>
      )}
    </div>
  );

  return (
    <>
      {!s && colNames}
      {s && relode}
      <div className={s ? style.imgContainer : style.chartContainer}>
        {!s && tablesChios}
        {s ? img : chart}
      </div>
    </>
  );
};

export default ChartSettings;
