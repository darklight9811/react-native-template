export default interface queryInterface {
  // -------------------------------------------------
  // Query methods
  // -------------------------------------------------

  where (arg1: any, arg2?: any, arg3?: any): any;
  orWhere (arg1: any, arg2?: any, arg3?: any): any;
  clear (): any;

  // -------------------------------------------------
  // Retrieve methods
  // -------------------------------------------------

  // -------------------------------------------------
  // Debug methods
  // -------------------------------------------------

  raw (): any[][];
  print (): string;
}