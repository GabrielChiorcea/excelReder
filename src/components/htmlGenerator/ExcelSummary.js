import { useSelector } from 'react-redux';
import style from './ExcelSummary.module.scss';

const ExcelSummary = () => {
  const response = useSelector((select) => select.exe.excelResponse);

  const html = (
    <>
      {response.col_dtypes.map((el, index) => (
        <tr key={index}>
          <td className={style.excelSummaryContet}>{el[0]}</td>
          <td className={style.excelSummaryContet}>{el[1]}</td>
        </tr>
      ))}
    </>
  );

  return (
    <>
      <div className={style.ExcelSummaryContainer}>
        <table className={style.excelSummaryDetalis}>
          <thead>
            <tr className={style.excelSummaryHeaderContainer}>
              <th className={style.excelSummaryHeader}>Rows sum</th>
              <th className={style.excelSummaryHeader}>Column sum</th>
              <th className={style.excelSummaryHeader}>Max Value</th>
              <th className={style.excelSummaryHeader}>Min Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.excelSummaryContet}>{response.rows}</td>
              <td className={style.excelSummaryContet}>{response.columns}</td>
              <td className={style.excelSummaryContet}>{response.max_value}</td>
              <td className={style.excelSummaryContet}>{response.min_value}</td>
            </tr>
          </tbody>
        </table>

        <table className={style.excelSummary}>
          <thead>
            <tr className={style.excelSummaryHeaderContainer}>
              <th className={style.excelSummaryHeader}>Column Name</th>
              <th className={style.excelSummaryHeader}>Column data type</th>
            </tr>
          </thead>
          <tbody>{html}</tbody>
        </table>
      </div>
    </>
  );
};

export default ExcelSummary;
