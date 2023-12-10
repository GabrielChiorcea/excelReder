import style from './question.module.scss';
import Button from './AskQuestion';

const Question = () => {
  const question = [
    {
      id: 'bt1',
      question: 'Count null value',
      para: '0',
    },
    {
      id: 'bt2',
      question: 'Extract value',
      para: '1',
    },
    {
      id: 'bt3',
      question: 'Excel summary',
      para: '2',
    },
    {
      id: 'bt4',
      question: 'Chart',
      para: '3',
    },
    {
      id: 'bt5',
      question: 'fill NAN W 0',
      para: '4',
    },
    {
      id: 'bt6',
      question: 'Under costruction',
      para: '5',
    },
  ];

  const btnMap = question.map((el) => (
    <Button key={el.id} id={el.para} question={el.question} />
  ));

  return <div className={style.qaBtnContainer}>{btnMap}</div>;
};

export default Question;
