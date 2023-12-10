import { useDispatch } from 'react-redux';
import { excelAction } from '../store/excel-slice';

const useQAfetch = () => {
  const dispatch = useDispatch();

  const fetchServer = async (string) => {
    const url = 'http://127.0.0.1:5000/';
    let str = string;
    let responseCode;
    let dataRespons;
    let fillNan = [];
    try {
      let response;
      if (str === 'Count null value') {
        response = await fetch(url + str);
      } else if (str === 'Excel summary') {
        response = await fetch(url + str);
      } else if (str === 'Extract value') {
        response = await fetch(url + str);
      } else if (str === 'Chart') {
        response = await fetch(url + str);
      } else if (str === 'Under costruction') {
        dataRespons = {
          res: 'Under costruction',
          question: str,
        };
        console.log(dataRespons);
        dispatch(excelAction.excelResponse(dataRespons));
        return;
      } else if (str === 'fill NAN W 0') {
        response = await fetch(url + str);
      } else {
        response = await fetch(url + str);
      }

      responseCode = response.status;

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (str === 'Count null value') {
        dataRespons = { res: data.value, question: str };
      } else if (str === 'Excel summary') {
        dataRespons = {
          rows: data.rows,
          columns: data.columns,
          col_dtypes: data.col_dtypes,
          max_value: data.max_value,
          min_value: data.min_value,
          question: str,
        };
      } else if (str === 'Extract value') {
        dataRespons = {
          value: data.value,
          columns: data.columns,
          row: data.row,
          question: str,
        };
      } else if ('fill NAN W 0') {
        dataRespons = data;
        for (const key in dataRespons) {
          fillNan.push({
            id: dataRespons[key].column,
            question: str,
            column: dataRespons[key].column,
            value: dataRespons[key].arr,
          });
        }
      } else if (str === 'Chart') {
        dataRespons = { res: data.value, question: str };
      } else {
        dataRespons = {
          res: data.value,
          question: str,
        };
      }

      if (str === 'fill NAN W 0') {
        dispatch(excelAction.excelResponse(fillNan));
      } else {
        dispatch(excelAction.excelResponse(dataRespons));
      }
    } catch (error) {
      console.log(error, responseCode);
      dataRespons = {
        res: `We tryed to call the server but the server code is ${responseCode}`,
        question: 'Error',
      };
      dispatch(excelAction.excelResponse(dataRespons));
    }
  };

  return { fetchServer };
};

export default useQAfetch;
