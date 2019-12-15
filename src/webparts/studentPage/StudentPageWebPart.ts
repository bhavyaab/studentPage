import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'StudentPageWebPartStrings';
import StudentPage from './components/StudentPage';
import { IStudentPageProps } from './components/IStudentPageProps';

export interface IStudentPageWebPartProps {
  name: string;
}

export default class StudentPageWebPart extends BaseClientSideWebPart<IStudentPageWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IStudentPageProps > = React.createElement(
      StudentPage,
      {
        name: this.properties.name,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('name', {
                  label: strings.NameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
