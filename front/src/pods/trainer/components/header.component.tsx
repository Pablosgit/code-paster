import React from 'react';
import { cx } from 'emotion';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import * as innerClasses from './header.styles';

interface Props {
  currentTrainerUrl: string;
  currentStudentUrl: string;
  className?: string;
}

export const HeaderComponent: React.FC<Props> = props => {
  const { currentStudentUrl, currentTrainerUrl, className } = props;

  return (
    <div className={cx(innerClasses.root, className)}>
      <CopyFieldComponent
        labelName="Trainer Link"
        inputId="trainer-link"
        urlLink={currentTrainerUrl ?? ''}
      />
      <CopyFieldComponent
        labelName="Students Link"
        inputId="student-link"
        urlLink={currentStudentUrl ?? ''}
      />
    </div>
  );
};

// CopyField Component - - - - - - - - - - - - - - -

interface CopyFieldProps {
  labelName: string;
  inputId: string;
  urlLink: string;
}

export const CopyFieldComponent: React.FC<CopyFieldProps> = props => {
  const { labelName, inputId, urlLink } = props;

  return (
    <>
      <label className={innerClasses.label} htmlFor={inputId}>
        {labelName}
      </label>
      <div className={innerClasses.inputContainer}>
        <input
          id={inputId}
          type="text"
          className={innerClasses.input}
          value={urlLink}
          readOnly
          aria-readonly
        />
        <button
          aria-label={`copy ${labelName}`}
          className={innerClasses.button}
          onClick={() => navigator.clipboard.writeText(urlLink)}
        >
          <FileCopyOutlinedIcon className={innerClasses.icon} />
        </button>
      </div>
    </>
  );
};
