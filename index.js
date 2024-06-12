"use strict";

var _react = require("@testing-library/react");
var _index = require("../index");
test('renders learn react link', () => {
  (0, _react.render)( /*#__PURE__*/React.createElement(_index.App, null));
  const linkElement = _react.screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    onClick,
    children,
    loading,
    disabled,
    type,
    classes,
    name,
    theme,
    dataTestid,
    dataTooltip
  } = _ref;
  const handleClick = () => {
    if (!loading && !disabled && onClick) {
      onClick();
    }
  };
  const btnClass = "a-button ".concat(loading ? 'loading' : '', " ").concat(type, " ").concat(theme, " ").concat((classes || []).join(' '));
  return /*#__PURE__*/_react.default.createElement("button", {
    className: btnClass,
    onClick: handleClick,
    disabled: disabled || loading,
    type: type,
    "data-testid": dataTestid,
    name: name,
    title: dataTooltip
  }, loading ? "Loading..." : children);
};
exports.Button = Button;
Button.propTypes = {
  classes: _propTypes.default.arrayOf(_propTypes.default.string),
  onClick: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,
  loading: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  dataTooltip: _propTypes.default.string
  // type: PropTypes.oneOf(["button", "submit", "reset"]),
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Checkbox = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox ".concat(props.theme)
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    // onClick={props.onClick}
    onChange: props.onClick,
    type: "checkbox",
    checked: props.checked,
    id: props.id,
    name: props.name
  }, props.inputProps)), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: props.id
  }, props.label));
};
exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  checked: _propTypes.default.bool,
  label: _propTypes.default.string,
  inputProps: _propTypes.default.objectOf(_propTypes.default.any),
  id: _propTypes.default.string,
  onClick: _propTypes.default.func,
  classes: _propTypes.default.arrayOf(_propTypes.default.string)
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Dropdown = _ref => {
  let {
    options,
    handleChange,
    defaultValue,
    classes,
    selectClassName
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-container ".concat(classes.join(' '))
  }, /*#__PURE__*/_react.default.createElement("select", {
    className: "dropdown-select ".concat(selectClassName),
    onChange: handleChange,
    defaultValue: defaultValue
  }, options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.value,
    value: option.value
  }, option.label))));
};
exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,
  handleChange: _propTypes.default.func.isRequired,
  defaultValue: _propTypes.default.string,
  className: _propTypes.default.arrayOf(_propTypes.default.string),
  selectClassName: _propTypes.default.string
};
Dropdown.defaultProps = {
  disabled: false,
  options: [],
  classes: [],
  selectClassName: ''
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Radio = _ref => {
  let {
    id,
    name,
    checked,
    handleChange,
    label,
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-container"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    checked: checked,
    id: id,
    name: name,
    value: value,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label));
};
exports.Radio = Radio;
Radio.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string,
  checked: _propTypes.default.bool,
  handleChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.any
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
var _Radio = require("../Radio");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RadioGroup = _ref => {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-group-container"
  }, data.map(() => /*#__PURE__*/_react.default.createElement(_Radio.Radio, null)));
};
exports.RadioGroup = RadioGroup;
RadioGroup.propTypes = {
  data: _propTypes.default.array.isRequired
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextArea = _ref => {
  let {
    value,
    handleChange,
    maxLength,
    placeholder,
    classes,
    error
  } = _ref;
  const onChange = ev => {
    const value = ev.target.value;
    handleChange(value);
  };
  return /*#__PURE__*/_react.default.createElement("textarea", {
    className: "text-area-container ".concat(classes.join(' '), " ").concat(error ? 'on-error' : ''),
    value: value,
    onChange: onChange,
    maxLength: maxLength,
    placeholder: placeholder
  });
};
exports.TextArea = TextArea;
TextArea.propTypes = {
  value: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  maxLength: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  classes: _propTypes.default.arrayOf(_propTypes.default.string)
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTooltip = require("react-tooltip");
require("react-tooltip/dist/react-tooltip.css");
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Tooltip = props => {
  const options = {
    className: ['tooltip', props.className || ''].join(' '),
    classNameArrow: 'tooltip-arrow',
    effect: 'solid',
    place: 'top-start',
    variant: 'info',
    // offset: 100,
    // backgroundColor: '#efefef',
    // textColor: '#333',
    // fontFamily: 'Poppins',
    // borderRadius: '12.68px',
    // backgroundColor: '#CBD5E1',
    backgroundColor: '#efefef',
    textColor: '#2b2b2b',
    multiline: true,
    ...props.options,
    id: props.id
  };
  if (props.getContent) {
    options.getContent = props.getContent;
  }
  return /*#__PURE__*/_react.default.createElement(_reactTooltip.Tooltip, options);
};
exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.objectOf(_propTypes.default.string)
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongAnswerQuestion = void 0;
var _react = _interopRequireDefault(require("react"));
var _TextArea = require("../../../../../components/TextArea");
var _QuestionText = require("../QuestionText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LongAnswerQuestion = _ref => {
  let {
    id,
    question,
    questionNum,
    mandatory,
    handleChange,
    value,
    error
  } = _ref;
  const onChange = val => {
    handleChange(val, questionNum);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "long-answer-question-container",
    id: id
  }, /*#__PURE__*/_react.default.createElement(_QuestionText.QuestionText, {
    questionNum: questionNum,
    mandatory: mandatory,
    question: question
  }), /*#__PURE__*/_react.default.createElement(_TextArea.TextArea, {
    classes: ['long-answer-text-area'],
    value: value,
    handleChange: onChange,
    maxLength: 2000,
    placeholder: "Enter your answer",
    error: error
  }), mandatory && error && /*#__PURE__*/_react.default.createElement("div", {
    className: "validation-error"
  }, "This is a mandatory question"), /*#__PURE__*/_react.default.createElement("div", {
    className: "remaining-character"
  }, 2000 - value.length, " characters left"));
};
exports.LongAnswerQuestion = LongAnswerQuestion;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiAnswerQuestion = void 0;
var _react = _interopRequireDefault(require("react"));
var _Checkbox = require("../../../../../components/Checkbox");
var _QuestionText = require("../QuestionText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MultiAnswerQuestion = _ref => {
  let {
    id,
    question,
    answerOptions,
    handleChange,
    questionNum,
    mandatory,
    value,
    error
  } = _ref;
  const handleClick = ev => {
    handleChange(+ev.target.name, questionNum);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-answer-question-container",
    id: id
  }, /*#__PURE__*/_react.default.createElement(_QuestionText.QuestionText, {
    questionNum: questionNum,
    mandatory: mandatory,
    question: question
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "answer-options"
  }, answerOptions.map((option, index) => /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    checked: Array.isArray(value) && value.includes(index),
    label: option,
    id: "".concat(id, "-op-").concat(index + 1),
    key: "".concat(id, "-op-").concat(index + 1),
    onClick: handleClick,
    theme: "green",
    value: index,
    name: index
  }))), mandatory && error && /*#__PURE__*/_react.default.createElement("div", {
    className: "validation-error"
  }, "This is a mandatory question"));
};
exports.MultiAnswerQuestion = MultiAnswerQuestion;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Question = void 0;
var _react = _interopRequireDefault(require("react"));
var _MultipleChoiceQuestion = require("../MultipleChoiceQuestion");
var _SingleChoiceQuestion = require("../SingleChoiceQuestion");
var _YesNoQuestion = require("../YesNoQuestion");
var _ShortAnswerQuestion = require("../ShortAnswerQuestion");
var _LongAnswerQuestion = require("../LongAnswerQuestion");
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const questionTypeMap = {
  1: 'Multi',
  2: 'Single',
  3: 'Yes/No',
  4: 'Short',
  5: 'Long'
};
const Question = _ref => {
  let {
    question,
    questionNum,
    handleChange,
    value,
    error
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-question-container"
  }, questionTypeMap[question.type] === 'Multi' ? /*#__PURE__*/_react.default.createElement(_MultipleChoiceQuestion.MultiAnswerQuestion, {
    id: question._id,
    question: question.question,
    answerOptions: question.answerOptions,
    questionNum: questionNum,
    mandatory: question.mandatory,
    value: value,
    handleChange: handleChange,
    error: error
  }) : questionTypeMap[question.type] === 'Single' ? /*#__PURE__*/_react.default.createElement(_SingleChoiceQuestion.SingleAnswerQuestion, {
    id: question._id,
    question: question.question,
    answerOptions: question.answerOptions,
    questionNum: questionNum,
    mandatory: question.mandatory,
    value: value,
    handleChange: handleChange,
    error: error
  }) : questionTypeMap[question.type] === 'Yes/No' ? /*#__PURE__*/_react.default.createElement(_YesNoQuestion.YesNoQuestion, {
    id: question._id,
    question: question.question,
    questionNum: questionNum,
    mandatory: question.mandatory,
    value: value,
    handleChange: handleChange,
    error: error
  }) : questionTypeMap[question.type] === 'Short' ? /*#__PURE__*/_react.default.createElement(_ShortAnswerQuestion.ShortAnswerQuestion, {
    id: question._id,
    question: question.question,
    questionNum: questionNum,
    mandatory: question.mandatory,
    value: value,
    handleChange: handleChange,
    error: error
  }) : questionTypeMap[question.type] === 'Long' ? /*#__PURE__*/_react.default.createElement(_LongAnswerQuestion.LongAnswerQuestion, {
    id: question._id,
    question: question.question,
    questionNum: questionNum,
    mandatory: question.mandatory,
    value: value,
    handleChange: handleChange,
    error: error
  }) : null);
};
exports.Question = Question;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionText = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const QuestionText = _ref => {
  let {
    questionNum,
    mandatory,
    question
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "question-text "
  }, /*#__PURE__*/_react.default.createElement("div", null, "".concat(questionNum, ". ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(mandatory ? 'mandatory-question' : '')
  }, question));
};
exports.QuestionText = QuestionText;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortAnswerQuestion = void 0;
var _react = _interopRequireDefault(require("react"));
var _TextArea = require("../../../../../components/TextArea");
var _QuestionText = require("../QuestionText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ShortAnswerQuestion = _ref => {
  let {
    id,
    question,
    questionNum,
    mandatory,
    value,
    handleChange,
    error
  } = _ref;
  const onChange = val => {
    handleChange(val, questionNum);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "short-answer-question-container",
    id: id
  }, /*#__PURE__*/_react.default.createElement(_QuestionText.QuestionText, {
    questionNum: questionNum,
    mandatory: mandatory,
    question: question
  }), /*#__PURE__*/_react.default.createElement(_TextArea.TextArea, {
    classes: ['short-answer-text-area'],
    value: value,
    handleChange: onChange,
    maxLength: 500,
    placeholder: "Enter your answer",
    error: error
  }), mandatory && error && /*#__PURE__*/_react.default.createElement("div", {
    className: "validation-error"
  }, "This is a mandatory question"), /*#__PURE__*/_react.default.createElement("div", {
    className: "remaining-character"
  }, 500 - value.length, " characters left"));
};
exports.ShortAnswerQuestion = ShortAnswerQuestion;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleAnswerQuestion = void 0;
var _react = _interopRequireDefault(require("react"));
var _Radio = require("../../../../../components/Radio");
var _QuestionText = require("../QuestionText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SingleAnswerQuestion = _ref => {
  let {
    id,
    question,
    answerOptions,
    handleChange,
    questionNum,
    mandatory,
    value,
    error
  } = _ref;
  const onChange = ev => {
    handleChange(+ev.target.value, questionNum);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-answer-question-container",
    id: id
  }, /*#__PURE__*/_react.default.createElement(_QuestionText.QuestionText, {
    questionNum: questionNum,
    mandatory: mandatory,
    question: question
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "answer-options"
  }, answerOptions.map((option, index) => /*#__PURE__*/_react.default.createElement(_Radio.Radio, {
    checked: value === index,
    id: "".concat(id, "-op-").concat(index + 1),
    key: "".concat(id, "-op-").concat(index + 1),
    handleChange: onChange,
    label: option,
    value: index,
    name: id
  }))), mandatory && error && /*#__PURE__*/_react.default.createElement("div", {
    className: "validation-error"
  }, "This is a mandatory question"));
};
exports.SingleAnswerQuestion = SingleAnswerQuestion;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YesNoQuestion = void 0;
var _react = _interopRequireDefault(require("react"));
var _Radio = require("../../../../../components/Radio");
var _QuestionText = require("../QuestionText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const YesNoQuestion = _ref => {
  let {
    id,
    question,
    questionNum,
    mandatory,
    handleChange,
    value,
    error
  } = _ref;
  const onChange = ev => {
    handleChange(+ev.target.value, questionNum);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "yes-no-answer-question-container",
    id: id
  }, /*#__PURE__*/_react.default.createElement(_QuestionText.QuestionText, {
    questionNum: questionNum,
    mandatory: mandatory,
    question: question
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "answer-options"
  }, /*#__PURE__*/_react.default.createElement(_Radio.Radio, {
    checked: value === 0,
    label: "Yes",
    id: "".concat(id, "-op-yes"),
    name: id,
    value: 0,
    handleChange: onChange
  }), /*#__PURE__*/_react.default.createElement(_Radio.Radio, {
    checked: value === 1,
    label: "No",
    id: "".concat(id, "-op-$No"),
    name: id,
    value: 1,
    handleChange: onChange
  })), mandatory && error && /*#__PURE__*/_react.default.createElement("div", {
    className: "validation-error"
  }, "This is a mandatory question"));
};
exports.YesNoQuestion = YesNoQuestion;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreeningJobSeeker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Question = require("./components/Question");
var _Button = require("../../../components/Button");
var _Tooltip = require("../../../components/Tooltip");
var _getQuestionnaire = require("../../../../services/questionnaire/getQuestionnaire");
require("./styles.scss");
var _addQuestionResponse = require("../../../../services/questionResponse/addQuestionResponse");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ScreeningJobSeeker = _ref => {
  let {
    seekerId,
    associationPublished,
    submitCallback
  } = _ref;
  const INVOCATION = 1;
  const [questionnaire, setQuestionnaire] = (0, _react.useState)({});
  const [questions, setQuestions] = (0, _react.useState)([]);
  const [answers, setAnswers] = (0, _react.useState)([]);
  const [errors, setErrors] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    fetchQuestionaire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchQuestionaire = async () => {
    const params = {
      associationPublished: associationPublished,
      invocation: INVOCATION,
      seeker: seekerId
    };
    const resp = await (0, _getQuestionnaire.getQuestionnaire)(seekerId, params);
    const questionsData = resp.data.data[0].sections[0].questions;
    setQuestions(questionsData);
    setQuestionnaire(resp.data.data[0]);
    const newAnswers = [];
    for (const question of questionsData) {
      const ans = question.answer || (question.type === 1 ? [] : '');
      newAnswers.push(ans);
    }
    setAnswers(newAnswers);
  };
  const handleError = () => {
    window.alert('Something Went Wrong');
  };
  const handleChange = (ans, questionNo) => {
    let newAnswers = [...answers];
    if (questions[questionNo - 1].type === 1) {
      if (newAnswers[questionNo - 1].includes(ans)) {
        newAnswers[questionNo - 1] = newAnswers[questionNo - 1].filter(val => val !== ans);
      } else {
        newAnswers[questionNo - 1].push(ans);
      }
    } else {
      newAnswers[questionNo - 1] = ans;
    }
    setAnswers(newAnswers);
  };
  const handleSubmit = async () => {
    try {
      if (validate()) {
        const data = formatAnswerData();
        console.log(data);
        return;
        await (0, _addQuestionResponse.addQuestionResponse)(seekerId, data);
        submitCallback();
      }
    } catch (error) {
      console.log(error);
      handleError();
    }
  };
  const validate = () => {
    const newErrors = [];
    let flag = true;
    for (let i = 0; i < questions.length; i++) {
      const answer = answers[i];
      if (questions[i].mandatory) {
        if (questions[i].type === 1 && answer.length === 0) {
          newErrors.push('This is a mandatory question');
          flag = false;
        } else if ((questions[i].type === 2 || questions[i].type === 3) && !answer && answer !== 0) {
          newErrors.push('This is a mandatory question');
          flag = false;
        } else if ((questions[i].type === 4 || questions[i].type === 5) && answer.trim().length === 0) {
          newErrors.push('This is a mandatory question');
          flag = false;
        } else {
          newErrors.push('');
        }
      } else {
        newErrors.push('');
      }
    }
    setErrors(newErrors);
    console.log(newErrors, flag);
    return flag;
  };
  const formatAnswerData = () => {
    const answerObj = [];
    for (let i = 0; i < questions.length; i++) {
      const answer = answers[i];
      if ((answer || answer === 0) && answer.length > 0) {
        answerObj.push({
          id: questions[i]._id,
          answer: answer
        });
      }
    }
    const data = {
      questionnaireId: questionnaire._id,
      seeker: seekerId,
      assessedOn: new Date().toISOString(),
      associationPublished: associationPublished,
      invocation: INVOCATION,
      sections: [{
        id: 0,
        questions: answerObj
      }]
    };
    return data;
  };
  const mandatoryAnswered = () => {
    for (let i = 0; i < questions.length; i++) {
      const answer = answers[i];
      if (questions[i].mandatory) {
        if (!answer && answer !== 0 || answer.length === 0) return false;
      }
    }
    return true;
  };

  // if (!questions.length) {
  //     return <></>;
  // }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jobseeker-screening-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-heading"
  }, "Before you submit your application, tell the recruiter more about yourself"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container-subheading"
  }, "* Mandatory Question"), /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-questions-container"
  }, questions.map((question, index) => /*#__PURE__*/_react.default.createElement(_Question.Question, {
    key: question._id,
    question: question,
    questionNum: index + 1,
    handleChange: handleChange,
    value: answers[index],
    error: errors[index]
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "submission-btn",
    "data-tooltip-id": "screening-submission",
    "data-tooltip-content": mandatoryAnswered() ? '' : "Please answer all the mandatory questions"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: handleSubmit,
    theme: "black-round",
    disabled: !mandatoryAnswered()
    // dataTooltip="test message"
  }, "Next")), /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    id: "screening-submission"
  }));
};
exports.ScreeningJobSeeker = ScreeningJobSeeker;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _Dropdown = require("../../../../../components/Dropdown");
var _Checkbox = require("../../../../../components/Checkbox");
var _Button = require("../../../../../components/Button");
var _addQuestion = require("../../../../../../services/questions/addQuestion");
var _updateQuestion = require("../../../../../../services/questions/updateQuestion");
var _useOutsideClickDetector = require("../../../../../../utils/useOutsideClickDetector");
var _questionTypes = require("../../../../../../constants/questionTypes");
var _slice = require("../../slice");
require("./styles.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AddQuestionModal = props => {
  const {
    handleClose,
    createQuestionnaire,
    updateQuestionnaire
  } = props;
  const isEditModal = props.isEditModal || false;
  const questionDetails = props.questionDetails || {};
  const question = questionDetails.question || '';
  const type = questionDetails.type || 1;
  const mandatory = questionDetails.mandatory || false;
  const answerOptions = questionDetails.answerOptions || ['', ''];
  const modalRef = (0, _react.useRef)(null);
  const dispatch = (0, _reactRedux.useDispatch)();
  const userId = (0, _reactRedux.useSelector)(state => state.reducer.screening.userId);
  const invocation = (0, _reactRedux.useSelector)(state => state.reducer.screening.invocation);
  const questions = (0, _reactRedux.useSelector)(state => state.reducer.screening.questions);
  let questionnaireId = (0, _reactRedux.useSelector)(state => state.reducer.screening.questionnaireId);
  const [questionText, setQuestionText] = (0, _react.useState)(question);
  const [questionType, setQuestionType] = (0, _react.useState)(type);
  const [isMandatory, setIsMandatory] = (0, _react.useState)(mandatory);
  const [options, setOptions] = (0, _react.useState)(answerOptions); //at least 2 options by default
  const [optionErrors, setOptionErrors] = (0, _react.useState)({});
  (0, _useOutsideClickDetector.useOutsideClickDetector)(modalRef, handleClose);
  const handleOptionChange = (ev, index) => {
    const {
      value
    } = ev.target;
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };
  const addOption = () => {
    const newOptions = [...options, ''];
    setOptions(newOptions);
  };
  const deleteOption = index => {
    const newOptions = options.filter((_, i) => i !== index);
    const newOptionErrors = {
      ...optionErrors,
      [index]: ''
    };
    setOptionErrors(newOptionErrors);
    setOptions(newOptions);
  };
  const validateOptions = () => {
    let isValid = true;
    let errors = {
      ...optionErrors
    };
    for (let index = 0; index < options.length; index++) {
      const option = options[index];
      let isValidOption = true;
      if (!option.trim()) {
        errors = {
          ...errors,
          [index]: 'Please enter option'
        };
        isValidOption = false;
      } else {
        for (let j = 0; j < index; j++) {
          if (options[j].toLocaleLowerCase() === options[index].toLocaleLowerCase()) {
            errors = {
              ...errors,
              [index]: 'You have already added this option. Please remove or change this.'
            };
            isValidOption = false;
          }
        }
      }
      if (isValidOption) {
        errors = {
          ...errors,
          [index]: ''
        };
      } else {
        isValid = false;
      }
    }
    setOptionErrors(errors);
    return isValid;
  };
  const validate = () => {
    if (!questionText.trim().length) {
      // set question error here
      return false;
    }
    if (!validateOptions()) {
      return false;
    }
    return true;
  };
  const handleAddEditQuestion = async () => {
    if (validate()) {
      try {
        if (!questionnaireId) {
          const result = await createQuestionnaire();
          questionnaireId = result;
        }
        const data = {
          question: questionText,
          type: questionType,
          author: userId,
          mandatory: isMandatory,
          invocation: invocation
        };
        if (questionType < 3) {
          data['answerOptions'] = options;
        }
        const questionIds = [];
        if (isEditModal) {
          const response = await (0, _updateQuestion.updateQuestion)(userId, questionDetails._id, data);
          const newQuestionId = response['data']['data'];
          for (const question of questions) {
            if (question._id === questionDetails._id) {
              questionIds.push(newQuestionId);
            } else {
              questionIds.push(question._id);
            }
          }
          dispatch((0, _slice.editQuestion)({
            oldId: questionDetails._id,
            data: {
              ...data,
              _id: newQuestionId
            }
          }));
        } else {
          const response = await (0, _addQuestion.addQuestion)(userId, data);
          const newQuestionId = response['data']['data'];
          for (const question of questions) {
            questionIds.push(question._id);
          }
          questionIds.push(newQuestionId);
          dispatch((0, _slice.addQuestion)([{
            ...data,
            _id: newQuestionId
          }]));
        }
        await updateQuestionnaire(questionnaireId, questionIds);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-add-question-modal-container modal-conainer",
    ref: modalRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header-content"
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.Dropdown, {
    options: _questionTypes.questionTypes,
    onChange: e => setQuestionType(+e),
    defaultValue: questionType,
    classes: ['screening-question-type-dropdown']
  }), /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    onClick: () => setIsMandatory(!isMandatory),
    checked: isMandatory,
    label: "Mandatory",
    name: "isMandatory",
    id: "isMandatory"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-heading"
  }, "Question Text*"), /*#__PURE__*/_react.default.createElement("div", {
    className: "question-area"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "question-text-area screening-text-area",
    placeholder: "What would you like to ask?",
    value: questionText,
    onChange: e => setQuestionText(e.target.value),
    maxLength: 2000
  })), questionType < 3 && /*#__PURE__*/_react.default.createElement("div", {
    className: "options-area"
  }, options.map((option, index) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "options-area-block"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "option-text-area screening-text-area",
    placeholder: "Option".concat(index + 1),
    value: option,
    onChange: ev => handleOptionChange(ev, index),
    maxLength: 500
  }), options.length > 2 && /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-cross",
    onClick: () => deleteOption(index)
  })), optionErrors[index] ? /*#__PURE__*/_react.default.createElement("div", {
    className: "options-error"
  }, optionErrors[index]) : null)), options.length < 15 ? /*#__PURE__*/_react.default.createElement("span", {
    className: "action-link",
    onClick: addOption
  }, "Add Option") : /*#__PURE__*/_react.default.createElement("span", null, "Maximum 15 options can be added"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer-section"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: handleAddEditQuestion,
    type: "primary",
    classes: ['screening-action-btn', !questionText.trim().length || questionType <= 2 && !(options[0].trim().length && options[1].trim().length) ? 'disabled-btn' : ''],
    disabled: !questionText.trim().length || questionType <= 2 && !(options[0].trim().length && options[1].trim().length)
  }, !isEditModal ? 'Add' : 'Save'), /*#__PURE__*/_react.default.createElement("span", {
    className: "action-link",
    onClick: handleClose
  }, "Cancel")));
};
var _default = exports.default = AddQuestionModal;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _Checkbox = require("../../../../../components/Checkbox");
var _Button = require("../../../../../components/Button");
var _slice = require("../../slice");
var _useOutsideClickDetector = require("../../../../../../utils/useOutsideClickDetector");
require("./styles.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PreviousQuestionsModal = props => {
  const {
    handleClose,
    createQuestionnaire,
    updateQuestionnaire
  } = props;
  const modalRef = (0, _react.useRef)(null);
  const previousQuestions = (0, _reactRedux.useSelector)(state => state.reducer.screening.previousQuestions);
  const questions = (0, _reactRedux.useSelector)(state => state.reducer.screening.questions);
  let questionnaireId = (0, _reactRedux.useSelector)(state => state.reducer.screening.questionnaireId);
  const dispatch = (0, _reactRedux.useDispatch)();
  const addedQuestions = [];
  for (const question of questions) {
    for (const prevQue of previousQuestions) {
      if (question._id === prevQue._id) {
        addedQuestions.push(question._id);
      }
    }
  }
  const [selectedQuestions, setSelectedQuestions] = (0, _react.useState)([]);
  const [viewOptions, setViewOptions] = (0, _react.useState)(Array.from({
    length: 10
  }, () => false));
  (0, _useOutsideClickDetector.useOutsideClickDetector)(modalRef, handleClose);
  const toggleShowOptions = index => {
    const viewOptionsTemp = [...viewOptions];
    viewOptionsTemp[index] = !viewOptionsTemp[index];
    setViewOptions(viewOptionsTemp);
  };
  const handleSelectQuestion = selectedQuestion => {
    // screening can have maximum 10 question limit
    if (questions.length + selectedQuestions.length >= 10) {
      return;
    }
    // added question can't be unselected
    if (addedQuestions.includes(selectedQuestion._id)) {
      return;
    }
    let selectedQuestionsTemp = [...selectedQuestions];
    if (selectedQuestionsTemp.includes(selectedQuestion._id)) {
      selectedQuestionsTemp = selectedQuestionsTemp.filter(id => id !== selectedQuestion._id);
    } else {
      selectedQuestionsTemp.push(selectedQuestion._id);
    }
    setSelectedQuestions(selectedQuestionsTemp);
  };
  const addSelectedQuestions = async () => {
    if (!questionnaireId) {
      const data = await createQuestionnaire();
      questionnaireId = data;
    }
    let questionIds = [];
    const questionsToAdd = [];
    for (const question of questions) {
      questionIds.push(question._id);
    }
    questionIds = [...questionIds, ...selectedQuestions];
    for (const ques of previousQuestions) {
      if (selectedQuestions.includes(ques._id)) {
        questionsToAdd.push(ques);
      }
    }
    await updateQuestionnaire(questionnaireId, questionIds);
    dispatch((0, _slice.addQuestion)(questionsToAdd));
    handleClose();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-previous-questions-modal-container modal-conainer",
    ref: modalRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, "Use previously added questions"), /*#__PURE__*/_react.default.createElement("div", {
    className: "previous-questions-section"
  }, previousQuestions.map((question, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "previous-question-row",
    key: question._id
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    onClick: () => handleSelectQuestion(question),
    checked: selectedQuestions.includes(question._id) || addedQuestions.includes(question._id),
    label: question.question,
    name: "question",
    id: "".concat(question._id),
    inputProps: {
      disabled: addedQuestions.includes(question._id)
    }
  }), question.type < 3 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "option-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-question-options-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "view-hide-option-toggle-btn",
    onClick: () => toggleShowOptions(index)
  }, viewOptions[index] ? 'Hide Options' : 'View Options')), /*#__PURE__*/_react.default.createElement("div", {
    className: "question-option-container ".concat(viewOptions[index] ? 'visible' : ''),
    style: {
      maxHeight: viewOptions[index] ? 23 * question.answerOptions.length + 'px' : '0px'
    }
  }, (question.answerOptions || []).map(option => /*#__PURE__*/_react.default.createElement("div", {
    className: "single-option-row"
  }, option)))) : null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: addSelectedQuestions,
    type: "primary",
    classes: ['screening-action-btn', !selectedQuestions.length ? 'disabled-btn' : ''],
    disabled: !selectedQuestions.length
  }, "Add Selected Questions"), /*#__PURE__*/_react.default.createElement("span", {
    className: "action-link",
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement("span", {
    className: "added-question-count"
  }, "Your Added Questions:", ' ', questions.length + selectedQuestions.length, "/10")));
};
var _default = exports.default = PreviousQuestionsModal; // if question is already selected, it should be checked and disabled
// if num of total questions is 10 then no questions can be further selected
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _reactRedux = require("react-redux");
var _AddQuestion = _interopRequireDefault(require("../AddQuestion"));
var _slice = require("../../slice");
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const QuestionUnit = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    questionDetails,
    createQuestionnaire,
    updateQuestionnaire,
    connectDropTarget,
    connectDragPreview,
    connectDragSource
  } = _ref;
  const elementRef = (0, _react.useRef)();
  connectDropTarget(elementRef);
  (0, _react.useImperativeHandle)(ref, () => ({
    getNode: () => elementRef.current
  }));
  return connectDragPreview( /*#__PURE__*/_react.default.createElement("div", {
    ref: elementRef
  }, /*#__PURE__*/_react.default.createElement(QuestionBlock, {
    questionDetails: questionDetails,
    createQuestionnaire: createQuestionnaire,
    updateQuestionnaire: updateQuestionnaire,
    connectDragSource: connectDragSource
  })));
});
const QuestionBlock = props => {
  const {
    questionDetails,
    createQuestionnaire,
    updateQuestionnaire
  } = props;
  const [viewOptions, setViewOptions] = (0, _react.useState)(false);
  const [showEditQuestionModal, setShowEditQuestionModal] = (0, _react.useState)(false);
  const questions = (0, _reactRedux.useSelector)(state => state.reducer.screening.questions);
  const questionnaireId = (0, _reactRedux.useSelector)(state => state.reducer.screening.questionnaireId);
  const dispatch = (0, _reactRedux.useDispatch)();
  const handleDelete = async () => {
    const questionIds = [];
    for (const question of questions) {
      if (question._id !== questionDetails._id) {
        questionIds.push(question._id);
      }
    }
    try {
      await updateQuestionnaire(questionnaireId, questionIds);
      dispatch((0, _slice.removeQuestion)(questionDetails._id));
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-question-block",
    key: questionDetails._id
  }, props.connectDragSource( /*#__PURE__*/_react.default.createElement("i", {
    className: "icon-drag-and-drop"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "added-question-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-question-block-question-text"
  }, questionDetails.question), questionDetails.type <= 3 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-question-options-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "view-hide-option-toggle-btn",
    onClick: () => setViewOptions(!viewOptions)
  }, viewOptions ? 'Hide Options' : 'View Options')), /*#__PURE__*/_react.default.createElement("div", {
    className: "question-option-container ".concat(viewOptions ? 'visible' : ''),
    style: {
      maxHeight: viewOptions ? 23 * questionDetails.answerOptions.length + 'px' : '0px'
    }
  }, (questionDetails.answerOptions || []).map((option, index) => /*#__PURE__*/_react.default.createElement("div", {
    className: "single-option-row"
  }, option)))) : null), /*#__PURE__*/_react.default.createElement("div", {
    className: "action-icons"
  }, questionDetails.mandatory ? /*#__PURE__*/_react.default.createElement("i", {
    className: "icon-asterisk action-icon"
  }) : null, /*#__PURE__*/_react.default.createElement("i", {
    className: "icon-edit-1 action-icon",
    onClick: () => setShowEditQuestionModal(true)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-modal-container screening-actions-container "
  }, showEditQuestionModal && /*#__PURE__*/_react.default.createElement(_AddQuestion.default, {
    handleClose: () => setShowEditQuestionModal(false),
    createQuestionnaire: createQuestionnaire,
    updateQuestionnaire: updateQuestionnaire,
    questionDetails: questionDetails,
    isEditModal: true
  }))), /*#__PURE__*/_react.default.createElement("i", {
    className: "icon-delete action-icon",
    onClick: handleDelete
  })));
};

