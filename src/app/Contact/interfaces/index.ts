
export interface AppContact {
  id: number;
  name: {
    first: string;
    last: string;
  };
  phone: string[];
}

export interface AppContactDivider {
  divider: string;
}
