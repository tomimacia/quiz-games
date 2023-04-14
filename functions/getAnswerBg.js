export const getAnswerBg = (correctA,selected,qAns,a,i) => {
    let thisColor = "none"
    if (qAns && i === selected) {
      a === correctA ? thisColor="green" : thisColor="red";
    }
    if(qAns && i !== selected){
      a === correctA ? thisColor="orange" : thisColor="none";
    }
    return thisColor
  };