// export default QuestionBlock;
var _default = exports.default = (0, _reactDnd.DropTarget)('item', {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const node = component.getNode();
    if (!node) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    console.log(dragIndex, hoverIndex);
    if (dragIndex === hoverIndex) {
      return;
    }
    const hoverBoundingRect = node.getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.reArrageQuestions(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
  drop(props) {
    props.updateQuestionsOrder();
  }
}, connect => ({
  connectDropTarget: connect.dropTarget()
}))((0, _reactDnd.DragSource)('item', {
  beginDrag: props => ({
    index: props.index
  })
}, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))(QuestionUnit));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreeningRecruiter = ScreeningRecruiter;
var _react = _interopRequireWildcard(require("react"));
var _reactDnd = require("react-dnd");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactRedux = require("react-redux");
var _AddQuestion = _interopRequireDefault(require("./components/AddQuestion"));
var _QuestionBlock = _interopRequireDefault(require("./components/QuestionBlock"));
var _PreviousQuestions = _interopRequireDefault(require("./components/PreviousQuestions"));
var _Button = require("../../../components/Button");
var _slice = require("./slice");
var _getQuestions = require("../../../../services/questions/getQuestions");
var _getQuestionnaire = require("../../../../services/questionnaire/getQuestionnaire");
var _addQuestionnaire = require("../../../../services/questionnaire/addQuestionnaire");
var _updateQuestionnaire = require("../../../../services/questionnaire/updateQuestionnaire");
require("../../../fontello.scss");
require("./styles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ScreeningRecruiter(props) {
  const {
    jobId,
    userId,
    userType
  } = props;
  const [showAddQuestionModal, setShowAddQuestionModal] = (0, _react.useState)(false);
  const [showPrevQuestionsModal, setShowPrevQuestionsModal] = (0, _react.useState)(false);
  const dispatch = (0, _reactRedux.useDispatch)();

  // const invocation = useSelector(state => console.log(state, state.reducer, state.reducer.screening));
  const invocation = (0, _reactRedux.useSelector)(state => state.reducer.screening.invocation);
  const name = (0, _reactRedux.useSelector)(state => state.reducer.screening.name);
  const questions = (0, _reactRedux.useSelector)(state => state.reducer.screening.questions);
  const questionnaireId = (0, _reactRedux.useSelector)(state => state.reducer.screening.questionnaireId);
  const previousQuestions = (0, _reactRedux.useSelector)(state => state.reducer.screening.previousQuestions);
  (0, _react.useEffect)(() => {
    dispatch((0, _slice.setBasicInfo)(props));
    if (jobId) {
      fetchQuestionnaire();
    }
    fetchPreviousQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchPreviousQuestions = async () => {
    const params = {
      author: userId,
      availability: true,
      invocation
    };
    try {
      const prevQuestions = await (0, _getQuestions.getQuestions)(userId, params);
      dispatch((0, _slice.setPreviousQuestions)(prevQuestions['data']['data']));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchQuestionnaire = async () => {
    const params = {
      associationMeta: jobId,
      invocation: invocation
    };
    try {
      const response = await (0, _getQuestionnaire.getQuestionnaire)(userId, params);
      dispatch((0, _slice.setQuestions)(response['data']['data'][0]['sections'][0]['questions']));
      dispatch((0, _slice.setQuestionnaireId)(response['data']['data'][0]._id));
    } catch (error) {
      console.log(error);
    }
  };
  const createQuestionnaire = async () => {
    const data = {
      author: userId,
      authorType: userType,
      invocation: invocation,
      name: name,
      sections: [{
        type: 'static',
        questionIds: []
      }]
    };
    if (jobId) {
      data['associationMeta'] = jobId;
    }
    try {
      const response = await (0, _addQuestionnaire.addQuestionnaire)(userId, data);
      dispatch((0, _slice.setQuestionnaireId)(response['data']['data']._id));
      return response['data']['data'];
    } catch (error) {
      console.log(error);
    }
  };
  const updateCurrentQuestionnaire = async (questionnaireId, questionIds) => {
    const data = {
      sections: [{
        type: 'static',
        questionIds: questionIds
      }]
    };
    try {
      const response = await (0, _updateQuestionnaire.updateQuestionnaire)(userId, questionnaireId, data);
      return response['data']['data'];
    } catch (error) {
      console.log(error);
    }
  };
  const reArrageQuestions = (id1, id2) => {
    dispatch((0, _slice.rearrangeQuestion)({
      id1,
      id2
    }));
  };
  const updateQuestionsOrder = async () => {
    const questionIds = [];
    for (const question of questions) {
      questionIds.push(question._id);
    }
    const response = await updateCurrentQuestionnaire(questionnaireId, questionIds);
    return response;
  };
  return /*#__PURE__*/_react.default.createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend.HTML5Backend
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-recruiter-container "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-recruiter-heading"
  }, "Add Screening Questions"), /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-recruiter-sub-heading"
  }, "Candidates will be asked to answer these question before they submit their application. You can add up to 10 questions."), /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-question-blocks-container"
  }, questions.map((question, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: question._id
  }, /*#__PURE__*/_react.default.createElement(_QuestionBlock.default, {
    index: index,
    questionDetails: question,
    createQuestionnaire: createQuestionnaire,
    updateQuestionnaire: updateCurrentQuestionnaire,
    reArrageQuestions: reArrageQuestions,
    updateQuestionsOrder: updateQuestionsOrder
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-actions-container footer-container"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      setShowAddQuestionModal(true);
    },
    type: "primary",
    classes: ['screening-action-btn']
  }, "Add Question"), /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-sepration-text"
  }, "OR"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      setShowPrevQuestionsModal(true);
    },
    type: "primary",
    classes: ['screening-action-btn']
  }, "Previously Asked Questions"), /*#__PURE__*/_react.default.createElement("div", {
    className: "screening-modal-container"
  }, showAddQuestionModal && /*#__PURE__*/_react.default.createElement(_AddQuestion.default, {
    handleClose: () => setShowAddQuestionModal(false),
    createQuestionnaire: createQuestionnaire,
    updateQuestionnaire: updateCurrentQuestionnaire,
    questionDetails: true
  }), showPrevQuestionsModal && previousQuestions.length && /*#__PURE__*/_react.default.createElement(_PreviousQuestions.default, {
    handleClose: () => setShowPrevQuestionsModal(false),
    createQuestionnaire: createQuestionnaire,
    updateQuestionnaire: updateCurrentQuestionnaire
  })))));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setQuestions = exports.setQuestionnaireId = exports.setPreviousQuestions = exports.setBasicInfo = exports.removeQuestion = exports.rearrangeQuestion = exports.initialState = exports.editQuestion = exports.default = exports.addQuestion = void 0;
