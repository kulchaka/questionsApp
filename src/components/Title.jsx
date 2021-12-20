import {useSelector} from "react-redux";

const Title = (props) => {
  const textList = useSelector(state => state.questReducer.questList[state.stepsReducer.steps].quest)
  return (
      <h1>{textList}</h1>
  );
};

export default Title;