import style from './question.module.scss';
import useQAfetch from '../../hook/useQAfetch';

const AskQuestion = (props) => {
  const { fetchServer: fetch } = useQAfetch();

  let question = props.question;

  const askQuestion = () => {
    fetch(question);
  };

  return (
    <button className={style.qaBtn} onClick={askQuestion}>
      {props.question}
    </button>
  );
};

export default AskQuestion;