var _toolkit = require("@reduxjs/toolkit");
const initialState = exports.initialState = {
  questionnaireId: null,
  questions: [],
  previousQuestions: [],
  userId: null,
  userType: null,
  jobId: null,
  name: 'screening',
  invocation: 1
};
const screeningSlice = (0, _toolkit.createSlice)({
  name: 'screeningSlice',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions = [...state.questions, ...action.payload];
    },
    editQuestion: (state, action) => {
      for (let i = 0; i < state.questions.length; i++) {
        if (state.questions[i]._id === action.payload.oldId) {
          state.questions[i] = action.payload.data;
        }
      }
    },
    removeQuestion: (state, action) => {
      state.questions = state.questions.filter(question => question._id !== action.payload);
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    rearrangeQuestion: (state, action) => {
      const {
        id1,
        id2
      } = action.payload;
      let questions = state.questions;
      console.log(1, questions);
      let selectedQuestion = questions[id1];
      if (id2 < id1) {
        questions.splice(id2, 0, selectedQuestion);
        questions.splice(id1 + 1, 1);
      } else {
        questions.splice(id2 + 1, 0, selectedQuestion);
        questions.splice(id1, 1);
      }
      console.log(1, questions);
      state.questions = questions;
    },
    setPreviousQuestions(state, action) {
      state.previousQuestions = action.payload;
    },
    setQuestionnaireId: (state, action) => {
      state.questionnaireId = action.payload;
    },
    setBasicInfo: (state, action) => {
      state.jobId = action.payload.jobId;
      state.userId = action.payload.userId;
      state.userType = action.payload.userType;
    }
  }
});
const {
  addQuestion,
  editQuestion,
  removeQuestion,
  setQuestions,
  rearrangeQuestion,
  setPreviousQuestions,
  setQuestionnaireId,
  setBasicInfo
} = screeningSlice.actions;
exports.setBasicInfo = setBasicInfo;
exports.setQuestionnaireId = setQuestionnaireId;
exports.setPreviousQuestions = setPreviousQuestions;
exports.rearrangeQuestion = rearrangeQuestion;
exports.setQuestions = setQuestions;
exports.removeQuestion = removeQuestion;
exports.editQuestion = editQuestion;
exports.addQuestion = addQuestion;
var _default = exports.default = screeningSlice.reducer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Recruiter = require("./containers/Screening/Recruiter");
var _JobSeeker = require("./containers/Screening/JobSeeker");
require("./index.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/screening/recruiter",
    element: /*#__PURE__*/_react.default.createElement(_Recruiter.ScreeningRecruiter, {
      userId: 36942,
      userType: 1,
      jobId: 677878
    })
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/screening/jobseeker",
    element: /*#__PURE__*/_react.default.createElement(_JobSeeker.ScreeningJobSeeker, {
      seekerId: 1330434,
      associationPublished: 1396574,
      submitCallback: () => {
        console.log('submitted');
      }
    })
  })));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionTypes = void 0;
