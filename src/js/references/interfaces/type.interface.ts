export default interface typeInterface {
  // -------------------------------------------------
  // Values
  // -------------------------------------------------

  // the model table name
  name: string;
  type: string;
  primary?: boolean;
  required?: boolean;
  length?: number;
  data?: Object;

  // -------------------------------------------------
  // methods
  // -------------------------------------------------

  /** when saving to the dabatase */
  onSave: (value: any) => any;
  // when the value is set
  onRetrieve: (value: any) => any;
  // when the value is retrieved from the dabatase
  onDisplay: (value: any) => any;
};
