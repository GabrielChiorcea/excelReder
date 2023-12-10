import { useSelector } from 'react-redux';
import style from './Html.module.scss';
import ExcelSummary from './ExcelSummary';
import ChartSettings from './ChartSettings';

const Html = () => {
  const response = useSelector((select) => select.exe.excelResponse);
  console.log(response);
  let html;
  if (response.question === 'not ask') {
    html = (
      <>
        <div className={style.defaultMessage}>
          <h1 className={style.defaultText}>
            Click a button, ask a question !
          </h1>
        </div>
      </>
    );
  } else if (response.question === 'Excel summary') {
    html = <ExcelSummary />;
  } else if (response.question === 'Extract value') {
    html = (
      <div className={style.response}>
        <span>{response.question}</span>
        <ul>
          <li> Columns name: {response.columns}</li>
          <li> Value: {response.value}</li>
          <li> Row whare you can find the value : {response.row}</li>
        </ul>
      </div>
    );
  } else if (response.question === 'Chart') {
    html = <ChartSettings />;
  } else if (response.question === 'Count null value') {
    html = (
      <div className={style.response}>
        <span>{response.question}</span>
        <ul>
          <li>Number of null value is: {response.res}</li>
        </ul>
      </div>
    );
  } else if (response.question === 'Under costruction') {
    html = <h1>{response.res}</h1>;
  } else if (response.question === 'Error') {
    html = (
      <div className={style.errorContainer}>
        <div className={style.errorMessage}>
          <h1 className={style.errorText}>{response.res}</h1>
        </div>
        <span className={style.recall}>Try again!</span>
      </div>
    );
  } else if (response[0].question === 'fill NAN W 0') {
    html = (
      <div className={style.tableContainer}>
        {response.map((item) => (
          <div className={style.tableContent}>
            <h3 className={style.column}>{item.column}</h3>

            {item.value.map((el) => (
              <span
                className={style.cell}
                style={
                  el.status === 'modified'
                    ? { color: 'red', fontWeight: 'bold' }
                    : { color: 'black', fontWeight: 'bold' }
                }
              >
                {el.value}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return html;
};

export default Html;
