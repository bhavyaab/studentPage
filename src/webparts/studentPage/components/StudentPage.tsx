import * as React from 'react';
import styles from './StudentPage.module.scss';
import { IStudentPageProps } from './IStudentPageProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class StudentPage extends React.Component<IStudentPageProps, {}> {
  
  public render(): React.ReactElement<IStudentPageProps> {
    return (
      <div className={ styles.studentPage }>
        <p className={styles.name}>{escape(this.props.name) || 'Full Name'}</p>
      </div>
    );
  }
}
