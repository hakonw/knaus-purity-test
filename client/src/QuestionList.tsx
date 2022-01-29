import Questions from "./Questions";
import "./QuestionList.css";
import { AcummulatedData } from "./App";

const getPercentage = (
  acummulatedData: AcummulatedData | undefined,
  id: string
) => {
  return acummulatedData?.stats.find((d) => d.id === id)?.percentChecked;
};

const QuestionList = (props: {
  onCheck: (questionId: string, checked: boolean) => void;
  stats: AcummulatedData | undefined;
}) => {
  return (
    <div className="questionList">
      {Questions.map((question, index) => {
        return (
          <label key={question.id} className="questionList--row shadow-sm">
            <span className="questionList--number me-2">{index + 1}</span>
            <input
              className="me-2"
              key={question.id}
              type="checkbox"
              onChange={(e) => props.onCheck(question.id, e.target.checked)}
            />
            {question.text}
            <span className="ms-auto">
              {props.stats !== undefined && (
                <>
                  {(
                    (getPercentage(props.stats, question.id) ?? 0) * 100
                  ).toFixed(0)}
                  %
                </>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default QuestionList;
