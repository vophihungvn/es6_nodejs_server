import Base from 'models/base'

export default class extends Base.Model {
  static get table_name () { return 'users'} 

  get tableName () { return this.constructor.table_name}

  get hasTimestamps() { return true; }
}