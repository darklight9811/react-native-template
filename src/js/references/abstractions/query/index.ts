// Interfaces
import queryInterface from "../../interfaces/query.interface";

export default abstract class Query implements queryInterface {

  // -------------------------------------------------
  // Properties
  // -------------------------------------------------

  protected abstract strategy: any;

  protected query: any = [];
  protected instance: any;

  // -------------------------------------------------
  // Query methods
  // -------------------------------------------------

  public where = (arg1: any, arg2?: any, arg3?: any): any => {
    const data = this.buildWhere(arg1, arg2, arg3);

    // Add to query
    if (this.query.length === 0) {
      this.query = [data];
    }
    else {
      this.query[this.query.length - 1] = [...this.query[this.query.length - 1],...data];
    }

    // Always return self for concatenation
    return this;
  }

  public orWhere = (arg1: any, arg2?: any, arg3?: any): any => {
    const data = this.buildWhere(arg1, arg2, arg3);

    // Add to query
    this.query.push(data);

    // Always return self for concatenation
    return this;
  }

  public clear = () => {
    this.query = [];

    // Always return self for concatenation
    return this;
  }

  // -------------------------------------------------
  // Debug methods
  // -------------------------------------------------

  public raw = (): any[][] => {
    return this.query;
  }

  public print = (): string => {
    return this.strategy.print(this.query);
  }

  // -------------------------------------------------
  // Helper methods
  // -------------------------------------------------

  protected buildWhere (arg1: any, arg2?: any, arg3?: any) {
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

    return data;
  }
}