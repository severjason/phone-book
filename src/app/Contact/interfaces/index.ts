
export interface AppContact {
  id: number;
  name: {
    first: string;
    last: string;
  };
  phone: string[];
  expanded: boolean;
}

export interface AppContactDivider {
  divider: string;
}

export interface AppContactAction {
  type: string;
  payload?: number;
}