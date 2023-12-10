import style from './App.module.scss';
import './main.scss';

import Welcome from './components/artifacts/Welcome';
import Powers from './components/artifacts/Powers';
import ExcelAdIn from './components/excelEnter/ExcelAdIn';
import Footer from './components/artifacts/Footer';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import SendQA from './components/AskServer/Question';
import Title from './components/artifacts/title';
import BackEnResponse from './components/AskServer/BackEndResponse';
import Layout from './styles/Layout';

function App() {
  const upLoadedExcel = useSelector((state) => state.exe.excelUpLoad);
  return (
    <div className={style.App}>
      {!upLoadedExcel && (
        <Fragment>
          <Welcome />
          <ExcelAdIn />
          <Powers />
        </Fragment>
      )}
      {upLoadedExcel && (
        <Fragment>
          <Title />
          <SendQA />
          <Layout>
            <BackEnResponse />
          </Layout>
        </Fragment>
      )}
      <Footer />
    </div>
  );
}

export default App;