const questionTypes = exports.questionTypes = [{
  label: 'Multi choice',
  value: 1
}, {
  label: 'Single choice',
  value: 2
}, {
  label: 'Yes / No Question',
  value: 3
}, {
  label: 'Short Answer',
  value: 4
}, {
  label: 'Long Answer',
  value: 5
}];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ScreeningJobSeeker", {
  enumerable: true,
  get: function () {
    return _JobSeeker.ScreeningJobSeeker;
  }
});
var _JobSeeker = require("./app/containers/Screening/JobSeeker");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;
var _redux = require("redux");
var _slice = _interopRequireDefault(require("./app/containers/Screening/Recruiter/slice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const reducer = exports.reducer = (0, _redux.combineReducers)({
  screening: _slice.default
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(() => _interopRequireWildcard(require('web-vitals'))).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
var _default = exports.default = reportWebVitals;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuestionResponse = addQuestionResponse;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function addQuestionResponse(userId, data) {
  return _request.default.post("/user/".concat(userId, "/questionResponse"), data);
}
"use strict";
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuestionnaire = addQuestionnaire;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function addQuestionnaire(userId, data) {
  return _request.default.post("/user/".concat(userId, "/questionnaire"), data);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuestionnaire = getQuestionnaire;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getQuestionnaire(userId, params) {
  return _request.default.get("/user/".concat(userId, "/questionnaire"), {
    params
  });
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuestionnaire = updateQuestionnaire;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function updateQuestionnaire(userId, questionnaireId, data) {
  return _request.default.post("/user/".concat(userId, "/questionnaire/").concat(questionnaireId), data);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuestion = addQuestion;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function addQuestion(userId, data) {
  return _request.default.post("/user/".concat(userId, "/question"), data);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuestions = getQuestions;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getQuestions(userId, params) {
  return _request.default.get("/user/".concat(userId, "/question"), {
    params
  });
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateQuestion = updateQuestion;
var _request = _interopRequireDefault(require("../../utils/request"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function updateQuestion(userId, questionId, data) {
  return _request.default.post("/user/".concat(userId, "/question/").concat(questionId), data);
}
"use strict";

require("@testing-library/jest-dom");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reducers = require("./reducers");
const store = exports.store = (0, _toolkit.configureStore)({
  reducer: {
    reducer: _reducers.reducer
  }
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCookie;
function getCookie(name) {
  const nameEQ = name + '=';
  if (typeof document == 'undefined') return null;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frontEndInstance = exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _getCookie = _interopRequireDefault(require("./getCookie"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cookieName = process.env.REACT_APP_COOKIE_NAME;
const apiVersion = process.env.REACT_APP_API_VERSION;
const baseURL = "".concat(process.env.REACT_APP_BASE_URL, "/").concat(apiVersion);
const instance = _axios.default.create({
  baseURL: baseURL
  // withCredentials:true
});
const frontEndInstance = exports.frontEndInstance = _axios.default.create({
  withCredentials: true
});
instance.interceptors.request.use(requestSuccess, requestError);
frontEndInstance.interceptors.request.use(requestSuccess, requestError);
function requestSuccess(config) {
  config.headers.Authorization = "Bearer ".concat((0, _getCookie.default)(cookieName));
  return config;
}
function requestError(error) {
  return Promise.reject(error);
}
instance.interceptors.response.use(responseSuccess, responseError);
frontEndInstance.interceptors.request.use(responseSuccess, responseError);
function responseSuccess(response) {
  return response;
}
function responseError(error) {
  return Promise.reject(error);
}
var _default = exports.default = instance;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClickDetector = useOutsideClickDetector;
var _react = require("react");
/**
 * calls callback when user click outside the ref div
 */
function useOutsideClickDetector(ref, callback) {
  (0, _react.useEffect)(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
