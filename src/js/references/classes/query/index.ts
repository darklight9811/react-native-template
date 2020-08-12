// Interfaces
import queryInterface from "../../interfaces/query.interface";
import injectableInterface from "../../interfaces/injectable.interface";

export default class Query implements queryInterface, injectableInterface {

  // -------------------------------------------------
  // Properties
  // -------------------------------------------------

  protected query: any = [];
  protected instance: any;

  // -------------------------------------------------
  // Query methods
  // -------------------------------------------------

  public where = (arg1: any, arg2?: any, arg3?: any): any => {
    let data;

    if (arg3) {
      data = [[arg1, arg2, arg3]];
    }
    else if (arg2) {
      data = [[arg1, "=", arg2]];
    }
    else {
      if (Array.isArray(arg1[0])) {
        data = arg1.map((item: any[]) => {
          if (item.length === 3) return item;
          else if (item.length === 2) return [item[0], '=', item[1]];
        });
      }
      else {
        data = [arg1];
      }
    }

    // Add to query
    this.query = [...this.query,...data];

    // Always return self for concatenation
    return (this as any).instance;
  }

  // -------------------------------------------------
  // Debug methods
  // -------------------------------------------------

  public raw = (): any[][] => {
    return this.query;
  }

  public print = (): string => {
    return '';
  }

  // -------------------------------------------------
  // Debug methods
  // -------------------------------------------------

  public bind = (parent: any) => {
    this.instance = parent;
  }
}