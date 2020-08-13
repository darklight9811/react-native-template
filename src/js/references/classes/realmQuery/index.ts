// Abstractions
import Query from "../../abstractions/query";

export default class RealmQuery extends Query {
  protected strategy: any = {
    print: (query: any) => {
      return query.map((item:any) => {
        return item.map((subitem:any) => {
          // Get parts
          const key         = subitem[0];
          const comparison  = subitem.length === 2 ? '=':subitem[1];
          const value       = subitem[subitem.length === 2 ? 1:2];

          // Value types
          if (typeof value === 'string')
            return `${key} ${comparison} '${value}'`;
          else
            return `${key} ${comparison} ${value}`;
        }).join(' AND ');
      }).join(' OR ');
    }
  };
}