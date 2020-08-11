// Interfaces;
import typeInterface from '../../interfaces/type.interface';

export default abstract class ModelBase<T = Object> {
  // -------------------------------------------------
  // Properties
  // -------------------------------------------------

  // basic info
  protected abstract readonly tableName: string;
  protected abstract readonly attributes: {[key: string]: typeInterface | string};

  // model stance
  protected attributesValue: T = {} as any;

  // injectable stance
  private static injectables: Object[] = [];

  // -------------------------------------------------
  // Static methods
  // -------------------------------------------------

  public getAttributes = () => {
    return this.attributes;
  }

  public getTableName = () => {
    return this.tableName;
  }

  public static inject = (injectable: Object) => {
    ModelBase.injectables.push(injectable);
  };

  // -------------------------------------------------
  // Main methods
  // -------------------------------------------------

  public getFields = () => {
    return this.attributesValue;
  };

  public toJson = () => {
    return JSON.stringify(this.getFields());
  };
}