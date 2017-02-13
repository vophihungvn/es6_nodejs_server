import Base     from 'models/base'

export default class {
  constructor (model) {
    if (!model || !(model instanceof Base.constructor))
      throw "Must override your model"

    this.Model = model
  }

  async find (params) {
    let item = await this.Model.where( params ).fetch()
    
    return item
      ? item.toJSON()
      : null  
  }

  findAll (params) {
    return this.Model.where( params ).fetchAll();
  }   
  

  findById (id) {
    return this.find({ id })
  } 

  async save (params) {
    let item = await this.Model.forge(params).save();
    return item.toJSON();
  }

  update (params) {
    return this.save(params)
  }

  async delete (params = {}) {
    let items = await this.Model.where(params).fetchAll()
      , tasks = []

    items.each(item => {
      tasks.push(item.destroy());
    })

    return Promise.all(tasks)
  }
}