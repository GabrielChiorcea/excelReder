import { useState, Fragment } from 'react';
import style from './excelAdIn.module.scss';
import { useDispatch } from 'react-redux';
import { excelAction } from '../../store/excel-slice';

const ExcelAdIn = () => {
  const dispatch = useDispatch();

  const [validate, setValidate] = useState(false);
  const [isExcel, setIsExcel] = useState(false);
  const [excelFile, setExcelFile] = useState(undefined);

  const onSubmit = () => {
    if (excelFile !== undefined) {
      setIsExcel(true);
    }
  };

  const excelReader = () => {
    const allowedExtensions = ['.xlsx', '.xls'];

    if (excelFile && allowedExtensions.includes(excelFile.name.slice(-5))) {
      dispatch(excelAction.excelUpLoad(true));
      const formData = new FormData();
      formData.append('file', excelFile);
      fetch('http://127.0.0.1:5000/excel', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: formData,
      }).then((response) => console.log(response.json()));
      console.log(formData);
    }
  };

  const start = (
    <div className={style.container}>
      <button className={style.start} onClick={excelReader}>
        Start
      </button>
    </div>
  );

  const addExcel = (
    <div className={style.container}>
      {!validate && (
        <div className={style.addExcel}>
          <label htmlFor="file-input" className={style.fileLabel}>
            Add Excel
          </label>
          <input
            type="file"
            accept=".xlsx, .xls"
            className={style.fileInput}
            onChange={(e) => {
              setExcelFile(e.target.files[0]);
              setValidate(true);
            }}
          />
        </div>
      )}
      {validate && (
        <button className={style.start} onClick={onSubmit}>
          Validate
        </button>
      )}
    </div>
  );

  return <Fragment>{isExcel ? start : addExcel}</Fragment>;
};

export default ExcelAdIn;
