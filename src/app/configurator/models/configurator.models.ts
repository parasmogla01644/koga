export interface IHeaderTab {
  id: string;
  disabled: boolean;
  target: string;
  controls: string;
  selected: boolean;
  title: string;
  ref: string;
}

export interface IExpansionTabs {
  title: string;
  ref: any;
  expand: boolean;
}

export interface IAppCards {
  isDisabled: boolean;
  caption: string;
  infoTitle: string;
  id: number;
  checked: boolean;
}
